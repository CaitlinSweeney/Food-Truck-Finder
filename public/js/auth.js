(function(){
    angular.module('foodTruckApp')
        .controller('app.auth.controller', Auth)

    Auth.$inject = ['$http', 'truckFactory'];

    function Auth($http, truckFactory) { // window.Auth
        console.info('Auth controller loaded!');

        var auth = this,
            alertError = ['alert','alert-danger'];

        auth.payload = {};

        auth.login = {
            submit: function($event) { // click-event
                console.info('auth.login.submit');

                $http.post('/login', $event)
                    .then(auth.login.success, auth.login.error);
            },
            success: function(res) { // server response callback
                location.href = '/dashboard';
            },
            error: function(err) {
                console.error('Login.error', err);
                auth.login.alert = alertError;
                auth.login.message = ( err.data && err.data.message ) || 'Login failed, contact us!';
            }
        };

        auth.register = {
            submit: function (payload) {
                // happens when the user clicks submit on the register form
                $http.post('/register', payload)
                    .then(auth.register.success, auth.register.error);
            },
            success: function(res) {
                // when register is successful, just redirect them into the dashboard (already logged in)
                console.log(res, "here is your response")
                truckFactory.loggedinTruck.fullName = res.data.fullName,
                location.href = "/dashboard";
            },
            error: function(err) {
                console.error('auth.register.error', err);

                // user feedback stuffs, sets up the alert box on error
                auth.register.alert = alertError;
                auth.register.message = ( err.data && err.data.message ) || 'Register failed, contact us!'
             }
        };
     }
})();
