import Vue from 'vue'
import Router from 'vue-router'

const BookCity = () =>
    import ('@/views/bookcity');
const BookShelf = () =>
    import ('@/views/bookshelf');
const Search = () =>
    import ('@/views/search');
const Detail = () =>
    import ('@/views/detail');
const Read = () =>
    import ('@/views/read');
const Login = () =>
    import ('@/views/login');

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/bookcity' //重定向
        },
        {
            path: '/bookcity',
            name: 'bookcity',
            component: BookCity
        },
        {
            path: '/bookshelf',
            name: 'bookshelf',
            component: BookShelf
        }, {
            path: '/search',
            name: 'search',
            component: Search
        }, {
            path: '/detail/:id',
            name: 'detail',
            component: Detail
        }, {
            path: '/read',
            name: 'read',
            component: Read,
            beforeEnter(to, from, next) {
                if (window.localStorage.getItem('userId')) { //已经登录
                    next();
                } else {
                    next('/login');
                }
            }
        }

    ]
})