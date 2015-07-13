import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function(controller, model) {
		this._super(controller, model);

		var name = model.get('name');
		if (name) {controller.set('pageTitle', name) };
	} 
});