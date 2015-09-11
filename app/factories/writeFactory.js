(function writingFactoryIIFE(){

  // Create a sections factory
  var writingFactory = function($http){
    var writingAPI = {};

    // PROSE
    writingAPI.getSection = function(sectionId){
      return  $http.get('http://localhost:3000/sections/' + sectionId);
    };

    writingAPI.updateProse = function(sectionId, prose){
      var prose = {prose: prose};
      return  $http.patch('http://localhost:3000/sections/' + sectionId, prose);
    };

    // IMAGES
    writingAPI.createImage = function(sectionId, image){
      return  $http.post('http://localhost:3000/sections/' +sectionId, image);
    };

    writingAPI.getImage = function(imageId){
      return  $http.get('http://localhost:3000/images/' + imageId);
    };

    writingAPI.deleteImage = function(imageId){
      return  $http.delete('http://localhost:3000/images/' + imageId);
    };

    return writingAPI;
  };

  writingFactory.$inject = ['$http'];

  angular.module('typewriterApp').factory('writingFactory', writingFactory);
})();
