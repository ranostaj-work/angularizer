/**
 * Router
 */


/*@ngInject*/
const Router = ($stateProvider, $urlRouterProvider) => {

  $stateProvider
  .state('main', {
    url:'/'
  });

  $urlRouterProvider.otherwise("/");

};

export default Router;

