System.register(["aurelia-http-client"], function (_export) {
  "use strict";

  var HttpClient, url, Flickr;
  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json";
      Flickr = function Flickr(http) {
        this.heading = "Flickr";
        this.images = [];
        this.http = http;
      };

      Flickr.inject = function () {
        return [HttpClient];
      };

      Flickr.prototype.activate = function () {
        var _this = this;
        return this.http.jsonp(url).then(function (response) {
          _this.images = response.content.items;
        });
      };

      Flickr.prototype.canDeactivate = function () {
        return confirm("Are you sure you want to leave?");
      };

      _export("Flickr", Flickr);
    }
  };
});