(function navbarControllerIIFE(){

  var NavbarController = function(authFactory, $scope){
    var vm = this;
    vm.currentUser = authFactory.currentUser;
    vm.userName = vm.currentUser.name;

    vm.isLoggedIn = function(){
      return authFactory.isLoggedIn();
    }

    vm.logout = function(){
      authFactory.logout();
    }

    $scope.$watch(function(){ return self.currentUser}, function(user){
      if (!user && localStorage['logged-in']) {
        authFactory.getCurrentUser();
      }
    });

  }

  NavbarController.$inject= ["authFactory", "$scope"];
  angular.module('typewriterApp').controller('navbarController', NavbarController);
})();

