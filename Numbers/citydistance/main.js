var map = L.mapbox.map('map', 'examples.map-zr0njcqy');

map.markerLayer.on('ready', function(e) {
  
  var line = [];

  this.eachLayer(function(marker) {
    line.push(marker.getLatLng());
  });

  var polyline_options = {
    color: '#000'
  };

  var polyline = L.polyline(line, polyline_options).addTo(map);
});