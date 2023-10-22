const mongo_endpoint='mongo';

// import ApexCharts from 'apexcharts'


d3.json(mongo_endpoint).then(function(data) {
    console.log(data)

console.log(data.length)

let listx = []

let listy = []

let listz = []

for (let i = 0; i < data.length; i++) {
    listy.push(data[i].ob_data_value)
};

for (let i = 0; i < data.length; i++) {
    listx.push(data[i].park_acres)
};

for (let i = 0; i < data.length; i++) {
    listz.push(data[i].city)
};

console.log(listx)

console.log(listy)

var options = {
    series: [{
    name: 'Park Acerage',
    type: 'column',
    data: listx
  }, {
    name: 'Obesity Prevalence',
    type: 'line',
    data: listy
  }],
    chart: {
    height: 350,
    type: 'line',
  },
  stroke: {
    width: [0, 4]
  },
  title: {
    text: 'Park Acerage and Obesity Prevalence'
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1]
  },
  labels: listz,
  xaxis: {
    type: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
  },
  yaxis: [{
    title: {
      text: 'Park Acerage',
    },
  
  }, {
    opposite: true,
    title: {
      text: 'Obesity Prevalence'
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

});