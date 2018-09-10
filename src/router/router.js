import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from '../components/theme/Category'
import Login from '../components/theme/Login'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'is-active',
    scrollBehavior: (to, from, savedPosition) => ({ y: 0}),
    routes: [
        {path: '/login', component: Login},
        {path: '/category/:id', component: Category},
        {path: '/', redirect: '/category/front-end'}
        ]
});
export default router