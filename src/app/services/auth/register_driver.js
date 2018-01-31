import Vue from 'vue';
import accountTransformer from './../../transformers/custom/accountSetup';
import store from './../../store';

const success = (resolve) => {
  Vue.router.push({
    name: '/login',
  });
  resolve();
};

const failed = (errors, reject) => {
  reject(accountTransformer.fetch(errors.items));
};

export default driver => (
  new Promise((resolve, reject) => {
    Vue.$http
      .post('/auth/apiv1/registerDriver', driver)
      .then((response) => {
        success(resolve);
      })
      .catch((error) => {
        failed(error.response.data, reject);
      });
  })
);
