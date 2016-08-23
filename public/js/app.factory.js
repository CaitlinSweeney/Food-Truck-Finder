// Start TRUCK FACTORY //

angular.module('foodTruckApp')
    .factory('truckFactory', truckData)

    truckData.$inject = ['$http']

    console.log("Colorado Food Trucks Loaded");

    function truckData($http){

      $http.post('/trucks')

      function getUser(){
        return $http.get('/trucks')
      }
      function createUser(truckData){
        return $http.post('/trucks', truckData)
      }
      return{
        getUser : getUser,
        createUser : createUser,
        loggedinTruck : {}
      }
  };
