import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

interface IUser {
  avatar_url: string;
  login: string;
  html_url: string;
}

@autoinject
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

  async activate(): Promise<void> {
    const response = await this.http.fetch('users');
    this.users = await response.json();
  }
}
