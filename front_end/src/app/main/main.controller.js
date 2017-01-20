export class MainController {
  constructor ($http) {
    'ngInject';
    
    this.$http = $http
    this.getMessages()

  }
  getMessages(){
      console.log("post")
      //viewmodel
      var vm = this
      this.$http.get("http://localhost:5000/api/message").then(function(result){
        console.log(result)
        vm.messages = result.data;
      })
    }
  
  postMessage(){
    console.log("post")
    this.$http.post("http://localhost:5000/api/message", {msg: this.message})
  }
  
}
