'use strict';

(function(){

    angular.module('typewriterApp').directive("fileInputModel", [function () {
        return {
            // data binds both ways
            scope: {
                fileInputModel: "="
            },
            // link runs when an element with directive "fileINputModel" is created
            link: function (scope, element, attributes) {
                // binds an on chnage handler
                element.bind("change", function (changeEvent) {
                    var reader = new FileReader();
                    reader.onload = function (loadEvent) {
                        scope.$apply(function () {
                            // set the model that we defined equal to the dataURL
                            scope.fileInputModel = loadEvent.target.result;
                        });
                    }
                    // reads the picture in the file input as a dataURL
                    reader.readAsDataURL(changeEvent.target.files[0]);
                });
            }
        }
    }]);
})();
