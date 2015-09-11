(function writingControllerIIFE(){

  var WritingController = function(writingFactory, appSettings, $routeParams){
    var vm = this;
    vm.appSettings = appSettings;
    vm.sortBy = "name";
    vm.reverse = false;
    var sectionId = $routeParams.sectionId;
    vm.sectionId = sectionId;

    vm.images = [];
    vm.currentImage = {};

    function init(){
      writingFactory.getSection(sectionId)
      .then(function(result){
        vm.prose = result.data.section.prose;
        vm.images = result.data.section.images;
      }, function(data, status, headers, config){
        console.log("Error getting section from the api");
        alert("Error getting section from the api");
      });
    }

    init();

    // update sections.prose
    vm.update = function(sectionId){
      //get value from form and pass it to factory
      writingFactory.updateProse(sectionId, vm.prose)
      .then(function(results){
        vm.prose = results.data;
      });
    }

    vm.create = function(){
      //get value from form and pass it to factory
      writingFactory.createImage(sectionId, vm.currentImage)
      .then(function(result){
        // append resulting story to sections array
        vm.images.push(result.data);
        // clear form
        vm.currentImage = {};
      })
    }

  }

  WritingController.$inject = ["writingFactory", "appSettings", "$routeParams"];

  angular.module("typewriterApp").controller("writingController", WritingController);
})();
