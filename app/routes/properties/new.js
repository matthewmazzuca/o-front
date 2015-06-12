import Ember from 'ember';
import RequireRegisteredMixin from "../../mixins/require-registered";

export default Ember.Route.extend(
	RequireRegisteredMixin, {

	model: function() {
		return this.store.createRecord('property');
	}
});
