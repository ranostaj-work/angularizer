/**
 * Router
 */


/*@ngInject*/
const Router = ($stateProvider, $urlRouterProvider) => {

  $stateProvider
  .state('user', {
    url:'/user',
    template: '<create-user></create-user>'
  });

  $urlRouterProvider.otherwise("/");

};

export default Router;

