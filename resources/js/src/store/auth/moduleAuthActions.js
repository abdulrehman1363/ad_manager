/*=========================================================================================
  File Name: moduleAuthActions.js
  Description: Auth Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import jwt from '../../http/requests/auth/sanctum/index.js'


import router from '../../routes.js'


export default {
  updateUsername ({ commit }, payload) {
    payload.user.updateProfile({
      displayName: payload.displayName
    }).then(() => {

      // If username update is success
      // update in localstorage
      const newUserData = Object.assign({}, payload.user.providerData[0])
      newUserData.displayName = payload.displayName
      commit('UPDATE_USER_INFO', newUserData, {root: true})

      // If reload is required to get fresh data after update
      // Reload current page
      if (payload.isReloadRequired) {
        router.push(router.currentRoute.query.to || '/')
      }
    }).catch((err) => {
      payload.notify({
        time: 8800,
        title: 'Error',
        text: err.message,
        iconPack: 'feather',
        icon: 'icon-alert-circle',
        color: 'danger'
      })
    })
  },


  // JWT
  loginJWT ({ commit }, payload) {

      //alert(payload.email);

    return new Promise((resolve, reject) => {
      jwt.login(payload.email, payload.password)
        .then(response => {
          // If there's user data in response
            //console.log(JSON.stringify(response, null, 2));
          if (response.data && response.data.id && response.data.email && response.data.email == payload.email) {
            // Navigate User to homepage
            //router.push(router.currentRoute.query.to || '/home')
              router.push('/home')

            // Set accessToken
            localStorage.setItem('accessToken', null);//response.data.accessToken -- No Token against Sanctum

            // Update user details
            commit('UPDATE_USER_INFO', response.data, {root: true})

            // Set bearer token in axios
            commit('SET_BEARER', null);//response.data.accessToken -- No Token against Sanctum

            resolve(response)
          } else {
            reject({message: 'Wrong Email or Password'})
          }

        })
        .catch(error => { reject(error) })
    })
  },
  logoutJWT ({ commit }, payload) {

    return new Promise((resolve, reject) => {
      jwt.logout()
        .then(response => {
          // If there's 200/Success status in response
          if (response.status == 200 || response.status == 204) {
            // If JWT login
            if (localStorage.getItem('accessToken')) {
              localStorage.removeItem('accessToken')
              router.push('/login').catch(() => {})
            }


            localStorage.removeItem('userInfo')

            // This is just for demo Purpose. If user clicks on logout -> redirect
            router.push('/login').catch(() => {})

            resolve(response)
          } else {
            reject({message: 'User could not be Logged Out'})
          }

        })
        .catch(error => { reject(error) })
    })
  },
  registerUserJWT ({ commit }, payload) {

    const { displayName, email, password, confirmPassword } = payload.userDetails

    return new Promise((resolve, reject) => {

      // Check confirm password
      if (password !== confirmPassword) {
        reject({message: 'Password doesn\'t match. Please try again.'})
      }

      jwt.registerUser(displayName, email, password)
        .then(response => {
          // Redirect User
          router.push(router.currentRoute.query.to || '/')

          // Update data in localStorage
          localStorage.setItem('accessToken', response.data.accessToken)
          commit('UPDATE_USER_INFO', response.data.userData, {root: true})

          resolve(response)
        })
        .catch(error => { reject(error) })
    })
  },
  fetchCSRFToken () {
    return new Promise((resolve) => {
      jwt.requestCSRF().then(response => { resolve(response) })
    })
  },
  fetchAccessToken () {
    return new Promise((resolve) => {
      jwt.refreshToken().then(response => { resolve(response) })
    })
  }
}
