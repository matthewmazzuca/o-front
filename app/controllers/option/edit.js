import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		save: function() {
			model = this.get('model');
			self = this;
			model.save().then(function() {
				self.flash({
					message: "Option saved",
					type: 'alert-success'
				});
			});
			self.transitionToRoute('highlight.edit', highlight.id);
		}, function() {
			alert('save error');
			self.flash({
				message: "Sorry, there was an error saving your option",
				type: 'alert-error'
			})
		}
	}
});
