'use strict';
// redirects to /welcome page if user is not logged in

(function authFactoryIIFE(){

  // var sa = 'https://limitless-basin-7360.herokuapp.com';
  var sa = 'http://localhost:3000';

  var authFactory = function($http, $cookies, $location){
    var userApi = {};
    userApi.currentUser = {};

    //post to sign in
    userApi.signup = function (credentials){
      return $http.post(sa + '/signup', credentials).then(function(response){
        angular.copy(response.data, userApi.currentUser);
        localStorage['logged-in'] = 'true';
      }).catch(function(err){
        console.error(err);
      });
    }
    //post to login
    userApi.login = function (credentials){
      return $http.post(sa + '/login', credentials).then(function(response){
        console.log(response); //do location redirect here
        angular.copy(response.data, userApi.currentUser);
        $location.path('/');
        localStorage['logged-in'] = 'true';
      }).catch(function(err){
        console.error(err);
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
  authFactory.$inject = ['$http', '$cookies', '$location'];

  angular.module("typewriterApp").factory("authFactory", authFactory);
})();
