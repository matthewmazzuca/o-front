import Ember from 'ember';
import RequireRegisteredMixin from "../../mixins/require-registered";

export default Ember.Route.extend(
	RequireRegisteredMixin, {
	controllerName: 'property/edit',

	model: function() {
		return this.store.createRecord('property');
	},

	renderTemplate: function() {
		this.render('property.edit');
	}
});
