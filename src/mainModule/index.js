
//Angular import....
import angular        from 'angular';

import Router         from './config/main.router';
import mainComponent  from './mainComponent/main.component';

/**
 * Module definition
 * @type {angular.Module}
 */
const module = angular.module('main.module', []);


/**
 * Main Component
 */
module.component('mainComponent',mainComponent);

/**
 * Router
 */
module.config(Router);

/**
 * Module Export
 */
export default module.name