export default {
  props: {
    post: {
      type: Object,
      default() {
        return {
          id: 0,
          slug: '',
          title: { rendered: '' },
          content: { rendered: '' }
        }
      }
    }
  },

  ready() {
    // If post hasn't been passed by prop
    if (!this.post.id) {
      this.getPost();
      this.isSingle = true;
    }
  },

  data() {
    return {
      base_path: wp.base_path,
      isSingle: false
    }
  },

  methods: {
    getPost() {
      this.$http.get('posts/' + this.$route.postId).then(function(response) {
        this.post = response.data;
        this.$dispatch('page-title', this.post.title.rendered);
      }, function(response) {
        console.log(response);
      });
    }
  }
}
