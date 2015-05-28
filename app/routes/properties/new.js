import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.createRecord('property');
	},

	renderTemplate: function() {
		this.render('property.edit', {
			controller: 'properties/new'
		});
	}
});
