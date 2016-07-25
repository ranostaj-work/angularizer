
import angular        from "angular";
import uiRouter       from "angular-ui-router"


import mainModule     from './mainModule/';
import userModule     from './userModule';


// Main module name
const MODULE_NAME = 'app';


let APP_MODULES   = [userModule, mainModule];

let CORE_MODULES  = [uiRouter];

/**
  Define Angular Module
*/

angular
  .module(MODULE_NAME,CORE_MODULES.concat(APP_MODULES));


  /**
    Bootstrap Angualar App
  */
  angular.element(document).ready(function() {
    angular.bootstrap(document, [MODULE_NAME]);
  });
