import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		toggleNav: function() {
			this.controller.toggleProperty('navVisible');
		}
	}
});
