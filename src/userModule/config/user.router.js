/**
 * Router
 */


/*@ngInject*/
const Router = ($stateProvider, $urlRouterProvider) => {

  $stateProvider
  .state('user', {
    url:'/user',
    template: '<div>User</div>'
  });

  $urlRouterProvider.otherwise("/");

};

export default Router;

