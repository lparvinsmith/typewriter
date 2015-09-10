(function writingFactoryIIFE(){

  // Create a sections factory
  var writingFactory = function($http){
    var writingAPI = {};

    // PROSE
    writingAPI.getSection = function(sectionId){
      return  $http.get('http://localhost:3000/sections/' + sectionId);
    };

    writingAPI.updateSection = function(sectionId, section){
      return  $http.patch('http://localhost:3000/sections/' + sectionId, section);
    };

    // IMAGES
    writingAPI.getImages = function(){
      // allow access to the list of sections
      return  $http.get('http://localhost:3000/sections');
    };

    writingAPI.createImage = function(image){
      return  $http.post('http://localhost:3000/sections/', image);
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
