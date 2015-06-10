import Ember from 'ember';
import FlashableMixin from "../../mixins/flashable";
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(
	FlashableMixin,
  EmberValidations.Mixin, {

	pageTitle: 'Edit Profile',

  actions: {
    save: function() {
      var self = this;
      
      this.get('model').save().then(function() {
        self.flash({
          message: "Profile Updated",
          type: 'alert-success'
        });
      }, function() {
        self.flash({
          message: "Error updating profile",
          type: 'alert-error'
        });
      });
    }
  }
});

