import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.findAll('user').then(function(u) {
			return u.content[0];
		})
	}
});
