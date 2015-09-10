(function sectionsControllerIIFE(){

  var SectionsController = function(sectionsFactory, appSettings){
    var vm = this;
    vm.appSettings = appSettings;
    vm.sortBy = "name";
    vm.reverse = false;

    // All the people
    vm.sections= [];
    // reflects the contents of the form, the current section
    vm.currentSection = {};


    function init(){
      sectionsFactory.getSections()
      .then(function(result){
        vm.sections = result.data;
      }, function(data, status, headers, config){
        console.log("Error getting sections from the api");
        alert("Error getting sections from the api");
      });
    }

    init();

    //create customer in backend using API
    vm.create = function(){
      //get value from form and pass it to factory
      sectionsFactory.create(vm.currentSection)
      .then(function(result){
        // append resulting story to stories array
        // will automatically update list of stories in view
        vm.sections.push(result.data);
        // clear out current person, and thus clear form
        vm.currentSection = {};
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

 SectionsController.$inject = ['sectionsFactory', 'appSettings'];

 angular.module('typewriterApp').controller('sectionsController', SectionsController);

})();
