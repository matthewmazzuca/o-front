import Ember from 'ember';
import RequireRegisteredMixin from "../../mixins/require-registered";

export default Ember.Route.extend(
	RequireRegisteredMixin, {
	controllerName: 'highlight/edit',

	model: function() {
		return this.store.createRecord('highlight');
	},

	renderTemplate: function() {
		this.render('highlight.edit');
	}
});
