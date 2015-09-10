(function typewriterAppIIFE(){
  var app = angular.module('typewriterApp', ['ngRoute', 'ngMessages', 'ngCookies']);

  app.config(function($routeProvider, $httpProvider){
    $httpProvider.defaults.withCredentials = true;

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
      .when('/story/:storyId',
            {
              controller: 'sectionsController',
              controllerAs: 'secCtrl',
              templateUrl: 'app/views/sections.html'
            }
      )
      // .when('/write/:sectionId', // this page has image uploader, and drawing functionality as modal?
      //       {
      //         controller: 'writingController',
      //         controllerAs: 'writeCtrl',
      //         templateUrl: 'app/views/write.html'
      //       }
      // )
      .otherwise({redirectTo: '/'});
  });

})();
