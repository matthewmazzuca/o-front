import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		save: function() {
			model = this.get('model');
			self = this;
			model.save().thenTransitionToRoute('highlight.edit', highlight.id);
		}, function() {
			alert('save error')
		}
	}
});
