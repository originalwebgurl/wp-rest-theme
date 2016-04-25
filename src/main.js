import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(require('vue-resource'));
Vue.use(VueRouter);

import App from './components/App/app.vue'

Vue.config.debug = true;

import Posts from './components/Post/posts.vue'
import Post from './components/Post/post.vue'
Vue.component('Post', Post);
import Page from './components/Page/page.vue'
Vue.component('Page', Page);
import Header from './components/Header/theme-header.vue'
Vue.component('theme-header', Header);
import Footer from './components/Footer/theme-footer.vue'
Vue.component('theme-footer', Footer);

new Vue({
  el: 'body',
  components: {
    app: App
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

for (var key in wp.routes) {
    var route = wp.routes[key];
    router.on(wp.base_path + route.slug, {
        component: Vue.component(capitalize(route.type)),
        postId: route.id
    });
}

router.start(App, '#app');

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
