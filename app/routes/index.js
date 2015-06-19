import Ember from 'ember';
var isEmpty = Ember.isEmpty;

export default Ember.Route.extend({
	beforeModel: function() {
		this.transitionTo('properties');
	}
});
