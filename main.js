// TRUCK CONTROLLER //

angular.module('myApp', []);

angular.module('myApp', ['ngMap'])
.controller('truckCtrl', truckCtrl);

function truckCtrl(NgMap, truckFactory){
    var truck = this;
    truck.allTrucks = []
    // truck.marker = {url : 'file:///Users/caitlinsweeney/Desktop/co-food-truck-finder/imgs/co-ftruck-marker.png'}
    truck.lat = []
    truck.log = []

    NgMap.getMap()

    truck.inputQuery = function(argument) {
        for(var i=0; i<truckFactory.trucks.length; i++){
          for (var ii=0; ii<truckFactory.trucks[i].type.length; ii++){
            if (truckFactory.trucks[i].type[ii] === argument) {
              truck.allTrucks.push(truckFactory.trucks[i])
            }
          }
        }
        console.log(truck.allTrucks);
        console.log(truck.truckSearch);

          // $('[data-toggle="tooltip"]').tooltip()
            $('[title]').tooltip()
      };



      truck.showPopover = function(){
        console.log("working", arguments)
        $(function () {
          $('[data-toggle="popover"]').popover('show')
        })
    }

  }; // END CONTROLLER

      // truck.showDetail = function(event) {
      //   truck.showInfoWindow('', truckData);
      // }
      // truck.hideDetail = function(event) {
      //   truck.hideInfoWindow('', truckData);
      // }


  truckCtrl.$inject = ['NgMap','truckFactory']

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
        location :  [39.761557, -105.019516], // '2615 W Argyle Pl, Denver, CO 80211',
        number : '(720) 934-4694',
        hours : 'Monday-Friday: 10:00 AM - 10:00 PM',
        website : 'https://www.facebook.com/StreetFrites/'
      },
      {
        name : 'McDevitt Taco Supply',
        description : "Super heady and delicious tacos made to order! We use local and organic ingredients whenever possible to bring you food that tastes great and is environmentally responsible.",
        type : ['tacos', 'mexican', 'quesadillas', 'seafood'],
        location :  [40.017999, -105.27846], // '1300 Pearl Street, Boulder, CO 80302',
        number : '(720) 934-4694',
        hours : 'Monday-Saturday: 11:00 AM - 03:00 PM',
        website : 'http://www.mcdevitttacosupply.com/'
      },
      {
        name : "Biker Jim's Gourmet Dogs",
        description :"Biker Jim’s craveable concept pimps 15 gourmet sausages, ranging from wild boar and Alaskan reindeer to pheasant cordon bleu and an award-winning vegan dog.",
        type : ['hot dogs', 'sausage', 'sandwiches','vegan'],
        location : [39.747861, -104.99565], //['16th and Arapahoe St', 'Denver', 'CO', '80202']
        number : '(303) 550-8231',
        hours : 'Monday-Friday 10:30 AM - 03:30 PM',
        website : 'http://www.bikerjimsdogs.com/'
      },
      {
        name : "Waffle Up!",
        description : "These aren't your Grandma's Waffles! Serving up authentic Belgian Liege waffles!",
        type : ['breakfast', 'waffles', 'gluten-free'],
        location : [39.721284, -104.99391],// '300 Elati St, Denver CO 80223',
        number : '(303) 744-0174',
        hours : 'Tuesday - Friday 7AM- 2PM, Saturday- Sunday 8AM- 2PM',
        website : 'http://www.waffleup.com/'
      },
      {
        name : "Thai Cart",
        description : "Traditional Spicy Pad-Thai Food, Fried Appetizers, Drunken Noodles, Crab Wontons",
        type : ['Asian', 'Thai', 'gluten-free', 'noodles', 'wraps'],
        location : [39.758953, -105.010122], // '16th Street Mall, Denver CO 80223',
        number : '#',
        hours : 'Unknown',
        website : 'twitter: @thaicart80202'
      },
      {
        name : "Corner of Gourmet",
        description : "Their famous gyros, reuben egg rolls, pulled pork tacos, black bean burgers, and more, are made with the highest quality ingredients, a bit of love, and are all local legend.",
        type : ['health food', 'tacos', 'sandwiches','vegetarian'],
        location : [39.899537, -105.113444], //['10385 Westmoor Dr, Westminster, CO 80021, USA, '80202']
        number : '#',
        hours : 'Monday-Friday 11:30 AM - 02:00 PM',
        website : ''
      },
      {
        name : "Amore Pizza",
        description : "We are the home of Kick-Ass NY style Pizza Slice. Why is our pizza taste so good? its simple. Our dough is made fresh daily and the tomato sauce for our pizza is imported from the San marzano valley in Italy",
        type : ['hot food', 'pizza','vegetarian','Italian'],
        location : [39.726527, -104.998373], //['10385 Westmoor Dr, Westminster, CO 80021, USA, '80202']
        number : '(303) 952-9879',
        hours : 'Monday-Saturday 10:00 AM - 11:00 PM',
        website : 'https://www.facebook.com/AmorePizzaCo'
      }]
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
