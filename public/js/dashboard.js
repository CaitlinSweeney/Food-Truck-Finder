angular.module('foodTruckApp')
    .controller('DashboardController', Dashboard);

Dashboard.$inject = ['truckFactory']

function Dashboard(truckFactory) {
    var myTruck = this;
    myTruck.allMarkers = []
    myTruck.featuredTrucks = []
    myTruck.randomTruck = []
    myTruck.fTruck;
    myTruck.gallery = []
    myTruck.search = []
    myTruck.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
      center: new google.maps.LatLng(39.7392,-104.9903),
      mapTypeId: 'terrain',
    });
    myTruck.icon = 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'

    console.info('Dashboard.initialized')
    console.log(truckFactory)

}
