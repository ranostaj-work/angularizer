
import angular from "angular";
import uiRouter from "angular-ui-router"

import myModule from "./my-module";

// Main module name
const MODULE_NAME = 'app';


let APP_MODULES = [
  myModule.name
]

let CORE_MODULES = [
  uiRouter
];

let MODULES  = CORE_MODULES.concat(APP_MODULES);
/**
  Define Angular Module
*/

angular
  .module(MODULE_NAME,MODULES)
  .config(($stateProvider, $urlRouterProvider) => {

    $stateProvider
    .state('home', {
      url:'/',
      template:'<div>HELLO {{ctrl.data}} <a ui-sref="home.dashboard">Dashboard</a><ui-view></ui-view></div>',
      controller: 'HomeController',
      controllerAs: 'ctrl'

    })
    .state('home.dashboard', {
      url:'dashboard',
      template: '<div>DASHBOARD</div>'
    });
    $urlRouterProvider.otherwise("/");
  });


  /**
    Bootstrap Angualar App
  */
  angular.element(document).ready(function() {
    angular.bootstrap(document, [MODULE_NAME]);
  });
