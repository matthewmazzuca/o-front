import Ember from 'ember';
import RequireRegisteredMixin from "openhouse-front/mixins/require-registered";

export default Ember.Route.extend(
	RequireRegisteredMixin, {

	model: function() {
		return this.store.createRecord('highlight');
	}
});
