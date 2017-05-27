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

    var marker = new google.maps.Marker
        ({
            position: null,
            map: map,
            title: "click!"
        });

    map.addListener('click', function (e)
    {
        placeMarkerAndPanTo(e.latLng, map);
    });

    function placeMarkerAndPanTo(latLng, map)
    {
        marker.position = latLng

        document.getElementById('lat').innerHTML = "Latitude: " + marker.getPosition().lat();
        document.getElementById('lng').innerHTML = "Longitude: " + marker.getPosition().lng();

        marker.setMap(latLng);
        map.panTo(latLng);
    }
}