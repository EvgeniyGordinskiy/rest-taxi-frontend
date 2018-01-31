import Vue from 'vue';
import store from './../../store';

/**
 * When the request succeeds
 */
const success = (token, resolve) => {
    store.dispatch('login', token);
    Vue.router.push({
        name: 'user',
    });
};

/**
 * When the request fails
 */
const failed = (error, reject) => {
  // if (typeof error.response.data.error !== 'undefined') {
  //   return reject({ error: ['Invalid credentials'] });
  // }
  return reject(error);
};

export default user => (
  new Promise((resolve, reject) => {
      Vue.$http.post('/auth/apiv1/authenticate', user)
             .then((response) => {
               success(response.data.items.token);
             })
             .catch((error) => {
               failed(error, reject);
             });
  })
);
