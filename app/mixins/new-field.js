import Ember from 'ember';

export default Ember.Mixin.create({
	 actions: {
    newField: function() {
      var name = this.get('newFieldName');
      var value = this.get('newFieldValue');
      if (!name || !value) { return false; };

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
  }
});
