var map, infoWindow, marker;
var currLocation = { lat: 0.0, lng: 0.0 };


function initMap()
{
    map = new google.maps.Map(document.getElementById('map'),
        {
            center: { lat: 0.0, lng: 0.0 },
            zoom: 15
        });

    map.addListener('click', function (e)
    {
        placeMakerandPan(e.latLng, map);
    });

    infoWindow = new google.maps.InfoWindow;

    function applyGeoLocation(position)
    {
        currLocation.lat = position.coords.latitude;
        currLocation.lng = position.coords.longitude;

        document.getElementById('navLat').innerHTML = "navLat: " + currLocation.lat;
        document.getElementById('navLng').innerHTML = "navLng: " + currLocation.lng;

        infoWindow.setPosition(currLocation);
        infoWindow.setContent('Estimated location');
        infoWindow.open(map);

        map.setCenter(currLocation);
    }

    // Try HTML5 geolocation.
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(applyGeoLocation);
    }
    else
    {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos)
    {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    }

    function placeMakerandPan(latLng, map)
    {
        if (marker != null)
        {
            marker.setPosition(latLng);
            map.panTo(marker.position);
        }
        else
        {

            marker = new google.maps.Marker
                ({
                    position: latLng,
                    map: map
                });

            //marker.addListener('rightclick', AlertRightClick());

            map.panTo(marker.position);
        }

        document.getElementById('hfLatitude').innerHTML = marker.getPosition().lat();
        document.getElementById('hfLongitude').innerHTML = marker.getPosition().lng();
    }

}

