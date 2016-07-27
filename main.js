// TRUCK CONTROLLER //

angular.module('myApp', []);

angular.module('myApp', ['ngMap'])
.controller('truckCtrl', truckCtrl);

function truckCtrl(NgMap, truckFactory){
    var truck = this;
    truck.allTrucks = []
    truck.featuredTrucks = []
    truck.randomTruck = []
    truck.fTruck =
    truck.gallery = []

// get google map

    NgMap.getMap().then(function(map) {
    truck.map = map;
 });

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
  };
        $('[title]').tooltip()

// get map markers

    truck.showPopover = function(event, loc){
        console.log("working", loc)
        truck.name = loc.name
        truck.description = loc.description
        truck.hours = loc.hours
        truck.map.showInfoWindow('myInfoWindow');
    }

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
        // truck.gallery.push(truck.randomTrucks())
        // truck.gallery.push(truck.randomTrucks())
        // truck.gallery.push(truck.randomTrucks())
        // truck.gallery.push(truck.randomTrucks())

        console.log(truck.gallery)

// iterate over array gallery

     truck.newGallery = function(){
        for (i=0; i < 4; i++){
        truck.gallery.push(truck.randomTrucks())
        }
      }
      truck.newGallery()

  }; // controller

  truckCtrl.$inject = ['NgMap','truckFactory']

// END CONTROLLER

// Start TRUCK FACTORY //

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
        website : 'https://www.facebook.com/StreetFrites/',
        image : "imgs/orange-truck1.jpg"
      },
      {
        name : 'McDevitt Taco Supply',
        description : "Super heady and delicious tacos made to order! We use local and organic ingredients whenever possible to bring you food that tastes great and is environmentally responsible.",
        type : ['tacos', 'mexican', 'quesadillas', 'seafood'],
        location :  [40.017999, -105.27846], // '1300 Pearl Street, Boulder, CO 80302',
        number : '(720) 934-4694',
        hours : 'Monday-Saturday: 11:00 AM - 03:00 PM',
        website : 'http://www.mcdevitttacosupply.com/',
        image : "imgs/yellow-truck1.jpg"
      },
      {
        name : "Biker Jim's Gourmet Dogs",
        description :"Biker Jim’s craveable concept pimps 15 gourmet sausages, ranging from wild boar and Alaskan reindeer to pheasant cordon bleu and an award-winning vegan dog.",
        type : ['hot dogs', 'sausage', 'sandwiches','vegan'],
        location : [39.747861, -104.99565], //['16th and Arapahoe St', 'Denver', 'CO', '80202']
        number : '(303) 550-8231',
        hours : 'Monday-Friday 10:30 AM - 03:30 PM',
        website : 'http://www.bikerjimsdogs.com/',
        image : "imgs/yellow-truck1.jpg"
      },
      {
        name : "Waffle Up!",
        description : "These aren't your Grandma's Waffles! Serving up authentic Belgian Liege waffles!",
        type : ['breakfast', 'waffles', 'gluten-free'],
        location : [39.721284, -104.99391],// '300 Elati St, Denver CO 80223',
        number : '(303) 744-0174',
        hours : 'Tuesday - Friday 7AM- 2PM, Saturday- Sunday 8AM- 2PM',
        website : 'http://www.waffleup.com/',
        image : "imgs/orange-truck1.jpg"
      },
      {
        name : "Thai Cart",
        description : "Traditional Spicy Pad-Thai Food, Fried Appetizers, Drunken Noodles, Crab Wontons",
        type : ['Asian', 'Thai', 'gluten-free', 'noodles', 'wraps'],
        location : [39.758953, -105.010122], // '16th Street Mall, Denver CO 80223',
        number : '#',
        hours : 'Unknown',
        website : 'twitter: @thaicart80202',
        image : "imgs/white-truck1.jpg"
      },
      {
        name : "Corner of Gourmet",
        description : "Gyros, reuben egg rolls, pulled pork tacos, black bean burgers.",
        type : ['health food', 'tacos', 'sandwiches','vegetarian'],
        location : [39.899537, -105.113444], //['10385 Westmoor Dr, Westminster, CO 80021, USA, '80202']
        number : '#',
        hours : 'Monday-Friday 11:30 AM - 02:00 PM',
        website : '',
        image : "imgs/yellow-truck1.jpg"
      },
      {
        name : "Amore Pizza",
        description : "Kick-Ass NY style Pizza Slices. Our dough is made fresh daily and the tomato sauce for our pizza is imported from the San marzano valley in Italy",
        type : ['hot food', 'pizza','vegetarian','Italian'],
        location : [39.726527, -104.998373], //['10385 Westmoor Dr, Westminster, CO 80021, USA, '80202']
        number : '(303) 952-9879',
        hours : 'Monday-Saturday 10:00 AM - 11:00 PM',
        website : 'https://www.facebook.com/AmorePizzaCo',
        image : "imgs/white-truck1.jpg"
      },
      {
        name : "Hey P+J",
        description : "We make delicous Peanut Butter and Jelly Sandwiches and sometimes meatballs!",
        type : ['sandwiches','meatballs'],
        location : [39.786317, -105.036638], //['4938 Newton Street Denver, CO]
        number : '(303) 952-9879',
        hours : 'Tuesday 11am - 2pm',
        website : '',
        image : "imgs/orange-truck1.jpg"
      },
      {
        name : "Verde Food Truck",
        description : "Verde is dedicated to serving authentic, fresh, flavorful, Sonoran Mexican street food to Boulder and the surrounding area.",
        type : ['mexican', 'tacos', 'vegetarian', 'burritos'],
        location : [40.030726, -105.257566], //['10385 Westmoor Dr, Westminster, CO 80021, USA, '80202']
        number : '720-470-4348',
        hours : 'Tuesday 11am - 2pm',
        website : 'http://www.verdeboulder.com/Verde_Boulder.html',
        image : "imgs/white-truck1.jpg"
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
