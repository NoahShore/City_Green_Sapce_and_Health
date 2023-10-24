const mongo_endpoint='mongo';

// import ApexCharts from 'apexcharts'


d3.json(mongo_endpoint).then(function(data) {
    console.log(data.length)

console.log(data.length);

// create a list to hold the data for obesity
let data_points = [];

for (let i = 0; i<data.length; i++) {
  data_points.push([data[i].park_acres , data[i].ob_data_value]) //listz.push(data[i].ob_data_value)
};
console.log(data_points);

// create a list to hold the data for mental health
let mh_data_points = [];

for (let i = 0; i<data.length; i++) {
  mh_data_points.push([data[i].park_acres , data[i].mh_data_value]) //listz.push(data[i].ob_data_value)
};
console.log(mh_data_points);

// create a list to hold the data for doctor visits
let dv_data_points = [];

for (let i = 0; i<data.length; i++) {
  dv_data_points.push([data[i].park_acres , data[i].dv_data_value]) //listz.push(data[i].ob_data_value)
};
console.log(dv_data_points);


// set the options for the chart
let options = {
  series: [{
  name: "Obesity",
  data: data_points,
},{
  name: "Mental Health",
  data: mh_data_points,
},{
  name: "Doctor's Visit",
  data:  dv_data_points,
}],
  chart: {
  height: 350,
  type: 'scatter',
  zoom: {
    enabled: true,
    type: 'xy'
  }
},
xaxis: {
  tickAmount: 10,
  labels: {
    formatter: function(val) {
      return parseFloat(val).toFixed(1)
    }
  }
},
yaxis: {
  tickAmount: 7
}
};

//aissign the chart
let chart = new ApexCharts(document.querySelector("#bubble_plot"), options);
chart.render();

});