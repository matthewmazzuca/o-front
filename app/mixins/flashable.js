import Ember from 'ember';

export default Ember.Mixin.create({
		flashMessage: null,

	  flash: function(message) {
	    this.set('flashMessage', message);
	  },
	  closeFlash: function() {
	    this.set('flashMessage', null);
	  },
});
