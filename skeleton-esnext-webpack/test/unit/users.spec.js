import {HttpClient} from 'aurelia-fetch-client';
import {Users} from 'users';

class HttpStub extends HttpClient {
  url;
  itemStub;
  
  fetch(url) {
    const response = this.itemStub;
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
  it('sets fetch response to users', async () => {
    const itemStubs = [{avatar_url: 'u1_avatar', login: 'u1_login', html_url: 'u1_url'}];
    const itemFake = [{avatar_url: 'u2_avatar', login: 'u2_login', html_url: 'u2_url'}];

    const getHttp = () => {
      const http = new HttpStub();
      http.itemStub = itemStubs;
      return http;
    };

    const sut = new Users(getHttp);

    await sut.activate();
    expect(sut.users).toBe(itemStubs);
    expect(sut.users).not.toBe(itemFake);
  });
});
