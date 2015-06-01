import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['application'], 

	pageTitle: ['Highlights'],

	actions: {
		newOption: function() {
      var name = this.get('newOptionName');

      var model = this.get('model');
      var self = this;
      model.get('options').addObject(this.store.createRecord('option', {
        name: name
      })).then(function() {
        self.set('newOptionName', '');
      });
    },
		save: function() {
			var model = this.get('model');
			var self = this;
			model.save().then(function() {
				self.transitionToRoute('property.show');
			}, function() {
				alert('save error');
			});
		}
	}
});
