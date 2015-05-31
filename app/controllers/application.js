import Ember from 'ember';

export default Ember.Controller.extend({
	navVisible: false,

	propertyAddress: "63 Rollscourt Drive",
	propertyLocation: "Toronto, Canada",

	actions: {
		toggleNav: function() {
			this.toggleProperty('navVisible');
		},

		back: function() {
			window.history.back();
		}
	}
});
