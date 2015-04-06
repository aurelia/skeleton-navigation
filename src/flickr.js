import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Flickr{
  constructor(http){
    this.heading = 'Flickr';
    this.images = [];
    this.http = http;
    this.url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json';
  }

  activate(){
    return this.http.jsonp(this.url).then(response => {
      this.images = response.content.items;
    });
  }

  canDeactivate(){
    return confirm('Are you sure you want to leave?');
  }
}
