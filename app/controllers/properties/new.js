import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['application'],

	actions: {
		save: function() {
			var property = this.get('model');
			property.save();
			this.transitionToRoute('property.edit', property);
		}
	}
});
