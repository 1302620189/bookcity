export default { //install()封装插件，第一个参数是vue构造器
    install(Vue, options) {
        Vue.component('myHeader', () =>
            import ('@/components/my-header')); //运行时加载
        Vue.component('Search', () =>
            import ('@/components/search'));
        Vue.component('myList', () =>
            import ('@/components/my-list.vue')); //运行时加载


    }
}