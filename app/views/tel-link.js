import Ember from 'ember';

export default Ember.View.extend({
	tagName: 'a',
  attributeBindings: ['href'],
  href: function() {
    return "tel:" + this.get('controller').get('model.phone').replace(/[^\d]/g, '');
  }.property('controller.model.phone')
});

