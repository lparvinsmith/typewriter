(function writingControllerIIFE(){

  var WritingController = function(writingFactory, appSettings, $routeParams){
    var vm = this;
    vm.appSettings = appSettings;
    vm.sortBy = "name";
    vm.reverse = false;
    var sectionId = $routeParams.sectionId;

    vm.images = [];
  }

  WritingController.$inject = ["writingFactory", "appSettings", "$routeParams"];

  angular.module("typewriterApp").controller("writingController", WritingController);
})();
