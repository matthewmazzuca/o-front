import Ember from 'ember';

export default Ember.ArrayController.extend({
	needs: ['application'],
	
	pageTitle: 'Properties',

	agentProperty: Ember.computed.equal('property.user.id', 'user.id')
});
