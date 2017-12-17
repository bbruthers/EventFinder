function initMap() {
    var marker;
    var infoWindow = new google.maps.InfoWindow;

    var map = new google.maps.Map(document.getElementById('map'),
        {
            center: { lat: 0.0, lng: 0.0 },
            zoom: 15
        });


    //attempt to get browser's geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, navError);

    }

    map.addListener('click', function (e) {
        if (marker != null) {
            marker.setPosition(e.latLng);
            map.panTo(marker.position);
        }
        else {
            marker = new google.maps.Marker
                ({
                    position: e.latLng,
                    map: map
                });

            map.panTo(marker.position);
        }

        var strl = document.getElementById('hfLatitude').innerHTML = marker.getPosition().lat();
        var strln = document.getElementById('hfLongitude').innerHTML = marker.getPosition().lng();
        CreateHistTable(strl, strln);
    });

    

    //**navigator geolocal callbacks **
    function success(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        map.setCenter(new google.maps.LatLng(latitude, longitude));

        document.getElementById('navLat').innerHTML = "Location Latitude: " + latitude;
        document.getElementById('navLng').innerHTML = "Location Longitude: " + longitude;

        infoWindow.setPosition(new google.maps.LatLng(latitude, longitude));
        infoWindow.setContent('Estimated location (using browser geolocation)');
        
        infoWindow.open(map);
    }

    function navError(error) {
        var message = "";

        // Check for known errors
        switch (error.code) {
            case error.PERMISSION_DENIED:
                message = "This website does not have your permission to use the Geolocation API";
                break;
            case error.POSITION_UNAVAILABLE:
                message = "Your current position could not be determined.";
                break;
            case error.PERMISSION_DENIED_TIMEOUT:
                message = "Your current position could not be determined within the specified timeout period.";
                break;
        }

        infoWindow.setContent(message);
    }

}