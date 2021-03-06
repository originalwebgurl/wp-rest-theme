export default {
  ready() {
    this.getPage();
  },

  data() {
    return {
      page: {
        id: 0,
        slug: '',
        title: { rendered: '' },
        content: { rendered: '' }
      }
    }
  },

  methods: {
    getPage() {
      this.$http.get('pages/' + this.$route.postId).then(function(response) {
        this.page = response.data;
        this.$dispatch('page-title', this.page.title.rendered);
      }, function(response) {
        console.log(response);
      });
    }
  },

  route: {
    canReuse() {
      return false;
    }
  }
}
