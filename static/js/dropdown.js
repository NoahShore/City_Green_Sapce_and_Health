// Place url in a constant variable
//const url = "mongodb://localhost:8000/green_space_and_health"
const mongo_endpoint='mongo';
// Fetch the JSON data and console log it
d3.json(city_data, function(data) {
  console.log(data);
});

// Initialize the dashboard at start up 
function init() {

    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");

    // Use D3 to get sample names and populate the drop-down selector
    d3.json(city_data).then((data) => {
        
        // Set a variable for the sample names
        let city = data.city;

        // Add  samples to dropdown menu
        city.forEach((id) => {

            dropdownMenu.append("option")
            .text(city)
            .property("value",city);
        });

        // Set the first sample from the list
        let sample_one = city[0];

        // Log the value of sample_one
        console.log(sample_one);

        // Build the initial plots
        buildInfoData(sample_one);
        // buildBarChart(sample_one);
        // buildBubbleChart(sample_one);
        // buildGaugeChart(sample_one);

    });
};

// Function that populates metadata info
function buildInfoData(sample) {

    // Use D3 to retrieve all of the data
    d3.json(city_data).then((data) => {

        // Retrieve all data
        let info = data.city_data;

        // Filter based on the value of the sample
        let value = info.filter(result => result.id == sample);

        // Log the array of metadata objects after the have been filtered
        console.log(value)

        // Get the first index from the array
        let valueData = value[0];

        // Clear out metadata
        d3.select("#sample-info").html("");

        // Use Object.entries to add each key/value pair to the panel
        Object.entries(valueData).forEach(([key,value]) => {

            // Log the individual key/value pairs as they are being appended to the metadata panel
            console.log(key,value);

            d3.select("#sample-info").append("h5").text(`${key}: ${value}`);
        });
    });

};

// Function that builds the bar chart
function buildBarChart(sample) {

    // Use D3 to retrieve all of the data
    d3.json(city_data).then((data) => {

        // Retrieve all sample data
        let sampleInfo = data.samples;

        // Filter based on the value of the sample
        let value = sampleInfo.filter(result => result.id == sample);

        // Get the first index from the array
        let valueData = value[0];

        // Get the otu_ids, lables, and sample values
        let ob_data = valueData.ob_data_value;
        let mh_data = valueData.mh_data_value;
        let dv_data = valueData.dv_data_value;

        // Log the data to the console
        console.log(ob_data,mh_data,dv_data);

        // Set top ten items to display in descending order
        let yticks = ob_data.slice(0,10).map(id => `OTU ${id}`).reverse();
        let xticks = dv_data.slice(0,10).reverse();
        let labels = mh_data.slice(0,10).reverse();
        
        // Set up the trace for the bar chart
        let trace = {
            x: xticks,
            y: yticks,
            text: labels,
            type: "bar",
            orientation: "h"
        };

        // Setup the layout
        let layout = {
            title: "Top 10 Health"
        };

        // Call Plotly to plot the bar chart
        Plotly.newPlot("bar", [trace], layout)
    });
};