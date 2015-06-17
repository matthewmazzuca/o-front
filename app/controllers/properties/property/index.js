import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['application'],

	
	isShowingModal: false,
  actions: {
    toggleModal: function(){
      this.toggleProperty('isShowingModal');
    }
  }
});
