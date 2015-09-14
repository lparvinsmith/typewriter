'use strict';
// redirects to /welcome page if user is not logged in

(function authFactoryIIFE(){

  var sa = 'https://limitless-basin-7360.herokuapp.com';

  var authFactory = function($http){
    var userApi = {};
    userApi.currentUser = {};

    //post to sign in
    userApi.signup = function (credentials){
      return $http.post(sa + '/signup', credentials).then(function(response){
        angular.copy(response.data, userApi.currentUser);
      }).catch(function(err){
        console.error(err);
      });
    }
    //post to login
    userApi.login = function (credentials){
      return $http.post(sa + '/login', credentials).then(function(response){
        console.log(response);
        angular.copy(response.data, userApi.currentUser);
      }).catch(function(err){
        console.error(err);
      });
    }
    //all to logout

    // if userApi.currentUser is defined, returns true/ o false
    userApi.isLoggedIn = function(){
      return (userApi.currentUser);
    }

    return userApi;
  }
  authFactory.$inject = ['$http'];

  angular.module("typewriterApp").factory("authFactory", authFactory);
})();
