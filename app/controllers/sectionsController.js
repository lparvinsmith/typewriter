(function sectionsControllerIIFE(){

  var SectionsController = function(sectionsFactory, appSettings, $routeParams){
    var vm = this;
    vm.appSettings = appSettings;
    vm.sortBy = "name";
    vm.reverse = false;
    var storyId = $routeParams.storyId;
    vm.createFormShown = false;
    vm.updatedSection = {};
    vm.showUpdateForm = false;
    vm.story = sectionsFactory.story;


    // reflects the contents of the form, the current section
    vm.currentSection = {};

    vm.toggleCreateForm = function(){
      vm.createFormShown = !vm.createFormShown;
    }

    //finds section's location within array
    function findSectionIndexById(id) {
      for (var i = 0; i < vm.story.sections.length; i++) {
        if (vm.story.sections[i].id === id) {
          return i;
        }
      }
    }

    vm.toggleUpdateForm = function(sectionId){
      var index = findSectionIndexById(sectionId);
      vm.story.sections[index].editForm = !vm.story.sections[index].editForm;
    }

    function init(){
      sectionsFactory.getSections(storyId);
    }

    init();

    vm.create = function(){
      //get value from form and pass it to factory
      sectionsFactory.createSection(storyId, vm.currentSection)
      .then(function(result){
        // append resulting section to sections array
        vm.story.sections.push(result.data);
        // clear form
        vm.currentSection = {};
      })
    }

    vm.update = function(sectionId){
      //get value from form and pass it to factory
      var index = findSectionIndexById(sectionId);
      sectionsFactory.updateSection(sectionId, vm.story.sections[index])
      .then(function(results){
        vm.story.sections[index] = results.data;
      });
    }

    vm.delete = function(sectionId){
      var index = findSectionIndexById(sectionId);
      sectionsFactory.deleteSection(sectionId).then(function(){
        vm.story.sections.splice(index,1);
      })
    }

    // reset the form to empty
    vm.reset = function(){
      vm.currentSection = angular.copy({});
    };

    // start off with a reset form
    vm.reset();

    vm.doSort = function(propName){
      vm.sortBy = propName;
      vm.reverse = !vm.reverse;
    };

  };

 SectionsController.$inject = ['sectionsFactory', 'appSettings', '$routeParams'];

 angular.module('typewriterApp').controller('sectionsController', SectionsController);

})();
