angular.module('foodTruckApp')
    .controller('DashboardController', Dashboard);

Dashboard.$inject = ['truckFactory']

function Dashboard(truckFactory) {
    var myTruck = this;
    myTruck.allMarkers = []
    myTruck.featuredTrucks = []
    myTruck.randomTruck = []
    myTruck.fTruck;
    myTruck.loc = []
    myTruck.search = []
    myTruck.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
      center: new google.maps.LatLng(39.7392,-104.9903),
      mapTypeId: 'terrain',
    });
    myTruck.icon = 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
    myTruck.infoWindow = new google.maps.InfoWindow({map: myTruck.map});
    console.log('Ctrl : ', myTruck)
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

          // LOAD GEOLOCATION
         window.onload = function(){
             if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
              myTruck.infoWindow.setPosition(pos);
              myTruck.infoWindow.setContent(pos[0], pos[1]);
              myTruck.map.setCenter(pos);
              console.log(pos);
              myTruck.loc.push(pos)
            }, function() {
              handleLocationError(true, infoWindow, myTruck.map.getCenter());
            });
          } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, myTruck.map.getCenter());
          }
          function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            myTruck.infoWindow.setPosition(pos);
            myTruck.infoWindow.setContent(browserHasGeolocation ?
              'Error: The Geolocation service failed.' :
              'Error: Your browser doesn\'t support geolocation.');
            }
        }
} // end dashboard controller

// navigator.geolocation.getCurrentPosition(successCallback, errorCallback,  {timeout: 10000});
