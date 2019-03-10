var mapTony;

function initMapTony() {
  console.log("yeet");
  mapTony = new google.maps.Map(document.getElementById("mapTony"), {
    center: {lat: 43.4, lng: -80.5},
    zoom: 8
  });

  tripRoute = {
    origin:"Chicago, IL",
    destination:"Los Angeles, CA",
    provideRouteAlternatives: false,
    travelMode: 'DRIVING',
    unitSystem: google.maps.UnitSystem.IMPERIAL
  };

  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  directionsDisplay.setMap(mapTony);
  calculateAndDisplayRoute(directionsService, directionsDisplay)
  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route(tripRoute, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

}
