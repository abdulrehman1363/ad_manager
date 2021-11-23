import axios from '../../../axios/index.js'
//import store from '../../../../store/store.js'
import {URL_CONFIG, APP_ENDPOINTS, API_ENDPOINTS} from '../../../../common/config'

// Token Refresh
let isAlreadyFetchingAccessToken = false
let subscribers = []

function onAccessTokenFetched (access_token) {
  subscribers = subscribers.filter(callback => callback(access_token))
}

function addSubscriber (callback) {
  subscribers.push(callback)
}

export default {
  init () {
    /*axios.interceptors.response.use(function (response) {
      return response
    }, function (error) {
      // const { config, response: { status } } = error
      const { config, response } = error
      const originalRequest = config

      // if (status === 401) {
      if (response && response.status === 401) {
        if (!isAlreadyFetchingAccessToken) {
          isAlreadyFetchingAccessToken = true
          store.dispatch('auth/fetchAccessToken')
            .then((access_token) => {
              isAlreadyFetchingAccessToken = false
              onAccessTokenFetched(access_token)
            })
        }

        const retryOriginalRequest = new Promise((resolve) => {
          addSubscriber(access_token => {
            originalRequest.headers.Authorization = `Bearer ${access_token}`
            resolve(axios(originalRequest))
          })
        })
        return retryOriginalRequest
      }
      return Promise.reject(error)
    })*/
  },
  login (email, pwd) {
    return axios.post(URL_CONFIG.APP_URL + APP_ENDPOINTS.LoginUser, {
      email,
      password: pwd
    }).then(response => {

      if (response.status == 200 || response.status == 204 || response.status == 302) {
        return axios.get(URL_CONFIG.API_URL + API_ENDPOINTS.GetUser);
      } else {
        return {message: 'Wrong Email or Password'};
      }
    })
    .catch(error => { throw error });
  },
  logout () {
    return axios.post(URL_CONFIG.APP_URL + APP_ENDPOINTS.LogoutUser);
  },
  requestCSRF: function(){
      return axios.get(URL_CONFIG.APP_URL + APP_ENDPOINTS.SanctumCSRFCookie);
  },
  registerUser (name, email, pwd) {
    return axios.post('/api/auth/register', {
      displayName: name,
      email,
      password: pwd
    })
  },
  refreshToken () {
    return axios.post('/api/auth/refresh-token', {accessToken: localStorage.getItem('accessToKen')})
  }
}