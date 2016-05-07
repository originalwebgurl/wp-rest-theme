import Post from '../../components/Post/post.vue'

export default {
  ready() {
    this.getPosts({
      'per_page': this.per_page
    });
  },

  components: {
    'wg-post': Post
  },

  data() {
    return {
      posts: [],
      per_page: 3
    }
  },

  methods: {

    getPosts( data ) {
      this.$http.get('posts', data).then(function (response) {
        console.log(response);
        this.posts = response.data;
      }, function(response) {
        console.warn(response);
      });
    }
  }
}
