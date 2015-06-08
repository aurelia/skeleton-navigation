import {Flickr} from '../../src/flickr';

class HttpStub {
  jsonp(url) {
    var response = this.itemStub;
    this.url = url;
    return new Promise((resolve) => {
      resolve({ content: { items: response } });
    })
  }
}

describe('the Flickr module', () => {

  it('sets jsonp response to images', (done) => {
    var http = new HttpStub(),
        sut = new Flickr(http),
        itemStubs = [1],
        itemFake = [2];

    http.itemStub = itemStubs;
    sut.activate().then(() => {
      expect(sut.images).toBe(itemStubs);
      expect(sut.images).not.toBe(itemFake);
      done();
    });
  });
});
