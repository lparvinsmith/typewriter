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

    vm.toggleDrawForm = function(){
      vm.drawFormShown = !vm.drawFormShown;
    }

    vm.toggleUploadForm = function(){
      vm.uploadFormShown = !vm.uploadFormShown;
    }

    vm.toggleImageButtons = function(){
      vm.imageButtonsHidden = !vm.imageButtonsHidden;
    }

    vm.toggleImage = function(id){
      for (var i = 0; i < vm.images.length; i++) {
        if (vm.images[i].id === id) {
          vm.images[i].shown = !vm.images[i].shown
        }
      }
    }

    function init(){
      writingFactory.getSection(sectionId)
      .then(function(result){
        vm.prose = result.data.section.prose;
        vm.images = result.data.section.images;
        vm.title = result.data.section.title;
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
        vm.prose = results.data.prose;
      });
    }

    vm.create = function(){
      //get value from form and pass it to factory
      writingFactory.createImage(sectionId, {file: vm.image})
      .then(function(result){
        // append resulting story to sections array
        vm.images.push(result.data);
        // clear form
        vm.currentImage = {};
      })
    }

    vm.createDrawing = function(){
      var canvas = document.getElementById('colors_sketch');
      var image = {file: canvas.toDataURL()};
      writingFactory.createImage(sectionId, image)
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
