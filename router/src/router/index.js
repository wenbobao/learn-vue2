import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import one from '@/components/one';
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    components: {
      default: HelloWorld,
      a: one
    }
  }]
})
