/* ============
 * Dashboard menu
 * ============
 *
 * This is the header component.
 */

import authService from './../../services/auth';
import orderService from './../../services/order';
import requestBody from './../../mixins/addOrderBody.js';

export default {

  computed: {

    username() {

    },

    avatar() {

    },

    /**
     * This computed property will determine if the admin impersonated this account.
     */
    isAdmin() {

    },
  },

  mounted() {

  },

  methods: {
    /**
     * This method will logout the user.
     */
    logout() {
      authService.logout();
    },
    addOrder() {
      orderService.addOrder(this.requestBody)
      .then(() => {
        console.log('added');
      });
      console.log(this.requestBody);
    }
  },
   mixins: [requestBody]
};
