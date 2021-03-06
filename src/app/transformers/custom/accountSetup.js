/* ============
 * Register account setup Transformer
 * ============
 *
 * The transformer for the account setup.
 */

import Transformer from './../transformer';

export default class AccountSetupTransformer extends Transformer {
  /**
   * Method used to transform a fetched account setup.
   *
   * @param accountSetup The fetched account setup.
   *
   * @returns {Object} The transformed accountSetup
   */
  static fetch(accountSetup) {
    return {
      first_name: accountSetup.firstName,
      last_name: accountSetup.lastName,
      phone: accountSetup.phone,
      country: accountSetup.country,
      password: accountSetup.password,
      passwordConfirm: accountSetup.password_confirm,
    };
  }

  /**
   * Method used to transform a send accountSetup
   *
   * @param accountSetup The accountSetup to be send
   *
   * @returns {Object} The transformed accountSetup
   */
  static send(accountSetup) {
    return {
      first_name: accountSetup.firstName,
      last_name: accountSetup.lastName,
      email: accountSetup.email,
      password: accountSetup.password,
      password_confirmation: accountSetup.passwordConfirmation,
    };
  }
}
