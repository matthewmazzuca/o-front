import Ember from 'ember';
import FlashableMixin from "../../mixins/flashable";

export default Ember.Controller.extend(
	FlashableMixin, {
		
	needs: ['applicaiton']
});
