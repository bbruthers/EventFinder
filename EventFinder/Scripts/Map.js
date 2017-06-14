var map, marker;
var currLocation = {lat: 0.0, lng: 0.0};

//get current user location
function getLocation()
{
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(applyCurrLocation);
    }
    else
    {
        document.getElementById('navLat').innerHTML = "Cannot get location";
    }
}

function applyCurrLocation(position)
{
    currLocation.lat = position.coords.latitude;
    currLocation.lng = position.coords.longitude;

    document.getElementById('navLat').innerHTML = "navLat: " + currLocation.lat;
    document.getElementById('navLng').innerHTML = "navLng: " + currLocation.lng;
}

function initMap()
{
    var uluru =
        {
            lat: 39.8429,
            lng: 75.0336
        };

    var map = new google.maps.Map(document.getElementById('map'),
        {
            zoom: 10,
            center: uluru
        });

    map.addListener('click', function (e)
    {
        placeMarkerAndPanTo(e.latLng, map);
    });

    function AlertRightClick()
    {
        confirm("Test");
    }

    /*map.addListener(marker, 'rightclick', function (e)
    {
        confirm("Marker clicked");
    }); */

    //https://stackoverflow.com/questions/3684274/googlemaps-v3-api-create-only-1-marker-on-click

    function placeMarkerAndPanTo(latLng, map)
    {
        if (marker != null)
        {
            marker.setPosition(latLng);
        }
        else
        {
            marker = new google.maps.Marker
            ({
                position: latLng,
                map: map
            });

            marker.addListener('rightclick', AlertRightClick());

            map.panTo(marker.position);
        }

        document.getElementById('lat').innerHTML = "Latitude: " + marker.getPosition().lat();
        document.getElementById('lng').innerHTML = "Longitude: " + marker.getPosition().lng();
    }
}