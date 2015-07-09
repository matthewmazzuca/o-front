import Ember from "ember";
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(
  EmberValidations.Mixin, {

  needs: ['application'],
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

  actions: {
    save: function() {
      var self = this;
      var model = this.store.createRecord('user');
      model.setProperties({email: this.get('email'), password: this.get('password')})

      model.save().then(function() {
        model.setProperties({
          password: '',
          passwordConfirmation: ''
        });

        // self.flash({
        //   message: "Account Registered",
        //   type: 'alert-success'
        // });
        self.transitionToRoute('properties.index');
      }, function() {
        // self.flash({
        //   message: "Error registering account",
        //   type: 'alert-error'
        // });
      });
    }
  }
});