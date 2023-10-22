const mongo_endpoint='mongo';

// import ApexCharts from 'apexcharts'


d3.json(mongo_endpoint).then(function(data) {
    console.log(data)

console.log(data.length)

listx = []

let listy = []      

for (let i = 0; i < data.length; i++) {
    listy.push(data[i].ob_data_value)
};

for (let i = 0; i < data.length; i++) {
    listx.push(data[i].city)
};

console.log(listx)

console.log(listy)

var options = {
    series: [{
    name: 'Bubble',
    data: data
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
      tickAmount: 50,
      type: 'category',
  },
  yaxis: {
      max: 70
  }
  };
  let Bubblechart = new ApexCharts(document.querySelector("#bubble_plot"), options);
  Bubblechart.render();

});
