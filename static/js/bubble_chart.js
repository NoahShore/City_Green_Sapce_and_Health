const mongo_endpoint='mongo';

// import ApexCharts from 'apexcharts'


d3.json(mongo_endpoint).then(function(data) {
    console.log(data.length)
-
console.log(data.length)

let list = []      

for (let i = 0; i < data; i++) {
    list.push(data[i].ob_data_value)
};

console.log(list)

var mongo_endpoint = 'mongodb://localhost:27017/green_spaces_and_health';

$.getJSON(mongo_endpoint, function(response) {
  chart.updateSeries([{
    name: 'bubble_chart',
    data: response
  }])
});

var options = {
    series: [{
    name: 'Bubble',
    data: list,
  }],
    chart: {
      type: 'bubble',
  },
  dataLabels: {
      enabled: false
  },
  title: {
      text: 'Obesity Data by City'
  },
  xaxis: {
      tickAmount: 95,
      type: 'category',
  },
  yaxis: {
      max: 70
  }
  };
  let Bubblechart = new ApexCharts(document.querySelector("#bubble_chart"), options);
  Bubblechart.render();

});

// const mongo_endpoint='mongo';

// d3.json(mongo_endpoint).then(function(data) {
//   console.log(data);

// const config = {
//   type: 'scatter',
//   data: data,
//   options: {
//     scales: {
//       x: {
//         type: 'linear',
//         position: 'bottom'
//       }
//     }
//   }
// };
// });