var mecca =new google.maps.LatLng(21.4167, 39.8167);
var marker;

function initialize() {

  var myOptions = {
    center: mecca,
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"),
      myOptions);
  marker= new google.maps.Marker({
		position: mecca,
		title: "Center of the world",
		animation: google.maps.Animation.DROP
		
	});
	marker.setMap(map);
	google.maps.event.addListener(marker, 'click', toggleBounce);
  
}
function toggleBounce()
{
 if (marker.getAnimation() !==null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}