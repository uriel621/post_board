export class MainController {
  constructor ($http) {
    'ngInject';

    this.$http = $http

  }
  postMessage(){
    console.log("post")
    this.$http.post("http://localhost:5000/api/message", {msg: this.message})
  }
  
}
