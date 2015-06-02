import Ember from 'ember';

export default Ember.View.extend({
	//clicking overlay toggles nav
	templateName: 'partials/content-overlay',
	click: function(e) {
		this.get('controller').send('toggleNav');
	}
});
