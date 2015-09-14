(function sectionsFactoryIIFE(){

  var sa = 'https://limitless-basin-7360.herokuapp.com';

  // Create a sections factory
  var sectionsFactory = function($http){
    var sectionsAPI = {};

    sectionsAPI.getSections = function(storyId){
      // allow access to the list of sections
      return  $http.get(sa + '/stories/' + storyId);
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
