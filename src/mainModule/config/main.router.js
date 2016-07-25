/**
 * Router
 */


/*@ngInject*/
const Router = ($stateProvider, $urlRouterProvider) => {

  $stateProvider
  .state('main', {
    url:'/',
    template: '<main-component></main-component>'
  });

  $urlRouterProvider.otherwise("/");

};

export default Router;

