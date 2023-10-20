// Store our API endpoint as queryUrl. USED THE .JSON BUT NEED THE LAT AND LONG
// or //const url = "mongodb://localhost:8000/green_space_and_health"
const city_url = "master-table.json"

//Create our map, set Kansas City Airport MCI as midpint mid continent.coordinates obtained from airnav.com/airports. 
let myMap = L.map("map", {
  center: {lat: 39.2976111, lng:-94.7138889},
  zoom: 3,
});

 // add the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// An array containing each city's name, percentage_of_city_area, latitude, and longitude
// Looping through the cities array, create one marker for each city, bind a popup containing its name and population, and add it to the map.
// for (let i = 0; i < city.length; i++) {
//   let city = cities[i];
// }

// marker color for different depths. fill color for percent_of_city_area index [4] x = Percentage_of_city_area
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

  // get data with d3 Fetch the JSON data and console log it
d3.json(city_url, function(data) {
  console.log(data);

  // create circle markers based on radius of Percentage_of_city_area; color #000000 is black for around the circle. 
  // The percentage of city area indicated by the size of the circle. Cities with higher percentage appear larger.
    function createMarker(feature, y) {
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
    L.geoJson(data, {
    pointToLayer: createMarker,

    // add pop up. // Define a function that we want to run once for each feature in the features array. 
    //city, state, percentage_of_city_area, lat, long.  the other info will be in the info boc under the drop down menu 
   
    onEachFeature: function (feature, layer) {

      layer.bindPopup(`<h3>Location: ${data.city}</h3><hr><p>Percentage_of_park_area: ${data.percentage_of_city_area}
      </p><p>Coordinates: ${data.lat},${data.long}</p>`);
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
    
