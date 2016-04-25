export default {
  ready() {
    this.getPosts();
  },

  data() {
    return {
      posts: []
    }
  },

  methods: {
    getPosts() {
      this.$http.get(wp.root + 'wp/v2/posts').then(function(response) {
        this.posts = response.data;
        this.$dispatch('page-title', '');
      }, function(response) {
        console.log(response);
      });
    }
  }
}
