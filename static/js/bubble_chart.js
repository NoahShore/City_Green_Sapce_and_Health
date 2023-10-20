const mongo_endpoint='mongo';

// import ApexCharts from 'apexcharts'


d3.json(mongo_endpoint).then(function(data) {
    console.log(data)

console.log(data.length)

let list = []      

for (let i = 0; i < data.length; i++) {
    list.push(data[i].ob_data_value)
};

console.log(list)

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
  let Bubblechart = new ApexCharts(document.querySelector("#bubble_plot"), options);
  Bubblechart.render();

});
