function map1() {
    var myLatlng = new google.maps.LatLng(-32.3, 149.6);
    var myOptions = {
        zoom: 8,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById("map"), myOptions);

    var markers = [];

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Hello World!"
    });

    var activeInfoWindow;

    var contentString = '<div id="content">' +
        'Тут всё то про <b>что должно</b> быть <a href="http://localhost:9000">рассказано</a></div>' +
        '<img width="100" src="http://localhost:9000/assets/portal/images/item-thumb.png">';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
        activeInfoWindow = infowindow;
    });

    google.maps.event.addListener(map, 'click', function (event) {
        console.log('Map clicked ');
        activeInfoWindow && activeInfoWindow.close();
        activeInfoWindow = null;
    });


    markers.push(marker);

    function createInfoWCB(infowindowTmp, markerTmp) {
        return function () {
        	if (activeInfoWindow === infowindowTmp){
        		infowindowTmp.close();
        		activeInfoWindow = null;
        	}
        	else {
        		infowindowTmp.open(map, markerTmp);	
        		activeInfoWindow && activeInfoWindow.close()
        		activeInfoWindow = infowindowTmp;
        	}            						       
        }
    }

    for (var i = 0; i < 2000; i++) {
        var markerTmp = new google.maps.Marker({
            title: 'Marker No. ' + i,
            index: i,
            position: new google.maps.LatLng(-32.0 + Math.random() * 10, 149.0 + Math.random() * 10)
        });

        var infowindowTmp = new google.maps.InfoWindow({
            content: contentString
        });

        google.maps.event.addListener(markerTmp, 'click', createInfoWCB(infowindowTmp, markerTmp));

        markers.push(markerTmp);

    }

    markerClusterer = new MarkerClusterer(map, markers,
        {
            maxZoom: 13,
            gridSize: 50,
            styles: [{
            	url: 'http://localhost:9000/assets/portal/images/map_circle.png',
            	height: 64,
            	width: 64,
            	textSize:16
            }]              
        });

}


$(document).ready(function () {
    map1();
});
    

    