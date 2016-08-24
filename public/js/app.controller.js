// START FOOD TRUCK CONTROLLER

angular.module('foodTruckApp')
.controller('truckCtrl', truckCtrl);

truckCtrl.$inject = ['truckFactory']

function truckCtrl(truckFactory){
    var truck = this;
    truck.allMarkers = []
    truck.featuredTrucks = []
    truck.randomTruck = []
    truck.fTruck;
    truck.loc = []
    truck.gallery = []
    truck.search = []
    truck.icon = '/styles/imgs/co-mini-truck.png'
    truck.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
      center: new google.maps.LatLng(39.7392,-104.9903),
      mapTypeId: 'terrain',
    });
    truck.marker = new google.maps.Marker({
      icon: truck.icon,
      map: truck.map
    });
    console.log('Ctrl : ', truck)

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
      // truck.infoWindow.setPosition(pos);
      // truck.infoWindow.setContent("MY SPOT!");
      truck.marker.setPosition(pos);
      truck.map.setCenter(pos);
      console.log(pos);
      truck.loc.push(pos)
    }, function() {
      handleLocationError(true, marker, truck.map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, marker, truck.map.getCenter());
  }
  function handleLocationError(browserHasGeolocation, marker, pos) {
    truck.marker.setPosition(pos);
    truck.marker.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
    }
}

// Interate over truck factory

    truck.inputQuery = function(argument) {
        for(var i=0; i<truckFactory.trucks.length; i++){
          for (var ii=0; ii<truckFactory.trucks[i].type.length; ii++){
            if (truckFactory.trucks[i].type[ii] === argument) {
              var t = truckFactory.trucks[i]
              truck.marker = new google.maps.Marker({
                position: new google.maps.LatLng(t.location[0], t.location[1]),
                map: truck.map,
                icon: truck.icon,
              });
              // put markers in array
              truck.allMarkers.push(truck.marker);
            }
          }
        }
        console.log(truck.allMarkers);
        console.log(truck.truckSearch);
        console.log(t.location);
  };
    truck.clearMarkers = function(){
      for(i=0; i < truck.allMarkers.length; i++){
        truck.allMarkers[i].setMap(null);
      }
  }
        // $('[title]').tooltip()

    // truck.showPopover = function(event, loc){
    //     console.log("working", loc)
    //     truck.name = loc.name
    //     truck.description = loc.description
    //     truck.hours = loc.hours
    //     truck.map.showInfoWindow('myInfoWindow');
    // }

// push images from coTrucks array

    truck.sortTrucks = function() {
      console.log(truckFactory.trucks)
        for(var i=0; i<truckFactory.trucks.length; i++){
            if (truckFactory.trucks[i].image) {
              truck.featuredTrucks.push(truckFactory.trucks[i].image)
            }
          }
          console.log(truck.featuredTrucks);
      }
        truck.sortTrucks();

// return random images in gallery array

    truck.randomTrucks = function(){
        var fTruck = truck.featuredTrucks[Math.floor(Math.random() * truck.featuredTrucks.length)]
        console.log("random trucks", fTruck)
        return fTruck
      }
        console.log(truck.gallery)

// iterate over array gallery

     truck.newGallery = function(){
        for (i=0; i < 4; i++){
        truck.gallery.push(truck.randomTrucks())
        }
      }
      truck.newGallery()

// search over truck.types factory

    truck.typeSearch = function(str){
      console.log('search works')
      for(var i=0; i<truckFactory.trucks.length; i++){
        for (var ii=0; ii<truckFactory.trucks[i].type.length; ii++){
          if (truckFactory.trucks[i].type[ii] === str) {
            truck.search.push(truckFactory.trucks[i])
          }
        }
      }
      console.log(truck.search)
    }

    truck.typeSearch()

  }; // controller


// END CONTROLLER
