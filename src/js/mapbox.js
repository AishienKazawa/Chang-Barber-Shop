const token =
  "pk.eyJ1IjoiZHVtbXkwMjMiLCJhIjoiY2w3cHc1cnlwMmp1MTQydDhqMHE1OG5lZiJ9.TkQQc_CEJhBT4ub7jnhVGA";

const mapStyle = "mapbox://styles/dummy023/cl8c015qa002115nowdeqh7yv";

mapboxgl.accessToken = token;
const map = new mapboxgl.Map({
  container: "map",
  style: mapStyle,
  center: [121.075235, 14.536214],
  zoom: 17,
});

map.on("click", (event) => {
  const features = map.queryRenderedFeatures(event.point, {
    layers: ["chang-barber-shop"],
  });

  if (!features.length) {
    return;
  }
  const feature = features[0];

  const popup = new mapboxgl.Popup({ offset: [150, -40] })
    .setLngLat([121.075235, 14.536214])
    .setHTML(`<h6>${feature.properties.address}</h6>`)
    .addTo(map);
});

map.on("wheel", (event) => {
  if (event.originalEvent.ctrlKey) {
    return;
  }

  if (event.originalEvent.metaKey) {
    return;
  }

  if (event.originalEvent.altKey) {
    return;
  }

  event.preventDefault();
});
