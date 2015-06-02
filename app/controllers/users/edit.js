import Ember from 'ember';
import FlashableMixin from "../../mixins/flashable";

export default Ember.Controller.extend(
	FlashableMixin, {

	pageTitle: 'Edit Profile',

  actions: {
    save: function() {
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

