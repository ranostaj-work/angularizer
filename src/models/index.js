
//Angular import....
import angular from 'angular';
// Create Model import
import userModel  from './userModel/user.model';


/**
 * Module definition
 * @type {angular.Module}
 */
const module = angular.module('models', []);

/**
 * User Model
 */
module.service('userModel',  userModel);

/**
 * Module Export
 */
export default module.name