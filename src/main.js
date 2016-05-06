import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App/app.vue'
import Posts from './components/Post/posts.vue'
import Post from './components/Post/post.vue'
import Page from './components/Page/page.vue'

Vue.use(require('vue-resource'));
Vue.use(VueRouter);

Vue.config.debug = true;
Vue.config.devtools = true;

//Vue.http.options.root = wp.root + 'wp/v2';
//console.log(Vue.http.options.root);

new Vue({
  el: 'body',
  components: {
    app: App,
    'Post': Post,
    'Page': Page
  }
});

//https://www.reddit.com/r/vuejs/comments/498mij/how_do_you_handle_seo_with_vue/
var router = new VueRouter({
    hashbang: false,
    history: true
});

router.on(wp.base_path, {
    component: Posts
});

//import ConfigSvc from './services/config-service.js';
import api from './services/api.js';
api.init(Vue);
api.discover();
//api.check();

api.posts().then(function (response) {
  console.log('postList');
  console.log(response);
});


for (var key in wp.routes) {
    var route = wp.routes[key];
  //console.log(ConfigSvc.baseUrl);
  console.log(wp.base_path + route.slug);
  console.log(capitalize(route.type));
    router.on(wp.base_path + route.slug, {
        component: Vue.component(capitalize(route.type)),
        postId: route.id
    });
}

router.start(App, '#app');

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
