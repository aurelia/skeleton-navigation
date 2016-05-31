import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

/**
 * Polyfill Fetch client conditionally
 */
const ensureFetchPolyfill = !self.fetch ? System.import('isomorphic-fetch') : Promise.resolve();

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
    await ensureFetchPolyfill;
    const response = await this.http.fetch('users');
    this.users = await response.json();
  }
}
