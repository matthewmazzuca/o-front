import Ember from 'ember';

export default Ember.Mixin.create({
		flashMessage: null,

	  flash: function(message) {
	    this.set('flashMessage', message);
	    console.log('flash success')
	  },
	  closeFlash: function() {
	    this.set('flashMessage', null);
	    console.log('flash failure')
	  },
});
