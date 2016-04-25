import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(require('vue-resource'));
Vue.use(VueRouter);

import App from './app.vue'

Vue.config.debug = true;

import Posts from './posts.vue'
import Post from './post.vue'
Vue.component('Post', Post);
import Page from './page.vue'
Vue.component('Page', Page);
import Header from './theme-header.vue'
Vue.component('theme-header', Header);
import Footer from './theme-footer.vue'
Vue.component('theme-footer', Footer);

new Vue({
  el: 'body',
  components: {
    app: App
  }
});

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
