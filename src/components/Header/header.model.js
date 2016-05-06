export default {
  ready() {
    this.getPages();
  },

  data() {
    return {
      base_path: wp.base_path,
      site_name: wp.site_name,
      pages: []
    }
  },

  methods: {
    getPages() {
      this.$http.get('pages').then(function(response) {
        this.pages = response.data;
      }, function(response) {
        console.log(response);
      });
    }
  }
}
