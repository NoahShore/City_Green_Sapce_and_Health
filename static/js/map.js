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

// Make a list to hold each data value
  let lat = [];
  let lon = [];
  let city = [];
  let state = [];
  let percentage_of_city_area = [];


// Attach data to the markers for the map
  for (let i = 1; i < data.length; i++){    
    lat[i] = [data[i]['lat']]
    lon[i] = [data[i]['lon']]
    city[i] = [data[i]['city']]
    state[i] = [data[i]['state']]
    percentage_of_city_area[i] = [data[i]['percent_of_city_area']]
  };
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

let metaData =[]

for (let j = 1; j < geoData.length; j++) {
  // Create an HTML string to populate the marker popup. The string uses an HTML description list to create heading-value pairs.
  metaData[j] = ("<dl><dt>City</dt><dd>" + String(city[j]) + "</dd><dt>State</dt><dd>" + String(state[j]) + 
  "</dd><dt>Percentage_of_Park_Area</dt><dd>" + String(percentage_of_city_area[j]) + "</dd><dt>Latitude</dt><dd>" + String(lat[j])
  + "</dd><dt>Longitude</dt><dd>" + String(lon[j]) + "</dd></dl>");
  // Create a marker for the given location and attach the metadata as a popup. Add the marker to the marker cluster layer.
  markers.addLayer((L.marker([lat[j][0], lon[j][0]])).bindPopup(metaData[j]));
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





