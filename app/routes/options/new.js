import Ember from 'ember';

export default Ember.Route.extend({
	controllerName: 'option/edit',

	model: function() {
		return this.store.createRecord('option');
	},

	renderTempalte: function() {
		this.render('option.edit');
	}
});
