var mecca =new google.maps.LatLng(21.4167, 39.8167);
function initialize() {

  var myOptions = {
    center: mecca,
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"),
      myOptions);
	var marker= new google.maps.Marker({
		position: mecca,
		title: "Center of the world"
	});
	marker.setMap(map);
}