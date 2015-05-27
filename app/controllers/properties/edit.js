import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['application'],

	actions: {
		save: function() {
			var model = this.get('model');
			var self = this;
			model.save().then(function() {
				self.transitionToRoute('properties.index');
			}, function() {
				alert('save error');
			});
		}
	}
});
