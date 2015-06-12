import Ember from 'ember';
import FlashableMixin from "../../mixins/flashable";

export default Ember.Controller.extend(
	FlashableMixin, {

	needs: ['application'], 

	actions: {
		newOption: function() {
      var name = this.get('newOptionName');
      if (!name) { return false; }

      var model = this.get('model');
      var self = this;
      model.get('options').addObject(this.store.createRecord('option', {
        name: name
      })).then(function() {
        self.set('newOptionName', '');
      });
    },
		save: function() {
			var model = this.get('model');
			var self = this;
			model.save().then(function() {
				self.flash({
          message: "Highlight saved",
          type: 'alert-success',
        });
			}, function() {
				alert('save error');
				self.flash({
					message: "Sorry, there was an error saving your highlight",
					type: "alert-error"
				});
			});
		}
	}
});
