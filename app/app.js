(function typewriterAppIIFE(){
  var app = angular.module('typewriterApp', ['ngRoute', 'ngMessages']);

  app.config(function($routeProvider){
    $routeProvider
      .when('/',
            { templateUrl: 'app/views/welcome.html' } //if no changing data, still need this as template?
      )
      .when('/stories',
            {
              controller: 'storiesController',
              controllerAs: 'storiesCtrl',
              templateUrl: 'app/views/stories.html'
            }
      )
      .when('/story',
            {
              controller: 'storyController',
              controllerAs: 'storyCtrl',
              templateUrl: 'app/views/story.html'
            }
      )
      .when('/section',
            {
              controller: 'sectionController',
              controllerAs: 'secCtrl',
              templateUrl: 'app/views/section.html'
            }
      )
      .otherwise({redirectTo: '/'});
  });

})();
