import Vue from 'vue'
import App from './App'
import router from './router'
import plugins from './plugins' //插件
// import myHeader from './components/my-header' //静态加载
import axios from 'axios'
import 'swiper/dist/css/swiper.min.css'


Vue.config.productionTip = false
Vue.prototype.$http = axios; // vue-resource

Vue.use(plugins, {})



// Vue.component('my-Header', my - Header);
/* eslint-disable no-new */

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})