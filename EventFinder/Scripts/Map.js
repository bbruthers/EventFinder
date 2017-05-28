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

    //https://stackoverflow.com/questions/3684274/googlemaps-v3-api-create-only-1-marker-on-click

    var marker;

    function placeMarkerAndPanTo(latLng, map)
    {
        if (marker)
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

            map.panTo(marker.position);
        }

        document.getElementById('lat').innerHTML = "Latitude: " + marker.getPosition().lat();
        document.getElementById('lng').innerHTML = "Longitude: " + marker.getPosition().lng();
    }
}