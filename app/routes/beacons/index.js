import Ember from 'ember';
import RequireRegisteredMixin from "../../mixins/require-registered";

export default Ember.Route.extend(
	RequireRegisteredMixin,{
	model: function(params) {
		//TODO - find by property id
		var propID = this.modelFor('property').get('id');
		return this.store.find('beacon');
	}
});
