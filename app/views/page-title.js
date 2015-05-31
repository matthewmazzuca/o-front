import Ember from 'ember';

export default Ember.View.extend({
	needs: ['application'],
	templateName: 'page-title',

	actions: {
		back: function() {
			var controller = this.get('controller.controllers.application');
			controller.send('back');
		}
	}
});
