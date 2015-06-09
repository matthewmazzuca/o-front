import Ember from 'ember';
import RequireRegisteredMixin from "../../mixins/require-registered";

export default Ember.Route.extend( 
	RequireRegisteredMixin,{
	setupController: function(model, controller) {
		this._super(model, controller);

		var name = model.get('name');
		controller.set('pageTitle', name);
	}
});
