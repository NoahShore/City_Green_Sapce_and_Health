const mongo_endpoint='mongo';

// Fetch the JSON data and console log it
d3.json(mongo_endpoint).then(function(data) {
  console.log(data);

let sorted = data.sort((a, b) => b.park_acres - a.park_acres);

slicedData = sorted.slice(0, 10);

let trace1 = {
    x: slicedData.map(row => row.city), // ASK IF YOU CAN ADD STATE WITH THIS
    y: slicedData.map(row => row.park_acres),
    type: "bar"
};

let traceData = [trace1];

let layout ={
    title: "Top 10 Park Acerages by City"
};

Plotly.newPlot("plot", traceData, layout);


let dv_sorted = data.sort((a, b) => b.dv_data_value - a.dv_data_value);

dv_slicedData = dv_sorted.slice(0, 10);

let trace2 = {
    x: dv_slicedData.map(row => row.city), // ASK IF YOU CAN ADD STATE WITH THIS
    y: dv_slicedData.map(row => row.dv_data_value),
    type: "bar"
};

let traceData2 = [trace2];

let layout2 ={
    title: "Top 10 Highest Dr.Visits by City"
};

Plotly.newPlot("plot2", traceData2, layout2);

let mh_sorted = data.sort((a, b) => b.mh_data_value - a.mh_data_value);

mh_slicedData = mh_sorted.slice(0, 10);

let trace4 = {
    x: mh_slicedData.map(row => row.city), // ASK IF YOU CAN ADD STATE WITH THIS
    y: mh_slicedData.map(row => row.mh_data_value),
    type: "bar"
};

let traceData4 = [trace4];

let layout4 ={
    title: "Top 10 Highest Poor Mentalh Health Prevalence by City"
};

Plotly.newPlot("plot4", traceData4, layout4);

let ob_sorted = data.sort((a, b) => b.ob_data_value - a.ob_data_value);

ob_slicedData = ob_sorted.slice(0, 10);

let trace3 = {
    x: ob_slicedData.map(row => row.city), // ASK IF YOU CAN ADD STATE WITH THIS
    y: ob_slicedData.map(row => row.ob_data_value),
    type: "bar"
};

let traceData3 = [trace3];

let layout3 ={
    title: "Top 10 Highest Obesity Prevalence by City"
};

Plotly.newPlot("plot3", traceData3, layout3);
});

