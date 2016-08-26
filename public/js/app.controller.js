// START FOOD TRUCK CONTROLLER

angular.module('foodTruckApp')
.controller('truckCtrl', truckCtrl);

truckCtrl.$inject = ['truckFactory']

function truckCtrl(truckFactory, $http){
    var truck = this;
    truck.allMarkers= []
    truck.currentTrucks = {}
    truck.loc = []
    truck.search = []
    truck.icon = '/styles/imgs/co-mini-truck.png'
    truck.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
      center: new google.maps.LatLng(39.7392,-104.9903),
      mapTypeId: 'terrain',
    });
    // truck.marker = new google.maps.Marker({
    //   icon: truck.icon,
    //   map: truck.map
    // });
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

// LOAD GEOLOCATION of Active Trucks
 window.onload = function(){
     truckFactory.getUser().then(function(res){
       truck.truckList = res.data;
       for (let i=0; i<truck.truckList.length; i++){
         var ft = {
           lat: truck.truckList[i].location[0],
           lng: truck.truckList[i].location[1]
         }
         truck.allMarkers.push(ft)
       }
       for (let i=0; i<truck.allMarkers.length; i++){
          truck.marker = new google.maps.Marker({
           position : truck.allMarkers[i],
           map : truck.map,
           icon : truck.icon,
         });
       }; // put markers on map
       truck.clearMarkers = function(){
        for(i=0; i < truck.allMarkers.length; i++){
          truck.allMarkers.setMap(null);
        }
       } // clear markers
     })
 } // end GEOLOCATION


}; // END CONTROLLER

// get logged in users





//         // $('[title]').tooltip()

//     // truck.showPopover = function(event, loc){
//     //     console.log("working", loc)
//     //     truck.name = loc.name
//     //     truck.description = loc.description
//     //     truck.hours = loc.hours
//     //     truck.map.showInfoWindow('myInfoWindow');
//     // }
//
// // push images from coTrucks array
//
//     truck.sortTrucks = function() {
//       console.log(truckFactory.trucks)
//         for(var i=0; i<truckFactory.trucks.length; i++){
//             if (truckFactory.trucks[i].image) {
//               truck.featuredTrucks.push(truckFactory.trucks[i].image)
//             }
//           }
//           console.log(truck.featuredTrucks);
//       }
//         truck.sortTrucks();
//
// // return random images in gallery array
//
//     truck.randomTrucks = function(){
//         var fTruck = truck.featuredTrucks[Math.floor(Math.random() * truck.featuredTrucks.length)]
//         console.log("random trucks", fTruck)
//         return fTruck
//       }
//         console.log(truck.gallery)
//
// // iterate over array gallery
//
//      truck.newGallery = function(){
//         for (i=0; i < 4; i++){
//         truck.gallery.push(truck.randomTrucks())
//         }
//       }
//       truck.newGallery()
//
// // search over truck.types factory
//
//     truck.typeSearch = function(str){
//       console.log('search works')
//       for(var i=0; i<truckFactory.trucks.length; i++){
//         for (var ii=0; ii<truckFactory.trucks[i].type.length; ii++){
//           if (truckFactory.trucks[i].type[ii] === str) {
//             truck.search.push(truckFactory.trucks[i])
//           }
//         }
//       }
//       console.log(truck.search)
//     }
//
//     truck.typeSearch()
