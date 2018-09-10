import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from '../components/theme/Category'
import Login from '../components/theme/Login'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/login', component: Login},
        {path: '/', component: Category}
        ]
});
export default router