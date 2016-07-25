// TRUCK CONTROLLER //

angular.module('myApp', []);

angular.module('myApp', ['ngMap'])
.controller('truckCtrl', truckCtrl);

function truckCtrl(NgMap, truckFactory){
    NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });
  }

  truckCtrl.$inject = ['NgMap','truckFactory']

  function inputTrucks(truckFactory) {
    console.info('truckCtrl:truckFactory', truckFactory);
    var truck = this;
  }


// TRUCK FACTORY //

angular.module('myApp')
    .factory('truckFactory', [
    		truckData
    	])
      console.log("Colorado Food Trucks Loaded");

    function truckData(){

      var coTrucks = [{
        name : 'Street Frites LLC',
        description : '',
        type : ['sandwiches', 'gluten-free', 'steak', 'french fries', 'burgers', 'tacos'],
        location : '2615 W Argyle Pl, Denver, CO 80211',
        number : '(720) 934-4694',
        hours : 'Monday-Friday: 10:00 AM - 10:00 PM',
        website : 'https://www.facebook.com/StreetFrites/'
      },
      {
        name : 'McDevitt Taco Supply',
        description : "Super heady and delicious tacos made to order! We use local and organic ingredients whenever possible to bring you food that tastes great and is environmentally responsible.",
        type : ['tacos', 'mexican', 'quesadillas', 'seafood'],
        location : '1300 Pearl Street, Boulder, CO 80302',
        number : '(720) 934-4694',
        hours : 'Monday-Saturday: 11:00 AM - 03:00 PM',
        website : 'http://www.mcdevitttacosupply.com/'
      },
      {
        name : "Biker Jim's Gourmet Dogs",
        description :"Biker Jim’s craveable concept pimps 15 gourmet sausages, ranging from wild boar and Alaskan reindeer to pheasant cordon bleu and an award-winning vegan dog.",
        type : ['hot dogs', 'sausage', 'vegan'],
        location : ['16th and Arapahoe St', 'Denver', 'CO', '80202'],
        number : '(303) 550-8231',
        hours : 'Monday-Friday 10:30 AM - 03:30 PM',
        website : 'http://www.bikerjimsdogs.com/'
      },
      {
        name : "Waffle Up!",
        description : "These aren't your Grandma's Waffles! Serving up authentic Belgian Liege waffles!",
        type : ['breakfast', 'waffles', 'gluten-free'],
        location : '300 Elati St, Denver CO 80223',
        number : '(303) 744-0174',
        hours : 'Tuesday - Friday 7AM- 2PM, Saturday- Sunday 8AM- 2PM',
        website : 'http://www.waffleup.com/'
      },
      {
        name : "Thai Cart",
        description : "Traditional Spicy Pad-Thai Food, Fried Appetizers, Drunken Noodles, Crab Wontons",
        type : ['Asian', 'Thai', 'gluten-free', 'noodles', 'wraps'],
        location : '16th Street Mall, Denver CO 80223',
        number : '#',
        hours : 'Unknown',
        website : 'twitter: @thaicart80202'
      },]

      var activeTrucks = "Colorado Food Trucks"
      return {
        trucks : coTrucks
      }
  };





















  // angular.module('myApp')
  // 	.factory('foursquareFactory', [
  // 		'$http',
  // 		foursquareData
  // 	])
  //
  // function foursquareData ($http) {
  //
  // 	return {
  // 		getFSdata : function(){
  // 			return $http.get()
  // 		},
  // 		getFSindex : function(){
  // 			return $http.get('https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=3YUN053JNTTGMQVMGLH3JKY4BIICP54ZKD2VB2EKT4SI4WJH&client_secret=IRGCPMLW2DGG0TY5APBADYR3JOG2MSAXVKX0LPKX1VC3KNRO&v=YYYYMMDD')
  // 		}
  // 	}
  // }
