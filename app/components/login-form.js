import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';
import EmberValidations from 'ember-validations';

export default Ember.Component.extend(
  LoginControllerMixin, 
  EmberValidations.Mixin, {
  // public api
  pageTitle: 'Sign In',

  validations: {
    identification:    { presence: true },
    password: { presence: true }
  },

  // public api
  authenticate: null,
  identification: '',
  password: '',

  actions: {
    // n.b. split so it will be easier to hook to a cancel/clear button
    resetParams: function() {
      this.set('identification', '');
      this.set('password', '');
    },

    authenticate: function() {
      var loginParams = this.getProperties('identification', 'password');
      this.sendAction('authenticate', loginParams);
      this.send('resetParams');
    }
  }
});
