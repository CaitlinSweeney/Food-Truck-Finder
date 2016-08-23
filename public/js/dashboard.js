angular.module('foodTruckApp')
    .controller('DashboardController', Dashboard);

Dashboard.$inject = ['truckFactory']

function Dashboard(truckFactory) {
    var myTruck = this;
    myTruck.allMarkers = []
    myTruck.featuredTrucks = []
    myTruck.randomTruck = []
    myTruck.fTruck;
    myTruck.gallery = []
    myTruck.search = []
    myTruck.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
      center: new google.maps.LatLng(39.7392,-104.9903),
      mapTypeId: 'terrain',
    });
    myTruck.icon = 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
    myTruck.infoWindow = new google.maps.InfoWindow({map: myTruck.map});

    console.info('Dashboard.initialized')
    console.log(truckFactory)

    // GEOLOCATION

    function checkGeo(){
        if (navigator.geolocation) {
          console.log('Geolocation is supported!');
        }
        else {
          console.log('Geolocation is not supported for this Browser/OS version yet.');
        }
      }
      checkGeo();

          // Try HTML5 geolocation.
         window.onload = function(){
             if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };

              myTruck.infoWindow.setPosition(pos);
              myTruck.infoWindow.setContent(pos);
              myTruck.map.setCenter(pos);
            }, function() {
              handleLocationError(true, infoWindow, myTruck.map.getCenter());
            });
          } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, myTruck.map.getCenter());
          }
          function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation ?
              'Error: The Geolocation service failed.' :
              'Error: Your browser doesn\'t support geolocation.');
            }
        }


} // end dashboard controller

// navigator.geolocation.getCurrentPosition(successCallback, errorCallback,  {timeout: 10000});
