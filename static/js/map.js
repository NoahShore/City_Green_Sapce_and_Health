//Constant endpoint is our MongoDb 'mongo' with all the needed data in 'data' DataFrame.
const mongo_endpoint='mongo';
d3.json(mongo_endpoint).then(function(data) {
  console.log(data);
});
//Create our map, set Kansas City Airport MCI as midpint mid continent.coordinates obtained from airnav.com/airports. 
let myMap = L.map("map", {
  center: {lat: 39.2976111, lng:-94.7138889},
  zoom: 3,
});

 // add the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// marker color for different fill color for percent_of_city_area index [4] x = Percentage_of_city_area
  function markerColor(x) {
    switch (true) {
    case x > 80:
      return '#194d00';
    case x  > 50:
      return '#2a8000';
    case x > 25:
        return '#3bb300';
    case x > 20:
        return '#4ce600';
    case x > 15:
        return '#66ff1a';
    case x > 10:
      return '#aaff80';
    case x > 5:
      return '#ccffb3';
    case x > 2:
      return '#eeffe6';
    default:   // anything <2
      return '#ffff99';
    }
  }
// Fetch the JSON data and console log it
d3.json(mongo_endpoint).then(function(data) {
  console.log(data);

  // create circle markers based on radius of Percentage_of_city_area; color #000000 is black for around the circle. 
  // The percentage of city area indicated by the size of the circle. Cities with higher percentage appear larger.
    function createMarker(data, y) {
      return L.circleMarker(y, {
        opacity: 1,
        fillOpacity: 1,
        fillColor: markerColor(data.percentage_of_city_area),
        radius: data.percentage_of_city_area *3,
        color: "#000",
        weight: 0.5
      });
    }
//add data to map
    // L.geoJson(data, {
    // pointToLayer: createMarker,

    //add data to map
    L.geoJson(data, {
    pointToLayer: createMarker,

    //add pop up for each city on map. Define a function that runs once for each data in the data array. 
    // display in pop up the city, state, percentage_of_city_area, lat, long.   
   
    // onEachFeature: function (data, layer) {

    onEachFeature: function (data, layer) {

      layer.bindPopup(`<h3>Location: ${data.city},${data.state}</h3><hr><p>Percentage_of_park_area: ${data.percentage_of_city_area}
      </p><p>Coordinates: ${data.lat},${data.lon}</p>`);
    }
    }).addTo(myMap);

//add legend
let legend = L.control({position: 'bottomright'});

legend.onAdd = function () {
    let div = L.DomUtil.create('div', 'info legend');
    let x = [2, 5, 10, 15, 20, 25, 50, 80];
    let y = [
      '#eeffe6',
      '#ccffb3',
      '#aaff80',
      '#66ff1a',
      '#4ce600',
      '#3bb300',
      '#2a8000',
      '#194d00'
    ];

    for (let i = 0; i < x.length; i++) {
      div.innerHTML +=
          '<i style="background:' + y[i] + '"></i> ' +
          x[i] + (x[i + 1] ? '&ndash;' + x[i + 1] + '<br>' : '+');
  }    
  return div;
};

// Add legend to map
legend.addTo(myMap);

});


