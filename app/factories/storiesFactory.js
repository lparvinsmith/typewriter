(function storiesFactoryIIFE(){

  var sa = 'https://limitless-basin-7360.herokuapp.com';

  // Create a stories factory
  var storiesFactory = function($http){
    var storiesAPI = {};

    storiesAPI.getStories = function(){
      // allow access to the list of stories
      return  $http.get(sa + '/stories');
    };

    storiesAPI.getStory = function(storyId){
      return  $http.get(sa + '/stories/' + storyId);
    };

    storiesAPI.createStory = function(story){
      return  $http.post(sa + '/stories/', story);
    };

    storiesAPI.updateStory = function(storyId, story){
      return  $http.patch(sa + '/stories/' + storyId, story);
    };

    storiesAPI.deleteStory = function(storyId){
      return  $http.delete(sa + '/stories/' + storyId);
    };

    return storiesAPI;
  };

  storiesFactory.$inject = ['$http'];

  angular.module('typewriterApp').factory('storiesFactory', storiesFactory);
})();
