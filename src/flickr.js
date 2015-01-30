import {HttpClient} from 'aurelia-http-client';

var url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json';

export class Flickr{
  static inject() { return [HttpClient]; }
  constructor(http){
    this.heading = 'Flickr';
    this.images = [];
    this.http = http;
  }

  activate(){
    return this.http.jsonp(url).then(response => {
      this.images = response.content.items;
    });
  }

  canDeactivate(){
    return confirm('Are you sure you want to leave?');
  }
}
