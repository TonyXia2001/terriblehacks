var mapTony;

function initMapTony() {
  console.log("yeet");
  mapTony = new google.maps.Map(document.getElementById("mapTony"), {
    center: {lat: 33, lng: 150},
    zoom: 8
  });
}
