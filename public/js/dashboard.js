angular.module('foodTruckApp')
    .controller('DashboardController', Dashboard);

Dashboard.$inject = ['truckFactory']

function Dashboard(truckFactory) {
    var myTruck = this;
    myTruck.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
      center: new google.maps.LatLng(39.7392,-104.9903),
      mapTypeId: 'terrain',
    });
    myTruck.icon = '/styles/imgs/co-mini-truck.png'
    myTruck.infoWindow = new google.maps.InfoWindow({map: myTruck.map});
    myTruck.marker = new google.maps.Marker({
      icon: myTruck.icon,
      map: myTruck.map
    });
    console.log('Ctrl : ', myTruck)
    console.info('Dashboard.initialized')

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
              myTruck.marker.setPosition(pos);
              myTruck.infoWindow.setPosition(pos);
              myTruck.infoWindow.setContent("I'm Here!");
              myTruck.map.setCenter(pos);
              console.log(pos);
              myTruck.location = [pos.lat, pos.lng]
              console.log(myTruck.location);
              truckFactory.createUser({location: myTruck.location});

            }, function() {
              handleLocationError(true, marker, myTruck.map.getCenter());
            });
          } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, marker, myTruck.map.getCenter());
          }
          function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            myTruck.infoWindow.setPosition(pos);
            myTruck.infoWindow.setContent(browserHasGeolocation ?
              'Error: The Geolocation service failed.' :
              'Error: Your browser doesn\'t support geolocation.');
            }
        } // end geolocation

          // ADD FOOD TYPES TO DATABASE
          myTruck.type = {
            pizza: true,
            mexican: true,
            vegetarian: true,
            glutenFree: true,
            pizza: true,
            bbq: true,
            sandwiches: true,
            medittereanan: true,
            carribean: true,
            european: true,
            seafood: true,
            asian: true,
            latinAmerican: true,
            brewery: true,
            healthy: true,
            breakfast: true,
            lunch: true,
            dinner: true,
          }
        myTruck.addType = function(types){
          console.log(types)
          truckFactory.createUser({types: myTruck.user.types }).then(function(res) {
            console.log('hi: ', res)
          })
        }

 console.log("hey", myTruck)

} // end dashboard controller

// navigator.geolocation.getCurrentPosition(successCallback, errorCallback,  {timeout: 10000});
