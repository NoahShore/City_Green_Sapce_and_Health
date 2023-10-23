const mongo_endpoint='mongo';

// Access the MongoDB data via the Mongo endpoint.
d3.json(mongo_endpoint).then(function(data) {
  console.log(data);

// function to put it in leaflet standard required format
  function noah2GeoJSON(mydata) {
    let geojsonFeature = {
      "type": "Feature",
      "properties": {
          "city": mydata.city,
          "dv_data_value": mydata.dv_data_value,
          "mh_data_value": mydata.mh_data_value,
          "ob_data_value": mydata.ob_data_value,
          "park_acres": mydata.park_acres,
          "percent_of_city_area": mydata.percent_of_city_area,
          "state": mydata.state,
      },
      "geometry": {
          "type": "Point",
          "coordinates": [mydata.lon, mydata.lat]
      }
    }
    return geojsonFeature
  }
  
let geoData = data.map(noah2GeoJSON);
  console.log(geoData)


//Create our map, set Kansas City Airport MCI as midpint mid continent.coordinates obtained from airnav.com/airports. 
let myMap = L.map("map", {
  center: {lat: 39.2976111, lng:-94.7138889},
  zoom: 5,
});

 // add the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

  // Create the empty marker layer for the marker clusters
let markers = L.markerClusterGroup();

for (let j = 1; j < metadata.length; j++) {
  // Create an HTML string to populate the marker popup. The string uses an HTML description list to create heading-value pairs.
  metadata[j] = ("<dl><dt>City</dt><dd>" + String(city[j]) + "</dd><dt>State</dt><dd>" + String(state[j]) + 
  "</dd><dt>Percentage_of_Park_Area</dt><dd>" + String(percentage_of_city_area[j]) + "</dd><dt>Latitude</dt><dd>" + String(lat[j])
  + "</dd><dt>Longitude</dt><dd>" + String(long[j]) + "</dd></dl>");
  // Create a marker for the given location and attach the metadata as a popup. Add the marker to the marker cluster layer.
  markers.addLayer((L.marker([lat[j][0], lng[j][0]])).bindPopup(metadata[j]));
};

// Add the layer with the marker clusters to the map
myMap.addLayer(markers);

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


// // marker color for different fill color for percent_of_city_area index [4] x = Percentage_of_city_area
// function markerColor(x) {
//   switch (true) {
//   case x > 80:
//     return '#194d00';
//   case x  > 50:
//     return '#2a8000';
//   case x > 25:
//       return '#3bb300';
//   case x > 20:
//       return '#4ce600';
//   case x > 15:
//       return '#66ff1a';
//   case x > 10:
//     return '#aaff80';
//   case x > 5:
//     return '#ccffb3';
//   case x > 2:
//     return '#eeffe6';
//   default:   // anything <2
//     return '#ffff99';
//   }
// }

// // create circle markers based on radius of Percentage_of_city_area; color #000000 is black for around the circle. 
// // The percentage of city area indicated by the size of the circle. Cities with higher percentage appear larger.
//   function createMarker(feature, geoData) {
//     return L.circleMarker(geoData, {
//         opacity: 1,
//         fillOpacity: 1,
//         fillColor: markerColor(feature.properties.percentage_of_city_area),
//         radius: feature.properties.percentage_of_city_area *3,
//         color: "#000",
//         weight: 0.5
//       });
//     }

// //add data to map.  data is all the features. 
//   L.geoJson(geoData, {
//   pointToLayer: createMarker,

// //add pop up for each city on map. Define a function that runs once for each data in the data array. 
// // display in pop up the city, state, percentage_of_city_area, lat, long.   
  
//   onEachFeature: function (feature, layer) {

//     layer.bindPopup(`<h3>Location: ${feature.properties.city},${feature.properties.state}</h3><hr><p>Percentage_of_park_area: ${feature.properties.percentage_of_city_area}
//     </p><p>Coordinates: ${feature.geometry[1]},${feature.geometry[0]}</p>`);
//   }
//   }).addTo(myMap);


