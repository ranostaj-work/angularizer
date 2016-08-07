
//Angular import....
import angular from 'angular';
import Router         from './config/user.router';

import CreateUserComponent from './createUserComponent/create.user.component';

/**
 * Module definition
 * @type {angular.Module}
 */
const module = angular.module('user.module', []);

/**
 * Components
 */
module.component('createUser',CreateUserComponent);

/**
 * Router
 */
module.config(Router);



/**
 * Module Export
 */
export default module.name