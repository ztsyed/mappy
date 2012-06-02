var mecca =new google.maps.LatLng(21.4167, 39.8167);
var marker;
var triangleCoords = [
  new google.maps.LatLng(25.774252, -80.190262),
  new google.maps.LatLng(18.466465, -66.118292),
  new google.maps.LatLng(32.321384, -64.75737),
  new google.maps.LatLng(25.774252, -80.190262)
];
var bermudaTriangle;
var infowindow;
var map;
function initialize() {

  var myOptions = {
    center: mecca,
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map_canvas"),
      myOptions);
  marker= new google.maps.Marker({
		position: mecca,
		title: "Center of the world",
		animation: google.maps.Animation.DROP
		
	});
	marker.setMap(map);
	google.maps.event.addListener(marker, 'click', toggleBounce);
  	// Construct the polygon
	// Note that we don't specify an array or arrays, but instead just
	// a simple array of LatLngs in the paths property
	bermudaTriangle = new google.maps.Polygon({
	  paths: triangleCoords,
	  strokeColor: "#FF0000",
	  strokeOpacity: 0.8,
	  strokeWeight: 2,
	  fillColor: "#FF0000",
	  fillOpacity: 0.35
	});

	bermudaTriangle.setMap(map);
	google.maps.event.addListener(bermudaTriangle, 'click', toggleTriangle);
	
	var contentString = '<div id="content">'+
	    '<div id="siteNotice">'+
	    '</div>'+
	    '<h2 id="firstHeading" class="firstHeading">Uluru</h2>'+
	    '<div id="bodyContent">'+
	    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
	    'sandstone rock formation in the southern part of the '+
	    'Northern Territory, central Australia. It lies 335 km (208 mi) '+
	    'south west of the nearest large town, Alice Springs; 450 km '+
	    '(280 mi) by road. Kata Tjuta and Uluru are the two major '+
	    'features of the Uluru - Kata Tjuta National Park. Uluru is '+
	    'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
	    'Aboriginal people of the area. It has many springs, waterholes, '+
	    'rock caves and ancient paintings. Uluru is listed as a World '+
	    'Heritage Site.</p>'+
	    '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
	    'http://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p>'+
	    '</div>'+
	    '</div>';
	
	infowindow = new google.maps.InfoWindow({
	    content: contentString
	});
	
}
function toggleBounce()
{
 if (marker.getAnimation() !==null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
	infowindow.open(map,marker);
	
  }
}
function toggleTriangle()
{
	bermudaTriangle.setOptions({'fillColor':'#00FF00'});
	map.setCenter(new google.maps.LatLng(26.155438,-75.102539));
	map.setZoom(6);
}