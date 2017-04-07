export default routesConfig;

export module Routes {
  export const Resume = 'Resume';
  export const Blog = 'Blog';
  export const BlogPost = 'BlogPost';
  export const Projects = 'Projects';
  export const Skills = 'Skills';
}

/** @ngInject */
function routesConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state(Routes.Resume.toLowerCase(), {
      url: '/',
      component: 'resume'
    })
    .state(Routes.Blog.toLowerCase(), {
      url: '/blog',
      component: 'blog'
    })
    .state('filterBlogByTag', {
      url: '/blog/:tag',
      component: 'blog'
    })
    .state(Routes.BlogPost.toLowerCase(), {
      url: '/blogPost/:id',
      component: 'blogPost'
    })
    .state(Routes.Projects.toLowerCase(), {
      url: '/projects',
      component: 'projects'
    })
    .state(Routes.Skills.toLowerCase(), {
      url: '/skills',
      component: 'skills'
    })
    .state('cultSim', {
      url: '/cultSim',
      component: 'cultSim'
    });
}
