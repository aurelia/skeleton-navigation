import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Users{
  heading = 'Github Users';
  users = [];
  url = 'https://api.github.com/users';

  constructor(http){
    this.http = http;
  }

  activate(){
    return this.http.get(this.url).then(response => this.users = response.content);
  }
}
