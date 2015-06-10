import Ember from 'ember';

export default Ember.Mixin.create({
	isEditing: false,

	edit: function() {
		this.set('isEditing', true);
		console.log("Test");
	},

	finishEdit: function() {
		this.set('isEditing', false);
	}
});
