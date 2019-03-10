var mapTony;

function initMapTony() {
  console.log("yeet");
  mapTony = new google.maps.Map(document.getElementById("mapTony"), {
    center: {lat: 40, lng: 120},
    zoom: 8
  });

  
}
