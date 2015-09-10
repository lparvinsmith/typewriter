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
      return  $http.post('http://localhost:3000/stories/', story);
    };

    storiesAPI.createStory = function(storyId, story){
      return  $http.patch('http://localhost:3000/stories/' + storyId, story);
    };

    storiesAPI.deleteStory = function(storyId){
      return  $http.delete('http://localhost:3000/stories/' + storyId);
    };

    return storiesAPI;
  };

  storiesFactory.$inject = ['$http'];

  angular.module('typewriterApp').factory('storiesFactory', storiesFactory);
})();
