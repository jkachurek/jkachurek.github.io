export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('resume', {
      url: '/',
      component: 'resume'
    })
    .state('projects', {
      url: '/projects',
      component: 'projects'
    })
    .state('skills', {
      url: '/skills',
      component: 'skills'
    });
}
