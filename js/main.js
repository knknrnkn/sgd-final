function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    latlon = new google.maps.LatLng(lat, lon)

    var options = {
        center: latlon,
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL }
    }


    var map = new google.maps.Map(document.getElementById("map"), options);
    var marker = new google.maps.Marker({ position: latlon, map: map, title: "Sie sind hier!" });


    //  Hamburg und Stutgart
    // gruen marker
    var pinImage = new google.maps.MarkerImage("http://www.googlemapsmarkers.com/v1/009900/");
    var hamburg = new google.maps.Marker({
        position: { lat: 53.551086, lng: 9.993682 },
        map: map,
        icon: pinImage
    });
    var stutgart = new google.maps.Marker({
        position: { lat: 48.78232, lng: 9.17702 },
        map: map,
        icon: pinImage

    });
}

// function showError(error) {
//     switch (error.code) {
//         case error.PERMISSION_DENIED:
//             x.innerHTML = "User denied the request for Geolocation."
//             break;
//         case error.POSITION_UNAVAILABLE:
//             x.innerHTML = "Location information is unavailable."
//             break;
//         case error.TIMEOUT:
//             x.innerHTML = "The request to get user location timed out."
//             break;
//         case error.UNKNOWN_ERROR:
//             x.innerHTML = "An unknown error occurred."
//             break;
//     }
// }