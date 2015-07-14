import Ember from 'ember';
import FlashableMixin from "openhouse-front/mixins/flashable";

export default Ember.Controller.extend(
	FlashableMixin, {
		
	needs: ['application'],

	actions: {
		save: function() {
			var model = this.get('model');
			var self = this;
			model.save().then(function() {
				self.flash({
					message: "Option saved",
					type: 'alert-success'
				});
			});
			
		}, function() {
			alert('save error');
			self.flash({
				message: "Sorry, there was an error saving your option",
				type: 'alert-error'
			});
		}
	}
});
