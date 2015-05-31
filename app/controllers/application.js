import Ember from 'ember';

export default Ember.Controller.extend({
	navVisible: false,

	propertyAddress: "63 Rollscourt Drive",
	propertyLocation: "Toronto, Canada",

	actions: {
		toggleNav: function() {
			console.log('toggle');
			this.toggleProperty('navVisible');
		}
	}
});
