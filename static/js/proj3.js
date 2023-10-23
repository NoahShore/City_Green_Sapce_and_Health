// Place url in a constant variable
const mongo_endpoint='mongo';
// Fetch the JSON data and console log it
d3.json(mongo_endpoint).then(function(data) {
  console.log(data);



let cities = []

 for (let i = 0; i < data.length; i++) {
     cities.push(data[i].city);
   }
console.log(cities);

// Initialize the dashboard at start up 
function init() {
    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");

    // Use D3 to get sample names and populate the drop-down selector
    d3.json(mongo_endpoint).then((data) => {
        console.log(data)
        
        // Set a variable for the sample names
<<<<<<< HEAD
        let city_name = data.city;
    
        // Add  samples to dropdown menu
        data.city.forEach(function(city_name) {
            dropdownMenu.append("option")
            .text(city_name)
            .property("value",city_name);
        });

        // Set the first sample from the list
        let sample_one = cities[0];

        // Log the value of sample_one
        console.log(sample_one);

        // // Build the initial plots
        // buildMetadata(sample_one);
        // buildBarChart(sample_one);
        // buildBubbleChart(sample_one);
        // buildGaugeChart(sample_one);

    });
};

// Function that populates metadata info
function demoInfo(city_name) {

    // Use D3 to retrieve all of the data
    d3.json(mongo_endpoint).then((data) => {

        // Retrieve all metadata
        let info = data;
        console.log(data)

        // Filter based on the value of the sample
        let value = buildInfo.filter(result => result.id == sample);

        // Log the array of metadata objects after the have been filtered
        console.log(value)

        // Get the first index from the array
        let valueData = value[0];

        // Clear out metadata
        d3.select("#sample-metadata").html("");

        // Use Object.entries to add each key/value pair to the panel
        Object.entries(valueData).forEach(([key,value]) => {

            // Log the individual key/value pairs as they are being appended to the metadata panel
            console.log(key,value);

            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
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
        let otu_ids = valueData.otu_ids;
        let otu_labels = valueData.otu_labels;
        let sample_values = valueData.sample_values;

        // Log the data to the console
        console.log(otu_ids,otu_labels,sample_values);

        // Set top ten items to display in descending order
        let yticks = otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse();
        let xticks = sample_values.slice(0,10).reverse();
        let labels = otu_labels.slice(0,10).reverse();
        
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
            title: "Top 10 OTUs Present"
        };

        // Call Plotly to plot the bar chart
        Plotly.newPlot("bar", [trace], layout)
    });
};
});