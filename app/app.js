(function typewriterAppIIFE(){
  var app = angular.module('typewriterApp', ['ngRoute', 'ngMessages']);

  app.config(function($routeProvider){
    $routeProvider
      .when('/welcome',
            {
              controller: 'authenticationController',
              controllerAs: 'authCtrl',
              templateUrl: 'app/views/welcome.html'
            }
      )
      .when('/', // user's main page should be an index of all their stories
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
      .when('/write', // this page has image uploader, and drawing functionality as modal?
            {
              controller: 'sectionController',
              controllerAs: 'secCtrl',
              templateUrl: 'app/views/section.html'
            }
      )
      .otherwise({redirectTo: '/'});
  });

})();
