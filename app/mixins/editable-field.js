import Ember from 'ember';

export default Ember.Mixin.create({
	isEditing: false,

	edit: function() {
		this.set('isEditing', true);
	},

	finishEdit: function() {
		this.set('isEditing', false);
	}
});
