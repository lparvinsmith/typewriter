(function writingFactoryIIFE(){

  var sa = 'https://limitless-basin-7360.herokuapp.com';

  // Create a sections factory
  var writingFactory = function($http){
    var writingAPI = {};

    // PROSE
    writingAPI.getSection = function(sectionId){
      return  $http.get(sa + '/sections/' + sectionId);
    };

    writingAPI.updateProse = function(sectionId, prose){
      var prose = {prose: prose};
      return  $http.patch(sa + '/sections/' + sectionId, prose);
    };

    // IMAGES
    writingAPI.createImage = function(sectionId, image){
      return  $http.post(sa + '/sections/' +sectionId, image);
    };

    writingAPI.getImage = function(imageId){
      return  $http.get(sa + '/images/' + imageId);
    };

    writingAPI.deleteImage = function(imageId){
      return  $http.delete(sa + '/images/' + imageId);
    };

    return writingAPI;
  };

  writingFactory.$inject = ['$http'];

  angular.module('typewriterApp').factory('writingFactory', writingFactory);
})();
