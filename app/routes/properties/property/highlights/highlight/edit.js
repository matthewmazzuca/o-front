import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function(model, controller) {
		this._super(model, controller);

		var name = model.get('name');
		controller.set('pageTitle', name);
	}
});
