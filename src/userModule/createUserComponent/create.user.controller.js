
/*@ngInject*/
 class UserCreateController  {
    constructor(userModel) {
      this.user  = userModel.loadData();
    }

    loadData() {
        return 'data'
    }
}

 export default UserCreateController;