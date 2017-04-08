import {Users} from 'src/users';
import {HttpClient} from 'aurelia-fetch-client';

class HttpStub {
  items: any[];
  
  fetch(url) {
    return new Promise(resolve => {
      resolve({ json: () => this.items });
    });
  }
  
  configure(func) { }
}

function createHttpStub(): any {
  return new HttpStub();
}

describe('the Users module', () => {

  it('sets fetch response to users', (done) => {
    var http = createHttpStub(),
        sut = new Users(<HttpClient>http),
        itemStubs = [{avatar_url: 'u1_avatar', login: 'u1_login', html_url: 'u1_url'}],
        itemFake = [{avatar_url: 'u2_avatar', login: 'u2_login', html_url: 'u2_url'}];

    http.items = itemStubs;
    
    sut.activate().then(() => {
      expect(sut.users).toBe(itemStubs);
      expect(sut.users).not.toBe(itemFake);
      done();
    });
  });
});
