import Ember from 'ember';

export default Ember.ObjectController.extend({
	needs: ['application'],

	actions: {
		save: function() {
			var property = this.get('model');
			property.save();
			this.transitionToRoute('properties.edit', property);
		}
	}
});
