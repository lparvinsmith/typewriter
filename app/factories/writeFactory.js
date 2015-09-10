(function writingFactoryIIFE(){

  // Create a sections factory
  var writingFactory = function($http){
    var writingAPI = {};

    writingAPI.getSections = function(){
      // allow access to the list of sections
      return  $http.get('http://localhost:3000/sections');
    };

    writingAPI.getSection = function(sectionId){
      return  $http.get('http://localhost:3000/sections/' + sectionId);
    };

    writingAPI.createSection = function(section){
      return  $http.post('http://localhost:3000/sections/', section);
    };

    writingAPI.updateSection = function(sectionId, section){
      return  $http.patch('http://localhost:3000/sections/' + sectionId, section);
    };

    writingAPI.deleteSection = function(sectionId){
      return  $http.delete('http://localhost:3000/sections/' + sectionId);
    };

    return writingAPI;
  };

  writingFactory.$inject = ['$http'];

  angular.module('typewriterApp').factory('writingFactory', writingFactory);
})();
