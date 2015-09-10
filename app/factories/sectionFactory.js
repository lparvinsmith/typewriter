(function sectionsFactoryIIFE(){

  // Create a sections factory
  var sectionsFactory = function($http){
    var sectionsAPI = {};

    sectionsAPI.getSections = function(){
      // allow access to the list of sections
      return  $http.get('http://localhost:3000/sections');
    };

    sectionsAPI.getSection = function(sectionId){
      return  $http.get('http://localhost:3000/sections/' + sectionId);
    };

    sectionsAPI.createSection = function(section){
      return  $http.post('http://localhost:3000/sections/', section);
    };

    sectionsAPI.updateSection = function(sectionId, section){
      return  $http.patch('http://localhost:3000/sections/' + sectionId, section);
    };

    sectionsAPI.deleteSection = function(sectionId){
      return  $http.delete('http://localhost:3000/sections/' + sectionId);
    };

    return sectionsAPI;
  };

  sectionsFactory.$inject = ['$http'];

  angular.module('typewriterApp').factory('sectionsFactory', sectionsFactory);
})();
