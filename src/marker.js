const mapboxgl = require("mapbox-gl");
const map = require("./index.js")


function markerMaker(locationType , coordinates){
  locationType = locationType.toLowerCase()
// name = name.replace(/\s/g, '_')
// .replace(/\W/g, '')
// .toLowerCase();
const obj = {
  activity: "url(http://i.imgur.com/WbMOfMl.png)",
  hotel: "url(http://i.imgur.com/D9574Cu.png)",
  restaurant: "url(http://i.imgur.com/cqR6pUI.png)",
}
const marker = document.createElement('div');
fullStackEl.style.width = '32px';
fullStackEl.style.height = '39px';
fullStackEl.style.backgroundImage = obj[locationType];

new mapboxgl.Marker(marker)
    .setLngLat(coordinates)
    .addTo(map);
}

module.exports = markerMaker
