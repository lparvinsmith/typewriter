(function storiesControllerIIFE(){


  var StoriesController = function(storiesFactory, appSettings, $routeParams){
    var vm = this;
    vm.appSettings = appSettings;
    vm.sortBy = "name";
    vm.reverse = false;
    vm.createFormShown = false;
    vm.updatedStory = {};
    vm.showUpdateForm = false;

    // All the people
    vm.stories= [];
    // reflects the contents of the form, the current story
    vm.currentStory = {};

    vm.toggleCreateForm = function(){
      vm.createFormShown = !vm.createFormShown;
    }

    function findStoryIndexById(id) {
      for (var i = 0; i < vm.stories.length; i++) {
        if (vm.stories[i].id === id) {
          return i;
        }
      }
    }

    vm.toggleUpdateForm = function(storyId){
      var index = findStoryIndexById(storyId);
      vm.stories[index].editForm = !vm.stories[index].editForm;
    }


    function init(){
      storiesFactory.getStories()
      .then(function(result){
        vm.stories = result.data;
      }, function(data, status, headers, config){
        console.log("Error getting stories from the api");
      });
    }

    init();

    //create customer in backend using API
    vm.create = function(){
      //get value from form and pass it to factory
      storiesFactory.createStory(vm.currentStory)
      .then(function(result){
        // append resulting story to stories array
        // will automatically update list of stories in view
        vm.stories.push(result.data);
        // clear out current person, and thus clear form
        vm.currentStory = {};
      })
    }

    vm.update = function(storyId){
      //get value from form and pass it to factory
      var index = findStoryIndexById(storyId);
      storiesFactory.updateStory(storyId, vm.stories[index])
      .then(function(results){
        // automatically update list of people in view
        vm.stories[index] = results.data;
        // clear out current person, and thus clear form
      });
    }

    vm.delete = function(storyId){
      var index = findStoryIndexById(storyId);
      storiesFactory.deleteStory(storyId).then(function(){
        vm.stories.splice(index,1);
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
