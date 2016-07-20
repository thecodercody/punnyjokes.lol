angular.module('pundexApp', ['ngRoute'])


.controller('MainCtrl', ['$scope', function($scope){

}])

.config(function($routeProvider, $locationProvider){
    $routeProvider

      // landing page
      .when('/', {
        templateUrl : 'client/pages/home.html',
        controller : 'homeController'
      })

      // about page
      .when('/about', {
        templateUrl : "client/pages/about.html"
      })

      // how to pun page
      .when('/howToPun', {
        templateUrl : "client/pages/howTo.html"
      })

      // visual pun page
      .when('/visualPuns', {
        templateUrl : "client/pages/visualPuns.html"
      })

      // double pun page
      .when('/doublePuns', {
        templateUrl : "client/pages/doublePuns.html"
      })

      // religious pun page
      .when('/religiousPuns', {
        templateUrl : "client/pages/religiousPuns.html"
      })

      // list of puns page
      .when('/listOfPuns', {
        templateUrl : "client/pages/listOfPuns.html"
      })



      // all others
      .otherwise({redirectTo: '/'});
      $locationProvider.html5Mode(true);
  });
