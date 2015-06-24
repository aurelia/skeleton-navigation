import {App} from '../../src/app';

class RouterStub {
  configure(handler) {
    handler(this);
  }
  map(routes) {
    this.routes = routes;
  }
}

describe('the App module', () => {
  var sut
    , mockedRouter;

  beforeEach(() => {
    mockedRouter = new RouterStub();
    sut = new App(mockedRouter);
    sut.configureRouter(mockedRouter, mockedRouter);
  });

  it('contains a router property', () => {
    expect(sut.router).toBeDefined();
  });

  it('configures the router title', () => {
    expect(sut.router.title).toEqual('Aurelia');
  });

  it('should have a welcome route', () => {
    expect(sut.router.routes).toContain({ route: ['','welcome'], name: 'welcome',  moduleId: './welcome', nav: true, title:'Welcome' });
  });

  it('should have a flickr route', () => {
     expect(sut.router.routes).toContain({ route: 'flickr', name: 'flickr', moduleId: './flickr', nav: true, title:'Flickr' });
  });

  it('should have a child router route', () => {
    expect(sut.router.routes).toContain({ route: 'child-router', name: 'child-router', moduleId: './child-router', nav: true, title:'Child Router' });
  });
});
