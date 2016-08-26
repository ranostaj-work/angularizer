
import app from './../index';

describe('CreateUserController',  () => {

    beforeEach(() => {
        angular.mock.module(app);
        inject(($controller, $location) => {
            controller = $controller('UserCreateController', { $location: $location });
        })
    });

});