import config from './config-service'

export default {

  init: function(vue){
    /**
     * Reference to the global Vue object
     */
    this.vm = vue;
    this.vm.http.options.root = wp.root + 'wp/v2';
    this.uri = config.baseURI + config.rest;
  },

  discover: function(){
    // Link HEAD request
    // http://webgurl.lab/wp-json/wp/v2/
    this.vm.http({url: config.baseURI, method: 'HEAD'}).then(function (response) {
      // success callback
      console.log(response);
      var baseURI = response.headers('link');
      console.log(baseURI);
    }, function (response) {
      // error callback
      console.error(response);
    });
  },

  check: function(){
    // Link HEAD request
    // http://webgurl.lab/wp-json/wp/v2/
    this.vm.http({url: this.uri, method: 'GET'}).then(function (response) {
      // success callback
      console.log(response);
    }, function (response) {
      // error callback
      console.error(response);
    });
  },

  posts: function(params) {
    return this.vm.http({url: 'posts', method: 'GET'});
  }
}
