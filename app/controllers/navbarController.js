(function navbarControllerIIFE(){

  var NavbarController = function(authFactory){
    var vm = this;
    vm.currentUser = authFactory.currentUser;
    vm.userName = vm.currentUser.name;

    vm.isLoggedIn = function(){
      return authFactory.isLoggedIn();
    }

    vm.logout = function(){
      authFactory.logout();
    }

  }

  NavbarController.$inject= ["authFactory"];
  angular.module('typewriterApp').controller('navbarController', NavbarController);
})();

