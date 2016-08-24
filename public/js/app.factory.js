// Start TRUCK FACTORY //

angular.module('foodTruckApp')
    .factory('truckFactory', truckData)

    truckData.$inject = ['$http']

    console.log("Colorado Food Trucks Loaded");

    function truckData($http){
      $http.post('/users')
      function getUser(){
        return $http.get('/users')
      }
      function createUser(truckData){
        console.log("truckData", truckData)
        return $http.post('/users', truckData)
      }
      return{
        getUser : getUser,
        createUser : createUser,
        loggedinTruck : {}
      }
  };
