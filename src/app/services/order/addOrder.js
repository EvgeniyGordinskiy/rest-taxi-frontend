import Vue from 'vue';
import store from './../../store';

/**
 * When the request succeeds
 */
const success = (order, resolve) => {
   console.log(order);
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

export default order => (
  new Promise((resolve, reject) => {
      Vue.$http.post('/order/add', order)
             .then((response) => {
               success(response.data.items.order);
             })
             .catch((error) => {
               failed(error, reject);
             });
  })
);
