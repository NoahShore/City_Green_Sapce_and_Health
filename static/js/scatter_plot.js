const mongo_endpoint='mongo';

// import ApexCharts from 'apexcharts'


d3.json(mongo_endpoint).then(function(data) {
    console.log(data.length)

console.log(data.length);

let listy = []      

for (let i = 0; i < data.length; i++) {
    listy.push(data[i].ob_data_value)
};

console.log(listy)

let listx = []      

for (let i = 0; i < data.length; i++) {
    listx.push(data[i].city)
};

console.log(listx)

let listz = []      

for (let i = 0; i < data.length; i++) {
  listz.push({acres: data[i].park_acres , ob_value: data[i].ob_data_value, city_name: data[i].city}) //listz.push(data[i].ob_data_value)
};

console.log(listz)

let data_points = [];

for (let i = 0; i<data.length; i++) {
  data_points.push([data[i].park_acres , data[i].ob_data_value]) //listz.push(data[i].ob_data_value)
};
console.log(data_points);

let names = [];

for (let i = 0; i<data.length; i++) {
  names.push([data[i].city]) //listz.push(data[i].ob_data_value)
};

console.log(names);

let mh_data_points = [];

for (let i = 0; i<data.length; i++) {
  mh_data_points.push([data[i].park_acres , data[i].mh_data_value]) //listz.push(data[i].ob_data_value)
};
console.log(mh_data_points);

let dv_data_points = [];

for (let i = 0; i<data.length; i++) {
  dv_data_points.push([data[i].park_acres , data[i].dv_data_value]) //listz.push(data[i].ob_data_value)
};
console.log(dv_data_points);



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

let chart = new ApexCharts(document.querySelector("#bubble_plot"), options);
chart.render();

});