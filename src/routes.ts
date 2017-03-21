export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/resume');

  $stateProvider
    .state('resume', {
      url: '/resume',
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
