import {createApp} from "vue";
import router from './routes.js'
import store from './store/store.js'
import Toaster from '@meforma/vue-toaster';

import App from './App.vue'

const app = createApp(App);
app.use(Toaster);
app.use(store);
app.use(router);

import ButtonLoader from "./components/ButtonLoader.vue";
import Sidebar from "./components/sidebar.vue";
app.component('ButtonLoader', ButtonLoader);
app.component('SideBar', Sidebar);

router.beforeEach(function (to, from, next) {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
        if (userInfo != null && userInfo.id != undefined && userInfo.id != null && parseInt(userInfo.id) > 0) {
            next()
            return
        }
        next('/login')
    } else {
        next()
    }
});

app.mount('#app')
