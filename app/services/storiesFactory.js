(function storiesFactoryIIFE(){

  // Create a stories factory
  var storiesFactory = function($http){
    var storiesAPI = {};

    storiesAPI.getStories = function(){
      // allow access to the list of stories
      return  $http.get('http://localhost:3000/stories');
    };

    storiesAPI.getStory = function(storyId){
      return  $http.get('http://localhost:3000/stories/' + storyId);
    };

    storiesAPI.createStory = function(story){
      return  $http.post('http://localhost:3000/stories/', {'story': story});
    };

    //make deleteStory

    return storiesAPI;
  };

  storiesFactory.$inject = ['$http'];

  angular.module('typewriterApp').factory('storiesFactory', storiesFactory);
})();
