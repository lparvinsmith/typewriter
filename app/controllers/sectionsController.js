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

    // All the people
    vm.sections= [];
    // reflects the contents of the form, the current section
    vm.currentSection = {};

    vm.toggleCreateForm = function(){
      vm.createFormShown = !vm.createFormShown;
    }

    //finds section's location within array
    function findSectionIndexById(id) {
      for (var i = 0; i < vm.sections.length; i++) {
        if (vm.sections[i].id === id) {
          return i;
        }
      }
    }

    vm.toggleUpdateForm = function(sectionId){
      var index = findSectionIndexById(sectionId);
      vm.sections[index].editForm = !vm.sections[index].editForm;
    }

    function init(){
      sectionsFactory.getSections(storyId)
      .then(function(result){
        vm.sections = result.data.story.sections;
      }, function(data, status, headers, config){
        console.log("Error getting sections from the api");
        alert("Error getting sections from the api");
      });
    }

    init();

    //create customer in backend using API
    vm.create = function(){
      //get value from form and pass it to factory
      sectionsFactory.createSection(storyId, vm.currentSection)
      .then(function(result){
        // append resulting story to stories array
        // will automatically update list of stories in view
        vm.sections.push(result.data);
        // clear out current person, and thus clear form
        vm.currentSection = {};
      })
    }

    vm.update = function(sectionId){
      //get value from form and pass it to factory
      var index = findSectionIndexById(sectionId);
      sectionsFactory.updateSection(sectionId, vm.sections[index])
      .then(function(results){
        vm.sections[index] = results.data;
      });
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
