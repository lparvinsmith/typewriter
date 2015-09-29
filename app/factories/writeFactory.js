(function writingFactoryIIFE(){

  var writingFactory = function($http, appSettings){
    var sa = appSettings.serverAddress;
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

  writingFactory.$inject = ['$http', 'appSettings'];

  angular.module('typewriterApp').factory('writingFactory', writingFactory);
})();
