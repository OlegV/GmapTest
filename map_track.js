function initialize() {
	var locTeronpil = new google.maps.LatLng(49.543838, 25.603546);
	var locLviv = new google.maps.LatLng(49.828682, 24.031460);
	var locIF = new google.maps.LatLng(48.903942, 24.673060);
	var locKH = new google.maps.LatLng(49.414105, 26.955775);

    var myLatlng = new google.maps.LatLng(49.543838, 25.603546);
    var myOptions = {
        zoom: 8,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var directionsService = new google.maps.DirectionsService;

  	var directionsDisplay = new google.maps.DirectionsRenderer({
  		polylineOptions: {
   		   strokeColor: "red"
  		}
    });
    var directionsDisplay2 = new google.maps.DirectionsRenderer({
  		polylineOptions: {
   		   strokeColor: "green"
  		}
    });

    var map = new google.maps.Map(document.getElementById("map2"), myOptions);
    directionsDisplay.setMap(map);
    directionsDisplay2.setMap(map);

    var markerTernopil = new google.maps.Marker({
        position: locTeronpil,
        map: map,
        title: "Ternopil"
    });

    var markerLviv = new google.maps.Marker({
        position: locLviv,
        map: map,
        title: "Lviv"
    });

    var markerIF = new google.maps.Marker({
        position: locIF,
        map: map,
        title: "Lviv"
    });
    
  	var waypts = [];  
  	var waypts2 = [];	
  	waypts.push({
        location: locLviv,
        stopover: true
      });
  	waypts.push({
  		//Pidkamin
        location: new google.maps.LatLng(49.943624, 25.318905),
        stopover: true
      });
  	waypts.push({
  		//Kremenec
        location: new google.maps.LatLng(50.090930, 25.739624),
        stopover: true
      });
  	// waypts.push({
  	// 	//Khmel
   //      location: locKH,
   //      stopover: true
   //    });
 
  	waypts2.push({
  		//Khortkiv
        location: new google.maps.LatLng(49.025314, 25.761883),
        stopover: true
      });  	
	
	waypts2.push({
  		//K-P
        location: new google.maps.LatLng(48.669005, 26.581206),
        stopover: true
      }); 
  	
  	waypts2.push({
  		//Chernivtsi
        location: new google.maps.LatLng(48.271237, 25.957776),
        stopover: true
      });  
  	waypts2.push({
        location: locIF,
        stopover: true
      });

  	var request = {
      origin: locTeronpil,
      destination: locKH,
      waypoints: waypts,
      optimizeWaypoints: false,
      travelMode: google.maps.TravelMode.DRIVING
  	};
	  
	  directionsService.route(request, function(response, status) {
	    if (status == google.maps.DirectionsStatus.OK) {
	      directionsDisplay.setDirections(response);
	    }
	  });

	  	var request2 = {
      origin: locKH,
      destination: locTeronpil,
      waypoints: waypts2,
      optimizeWaypoints: false,
      travelMode: google.maps.TravelMode.DRIVING
  	};
	  
	  directionsService.route(request2, function(response, status) {
	  	console.log(response);
	    if (status == google.maps.DirectionsStatus.OK) {
	      directionsDisplay2.setDirections(response);
	    }
	  });

}


$(document).ready(function () {
    initialize();
});
    

    