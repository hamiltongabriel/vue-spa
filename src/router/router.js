import Vue from 'vue'
import VueRouter from 'vue-router'
// import Category from '../components/theme/Category'
// import Login from '../components/theme/Login'
// import NotFound from '../components/theme/NotFound'
const Category = () => System.import('../components/theme/Category');
const Login = () => System.import('../components/theme/Login');
const NotFound = () => System.import('../components/theme/NotFound');

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'is-active',
    scrollBehavior: (to, from, savedPosition) => ({ y: 0}),
    routes: [
        {path: '/login', component: Login},
        {path: '/category/:id', name: 'category', component: Category},
        {path: '/', redirect: '/category/front-end'},
        {path: '*', component: NotFound}
        ]
});
export default router