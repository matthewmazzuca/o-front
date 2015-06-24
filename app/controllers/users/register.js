import Ember from "ember";
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(
  EmberValidations.Mixin, {

  pageTitle: "Register",

  name: null,
  email: null,
  password: null,
  passwordConfirmation: null,

  validations: {
    email:    { presence: true },
    password: { presence: true,
                confirmation: true },
    passwordConfirmation: {presence: true}
  },

  resetProperties: function() {
    var model = this.get('model');
    model.setProperties({
      password: '',
      passwordConfirmation: ''
    });
  },

  actions: {
    save: function() {
      var self = this;
      var model = this.store.createRecord('user');;

      model.save().then(function() {
        self.resetProperties();
        self.set('session.isAuthenticated', true);

        self.flash({
          message: "Account Registered",
          type: 'alert-success'
        });
        self.transitionToRoute('properties.index');
      }, function() {
        self.flash({
          message: "Error registering account",
          type: 'alert-error'
        });
      });
    }
  }
});