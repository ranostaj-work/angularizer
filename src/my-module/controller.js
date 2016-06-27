

const HomeController = ($scope) => {
   console.log($scope);
   let $this = this;

   $this.loadData = () => {
      console.log("Load Data");
   };
}

export default  HomeController;
