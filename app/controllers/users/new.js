import Ember from "ember";
import FlashableMixin from "../../mixins/flashable";
import EmberValidations from 'ember-validations';

export default Ember.ObjectController.extend(
  EmberValidations.Mixin,
  FlashableMixin, {

  pageTitle: "Register",

  //stub fields we want
  name: null,
  email: null,
  password: null,
  passwordConfirmation: null,

  validations: {
    name:     { presence: true },
    email:    { presence: true },
    password: { presence: true,
                confirmation: true },
    passwordConfirmation: {presence: true}
  },

  actions: {
    save: function() {
      var self = this;
      var data = this.getProperties('name', 'email', 'password');
      var store = this.get('store');
      console.log('ready to create', data);
      var user = store.createRecord('user', data);

      user.save().then(function() {
        self.flash({
          message: "Welcome to openhouse",
          type: "alert-success"
        });
        self.transitionTo('properties.index');
      }, function() {
        self.flash({
          message: "Error creating account",
          type: "alert-success"
        });
      });
    }
  }
});