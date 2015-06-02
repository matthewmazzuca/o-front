import Ember from 'ember';

export default Ember.View.extend({
	needs: ['application'],

	tagName: 'navigation',
	templateName: 'nav/navigation',

	//When an item is clicked, contract nav
	click: function(e) {
		var self = this;
		var tag = e.target.tagName;

		if (tag === "A") {
			var controller = self.get('controller.controllers.application');
			controller.send('toggleNav');
		}
	}
});
