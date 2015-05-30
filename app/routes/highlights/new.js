import Ember from 'ember';

export default Ember.Route.extend({
	controllerName: 'highlight/edit',

	model: function() {
		return this.store.createRecord('highlight');
	},

	renderTemplate: function() {
		this.render('highlight.edit');
	}
});
