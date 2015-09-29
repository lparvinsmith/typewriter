'use strict';
// redirects to /welcome page if user is not logged in

(function authFactoryIIFE(){

  var authFactory = function($http, $cookies, $location, appSettings){
    var sa = appSettings.serverAddress;
    var userApi = {};
    userApi.currentUser = {};

    //post to sign in
    userApi.signup = function (credentials){
      return $http.post(sa + '/signup', credentials).then(function(response){
        angular.copy(response.data, userApi.currentUser);
        console.log("Thanks for signing up! Please log in to continue");
        alert("Thanks for signing up! Please log in to continue");
      }).catch(function(err){
        console.error(err);
        alert("There was an error signing you up. Please try again.");
      });
    }
    //post to login
    userApi.login = function (credentials){
      return $http.post(sa + '/login', credentials).then(function(response){
        console.log(response); //do location redirect here
        // angular.copy(response.data, userApi.currentUser);
        userApi.getCurrentUser();
        $location.path('/');
        localStorage['logged-in'] = 'true';
      }).catch(function(err){
        console.error(err);
        alert("There was an error logging you in. Please check your credentials and try again.");
      });
    }
    //all to logout
    userApi.logout = function(){
      return $http.post(sa + '/logout').then(function(response){
        console.log(response);
        localStorage.removeItem('logged-in');
        $location.path('/welcome');
      }).catch(function(err){
        console.error(err);
      });
    }

    userApi.getCurrentUser = function(){
      return $http.get(sa + '/profile').then(function(response){
        console.log(response); //do location redirect here
        angular.copy(response.data, userApi.currentUser);
        $location.path('/');
        localStorage['logged-in'] = 'true';
      }).catch(function(err){
        console.log('Please log in');
      });
    }

    // if userApi.currentUser is defined, returns true/ o false
    userApi.isLoggedIn = function(){

      return (localStorage['logged-in']);
    }

    return userApi;
  }
  authFactory.$inject = ['$http', '$cookies', '$location', 'appSettings'];

  angular.module("typewriterApp").factory("authFactory", authFactory);
})();
