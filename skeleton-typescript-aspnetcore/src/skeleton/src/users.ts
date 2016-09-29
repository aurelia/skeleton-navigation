import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@autoinject
export class Users {
  public heading = 'Github Users';
  public users = [];

  constructor(private http: HttpClient) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });
  }

  public activate() {
    return this.http.fetch('users')
      .then(response => response.json())
      .then(users => this.users = users);
  }
}
