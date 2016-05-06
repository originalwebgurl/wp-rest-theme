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
      this.$http.get('posts').then(function(response) {
        this.posts = response.data;
        this.$dispatch('page-title', '');
      }, function(response) {
        console.log(response);
      });
    }
  }
}
