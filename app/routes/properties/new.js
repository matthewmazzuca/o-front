import Ember from 'ember';

export default Ember.Route.extend({
	controllerName: 'property/edit',

	model: function() {
		return this.store.createRecord('property');
	},

	renderTemplate: function() {
		this.render('property.edit');
	}
});
