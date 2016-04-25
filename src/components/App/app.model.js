export default {

  ready() {
    this.updateTitle('');
  },

  methods: {
    updateTitle(pageTitle) {
      document.title = (pageTitle ? pageTitle + ' - ' : '') + wp.site_name;
    }
  },

  events: {
    'page-title': function(pageTitle) {
      this.updateTitle(pageTitle);
    }
  }
}
