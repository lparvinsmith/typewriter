(function loginControllerIIFE(){

  var AuthenticationController = function(authFactory){
    var vm = this;
    vm.loginCredentials = {};
    vm.signupCredentials = {};
    vm.currentUser = authFactory.currentUser;

    vm.login = function(){
      authFactory.login(vm.loginCredentials);
    };

    vm.signup = function(){
      authFactory.signup(vm.signupCredentials);
    };

  }

  AuthenticationController.$inject= ["authFactory"];
  angular.module('typewriterApp').controller('authenticationController', AuthenticationController);
})();
