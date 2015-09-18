(function navbarDirectiveIIFE(){

  function typNavbar(){

    return {
      restrict: 'E',
      templateUrl: 'app/views/navbar.html',
      controller: 'navbarController',
      controllerAs: 'navCtrl',
      bindToController: true
    };
  };

  angular.module('typewriterApp').directive('typNavbar', typNavbar);

})();
