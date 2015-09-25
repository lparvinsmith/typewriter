(function sectionsFactoryIIFE(){

  var sa = 'https://limitless-basin-7360.herokuapp.com';
  // var sa = 'http://localhost:3000';

  // Create a sections factory
  var sectionsFactory = function($http){
    var sectionsAPI = {};
    sectionsAPI.story = {};
    sectionsAPI.sections = [];

    sectionsAPI.getSections = function(storyId){
      // allow access to the list of sections
      return  $http.get(sa + '/stories/' + storyId).then(function(result){
        angular.copy(result.data.story, sectionsAPI.story);
      });
    };

    sectionsAPI.createSection = function(storyId, section){
      return  $http.post(sa + '/stories/'+ storyId, section);
    };

    sectionsAPI.getSection = function(sectionId){
      return  $http.get(sa + '/sections/' + sectionId);
    };

    sectionsAPI.updateSection = function(sectionId, section){
      return  $http.patch(sa + '/sections/' + sectionId, section);
    };

    sectionsAPI.deleteSection = function(sectionId){
      return  $http.delete(sa + '/sections/' + sectionId);
    };

    return sectionsAPI;
  };

  sectionsFactory.$inject = ['$http'];

  angular.module('typewriterApp').factory('sectionsFactory', sectionsFactory);
})();
