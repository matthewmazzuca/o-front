import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['application'],

	actions: {
    newField: function() {
      var name = this.get('newFieldName');
      var value = this.get('newFieldValue');
      if (!name || !value) { return false; }

      var model = this.get('model');
      var self = this;
      model.get('fields').addObject(this.store.createRecord('field', {
        name: name,
        value: value
      })).then(function() {
        self.set('newFieldName', '');
        self.set('newFieldValue', '');
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
  },
});
