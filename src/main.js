import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App/app.vue'

Vue.use(require('vue-resource'));
Vue.use(VueRouter);

Vue.config.debug = true;
Vue.config.devtools = true;
Vue.http.options.root = wp.root + 'wp/v2';

var vm = new Vue({
  el: 'body',
  components: { App }
});

//https://www.reddit.com/r/vuejs/comments/498mij/how_do_you_handle_seo_with_vue/
var router = new VueRouter({
    hashbang: false,
    history: true
});

router.map({
  '/': {
    component: require('./components/Post/posts.vue')
  }
});

router.start(App, '#app');
