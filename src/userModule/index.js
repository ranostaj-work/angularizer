
//Angular import....
import angular from 'angular';
import Router         from './config/user.router';

// Create Model import
import userModel  from './models/user.model';


/**
 * Module definition
 * @type {angular.Module}
 */
const module = angular.module('user.module', []);

/**
 * Create Model
 */
module.service('userModel',  userModel);

/**
 * Router
 */
module.config(Router);



/**
 * Module Export
 */
export default module.name