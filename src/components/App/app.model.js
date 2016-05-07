import Header from '../../components/Header/theme-header.vue'
import Footer from '../../components/Footer/theme-footer.vue'

export default {

  ready() {
    this.updateTitle('');
  },

  components: {
    'wg-header': Header,
    'wg-footer': Footer
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
