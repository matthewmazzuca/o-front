import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		//TODO - find by property id
		var propID = this.modelFor('property').get('id');
		return this.store.find('beacon');
	}
});
