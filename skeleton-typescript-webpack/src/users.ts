import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'isomorphic-fetch';

interface IUser {
  avatar_url: string;
  login: string;
  html_url: string;
}

@inject(HttpClient)
export class Users {
  heading: string = 'Github Users';
  users: Array<IUser> = [];

  constructor(public http: HttpClient) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });
  }

  activate(): Promise<IUser[]> {
    return this.http.fetch('users')
      .then<IUser[]>(response => response.json())
      .then<IUser[]>(users => this.users = users);
  }
}
