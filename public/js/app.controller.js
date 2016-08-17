// Start FOOD TRUCK CONTROLLER

angular.module('foodTruckApp')
.controller('truckCtrl', truckCtrl);

truckCtrl.$inject = ['truckFactory']

function truckCtrl(truckFactory){
    var truck = this;
    truck.allTrucks = []
    truck.featuredTrucks = []
    truck.randomTruck = []
    truck.fTruck;
    truck.gallery = []
    truck.search = []
    // map variables
    // truck.myLatLng;
    truck.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
      center: new google.maps.LatLng(39.7392,-104.9903),
      mapTypeId: 'terrain',
    });
    truck.icon = 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
    // truck.marker = new google.maps.Marker({
    //   position: new google.maps.LatLng(39.7392,-104.9903),
    //   map: truck.map,
    //   icon: truck.icon
    // });
    // truck.infoWindow = new google.maps.InfoWindow({
    //   map: truck.map,
    //   position: truck.marker.position,
    // });

// google maps gelocation
  console.log(truck.infoWindow);

// Interate over truck factory

    truck.inputQuery = function(argument) {
        for(var i=0; i<truckFactory.trucks.length; i++){
          for (var ii=0; ii<truckFactory.trucks[i].type.length; ii++){
            if (truckFactory.trucks[i].type[ii] === argument) {
              var t = truckFactory.trucks[i]
              truck.allTrucks.push(truck.t)
              truck.marker = new google.maps.Marker({
                position: new google.maps.LatLng(t.location[0], t.location[1]),
                map: truck.map,
                icon: truck.icon
              });
              truck.clearQuery = function(event){
                truck.marker.location[null];
              }
              // truck.infoWindow = new google.maps.InfoWindow({
              //   map: truck.map,
              //   position: truck.marker.position,
              // });
            }
          }
        }
        console.log(truck.allTrucks);
        console.log(truck.truckSearch);
        console.log(t.location)
  };
// remove markers


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

  truckCtrl.$inject = ['truckFactory']

// END CONTROLLER
