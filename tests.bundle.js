//import 'angular';
//import 'angular-mocks';

var context = require.context('./src', true, /\.spec\.js$/);
context.keys().forEach(context);
module.exports = context;