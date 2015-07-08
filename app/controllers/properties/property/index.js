import Ember from 'ember';
// import accounting from "ember-cli-accounting/accounting";

export default Ember.Controller.extend( {

	needs: ['application'],

	
	isShowingModal: false,
  actions: {
    toggleModal: function(){
      this.toggleProperty('isShowingModal');
    }
  }
});
