// Start TRUCK FACTORY //

angular.module('foodTruckApp')
    .factory('truckFactory', truckData)
    truckData.$inject = ['$http']

    console.log("Colorado Food Trucks Loaded");

    function truckData($http){

      $http.post('/updateUser')

      function getUser(){
        return $http.get('/api/trucks')
      }
      function createUser(){
        return $http.post('/api/trucks', truckData)
      }
      return{
        getUser : getUser,
        createUser : createUser,
      }

      var factTruck = {
        loggedinTruck : {}
      }
      return factTruck
  };
