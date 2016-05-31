declare module "isomorphic-fetch" {
  import fetch = require('aurelia-fetch-client');

  interface IFetchStatic {
    Promise: any;
    Headers: Headers;
    Request: Request;
    Response: Response;
    (url: string | Request, init?: RequestInit): Promise<Response>;
  }

  var fetchStatic: IFetchStatic;
  export = fetchStatic;
}
