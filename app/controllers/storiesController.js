(function storiesControllerIIFE(){


  var StoriesController = function(storiesFactory, appSettings){
    var vm = this;
    vm.appSettings = appSettings;
    vm.sortBy = "name";
    vm.reverse = false;

    // All the people
    vm.stories= [];
    // reflects the contents of the form, the current story
    vm.currentStory = {};


    function init(){
      storiesFactory.getStories()
      .then(function(result){
        vm.stories = result.data;
      }, function(data, status, headers, config){
        console.log("Error getting stories from the api");
        alert("Error getting stories from the api");
      });
    }

    init();

    //create customer in backend using API
    vm.create = function(){
      //get value from form and pass it to factory
      storiesFactory.create(vm.currentStory)
      .then(function(result){
        // append resulting story to stories array
        // will automatically update list of stories in view
        vm.stories.push(result.data);
        // clear out current person, and thus clear form
        vm.currentStory = {};
      })
    }

    vm.update = function(){
      //get value from form and pass it to factory
      storiesFactory.update(storyId, vm.currentStory)
      .then(function(results){
        // automatically update list of people in view
        vm.story = (results.data);
        // clear out current person, and thus clear form
        vm.currentStory = {};
      })
    }

    // reset the form to empty
    vm.reset = function(){
      vm.currentStory = angular.copy({});
    };

    // start off with a reset form
    vm.reset();

    vm.doSort = function(propName){
      vm.sortBy = propName;
      vm.reverse = !vm.reverse;
    };

  };

 StoriesController.$inject = ['storiesFactory', 'appSettings'];

 angular.module('typewriterApp').controller('storiesController', StoriesController);

})();
