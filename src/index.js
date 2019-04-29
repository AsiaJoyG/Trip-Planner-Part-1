const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1Ijoibmlra2liZXJnYW1pbmkiLCJhIjoiY2p2MmptY20wMHl2NDQ0cW9waHNkZXJrdyJ9.3oHsdfluQj14VtjEGYX-Xw';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const fullStackEl = document.createElement('div');
fullStackEl.style.width = '32px';
fullStackEl.style.height = '39px';
fullStackEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

new mapboxgl.Marker(fullStackEl)
    .setLngLat([-74.009151, 40.705086])
    .addTo(map);

