import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		newField: function() {
      var name = this.get('newFieldName');

      var model = this.get('model');
      var self = this;
      model.get('options').addObject(this.store.createRecord('option', {
        name: name
      })).then(function() {
        self.set('newFieldName', '');
      });
    },
		save: function() {
			var model = this.get('model');
			var self = this;
			model.save().then(function() {
				self.transitionToRoute('properties.index');
			}, function() {
				alert('save error');
			});
		}
	}
});
