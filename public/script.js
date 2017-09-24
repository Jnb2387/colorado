mapboxgl.accessToken ="pk.eyJ1Ijoiam5iMjM4NyIsImEiOiJjajcxOWNrZzEwNGhoMnFwMXk1aGZvbzJqIn0.2icKvjSsijDAwqlJA1a54Q"
var map = new mapboxgl.Map({
    container: "map", // container id
    // style: "mapbox://styles/jnb2387/cj6ku9dfd7hsi2rnzrfsvj1rp", // stylesheet location
    style: "../style.json",
    center: [-105.0009, 39.7472], //Denver
    zoom: 7, // starting zoom
    hash: true
  });
    //show me what lay this is
    map.on("click", function(e) {
        var features = map.queryRenderedFeatures(e.point);
        console.log(features[0]);
      });