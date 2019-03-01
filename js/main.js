// // function initMap() {
// //     var location = { lat: 51.165691, lng: 10.451526 }
// //     var map = new google.maps.Map(document.getElementById("map"), {
// //         zoom: 5,
// //         center: location
// //     });
// // }
// // AIzaSyABkpt7Ppm6HTktYUm26WZ6W7SAmXxyU48





// function geoFindMe() {
//     var output = document.getElementById("map");

//     if (!navigator.geolocation) {
//         output.innerHTML = "<p>Geolokation wird von ihrem Browser nicht unterstützt</p>";
//         return;
//     }

//     function success(position) {
//         var latitude = position.coords.latitude;
//         var longitude = position.coords.longitude;

//         function initMap() {
//             var options = {
//                 zoom: 5,
//                 center: { lat: 51.165691, lng: 10.451526 }
//             }

//             var map = new google.maps.Map(document.getElementById('map'), options);


//             var pinImage = new google.maps.MarkerImage("http://www.googlemapsmarkers.com/v1/009900/");


//             var hamburg = new google.maps.Marker({
//                 position: { lat: 53.551086, lng: 9.993682 },
//                 map: map,
//                 icon: pinImage
//             });
//             var stutgart = new google.maps.Marker({
//                 position: { lat: 48.78232, lng: 9.17702 },
//                 map: map,
//                 icon: pinImage

//             });
//             var meinOrt = new google.maps.Marker({
//                 position: { lat: { latitude }, lng: { longitude } },
//                 map: map,
//                 icon: pinImage

//             });

//         }
//         // output.innerHTML = '<p>Die Latitude ist ' + latitude + '° <br>Die Longitude ist ' + longitude + '°</p>';

//         // var img = new Image();
//         // img.src = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

//         // output.appendChild(img);
//     };

//     function error() {
//         output.innerHTML = "Es war nicht möglich Sie zu lokalisieren";
//     };

//     output.innerHTML = "<p>Lokalisieren…</p>";

//     navigator.geolocation.getCurrentPosition(success, error);
// }
// // $('#location-button').click(function() {

// //     if (navigator.geolocation) {
// //         navigator.geolocation.getCurrentPosition(function(position) {
// //             console.log(position);
// //             $.get("http://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&sensor=false", function(data) {
// //                 console.log(data);
// //             })
// //             var img = new Image();
// //             img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=13&size=800x400&sensor=false";
// //             $('#output').html(img);
// //         });

// //     }
// // });






// function initMap() {
//     var options = {
//         zoom: 5,
//         center: { lat: 51.165691, lng: 10.451526 }
//     }

//     var map = new google.maps.Map(document.getElementById('map'), options);


//     var pinImage = new google.maps.MarkerImage("http://www.googlemapsmarkers.com/v1/009900/");


//     var hamburg = new google.maps.Marker({
//         position: { lat: 53.551086, lng: 9.993682 },
//         map: map,
//         icon: pinImage
//     });
//     var stutgart = new google.maps.Marker({
//         position: { lat: 48.78232, lng: 9.17702 },
//         map: map,
//         icon: pinImage

//     });

//     // function geoFindMe(position) {
//     //     lat = position.coords.latitude;
//     //     lon = position.coords.longitude;
//     //     latlon = new google.maps.LatLng(lat, lon)
//     //     map = document.getElementById('map')
//     //         // mapholder.style.height = '250px';
//     //         // mapholder.style.width = '500px';
//     //         // I added a border and margin to the map
//     //         // mapholder.style.border = '2px solid orange';
//     //         // mapholder.style.margin = '10px';

//     //     var ort = new google.maps.Marker({
//     //         position: latlon,
//     //         map: map,
//     //         icon: pinImage

//     //         //     var map = new google.maps.Map(document.getElementById("map"), ort);
//     //         // var marker = new google.maps.Marker({ position: latlon, map: map, title: "You are here!" });
//     //     })

// }


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
        // ort = document.getElementById('map')
        // mapholder.style.height = '250px';
        // mapholder.style.width = '500px';
        // // I added a border and margin to the map
        // mapholder.style.border = '2px solid orange';
        // mapholder.style.margin = '10px';

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