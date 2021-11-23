import {createApp} from "vue";
import router from './routes.js'
import store from './store/store.js'

import App from './App.vue'

const app = createApp(App);
app.use(store);
app.use(router);

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
