var map;
var serviceMemes;

var LatMidpointMemes, LongMidpointMemes;
var RadiusMemes;

function initMap() {
var originMemes = new google.maps.LatLng(LatMidpointMemes, LongMidpointMemes);

serviceMemes = new google.maps.places.PlacesService(map);

var request = {
	location: originMemes,
	radius: RadiusMemes,
	RankBy: 'google.maps.places.RankBy.DISTANCE',
}

serviceMemes.nearbySearch(request, callback)

	map.setCenter(results[0].geometry.location);
  }
});
}

function createMarker(place) {
var marker = new google.maps.Marker({
  map: map,
  position: place.geometry.location
});

google.maps.event.addListener(marker, 'click', function() {
  infowindow.setContent(place.name);
  infowindow.open(map, this);
});
}