import Ember from 'ember';

export default Ember.View.extend({
	tagName: 'a',
  attributeBindings: ['href'],
  
  href: function() {
  	if (this.get('controller').get('model.phone')) {
    	return "tel:" + this.get('controller').get('model.phone').replace(/[^\d]/g, '');
    }
  }.property('controller.model.phone')
});

