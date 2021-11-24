import { createRouter, createWebHistory } from 'vue-router'
import {URL_CONFIG} from './common/config'
import Login from './pages/auth/Login'
import FullPage from './layouts/FullPage'
import Main from './layouts/Main'
import Home from './pages/Home'
import CreateCampaign from './pages/compaign/CreateCampaign'


const routes = [
    {
        path: '',
        component: Main,
        meta: {
            requiresAuth: true
        },
      children: [
          {
              path: '/home',
              name: 'Home',
              component: Home

          },
          {
              path: 'create-campaign',
              name: 'CreateCampaign',
              component : CreateCampaign
          }
      ]
    },
    {
        path: '',
        component: FullPage,
        children :[
            {
                path: '/login',
                name: 'Login',
                component: Login
            }
        ]

    }
]

const router = createRouter(
    {
        history: createWebHistory(URL_CONFIG.BASE_PATH),
        // base: 'configure-admin', <-- this does not work in vue 3
        routes: routes,
        linkActiveClass: 'active'
    }
)
export default router
