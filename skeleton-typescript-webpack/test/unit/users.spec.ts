import './setup';
import {HttpClient} from 'aurelia-fetch-client';
import {Users} from '../../src/users';

class HttpStub extends HttpClient {
  url;
  itemStub;
  
  fetch(url): any {
    var response = this.itemStub;
    this.url = url;
    return new Promise((resolve) => {
      resolve({ json: () => response });
    });
  }

  configure(config) {
    return this;
  }
}

describe('the Users module', () => {
  it('sets fetch response to users', (done) => {
    var itemStubs = [{avatar_url: 'u1_avatar', login: 'u1_login', html_url: 'u1_url'}];
    var itemFake = [{avatar_url: 'u2_avatar', login: 'u2_login', html_url: 'u2_url'}];

    var getHttp = () => {
      var http = new HttpStub();
      http.itemStub = itemStubs;
      return http;
    };

    var sut = new Users(getHttp);

    sut.activate().then(() => {
      expect(sut.users).toBe(itemStubs);
      expect(sut.users).not.toBe(itemFake);
      done();
    });
  });
});
