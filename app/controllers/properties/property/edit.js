import Ember from 'ember';
import NewFieldMixin from "openhouse-front/mixins/new-field";
import FlashableMixin from "openhouse-front/mixins/flashable";
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(
  NewFieldMixin,
  FlashableMixin,
  EmberValidations.Mixin, {

  needs: ["application"],

  pageTitle: 'Edit Property',

  address: null,
  postal_code: null,
  location: null,
  price: null,
  description: null,

  validations: {
    address: { presence: true },
    postal_code: { presence: true },
    location: { presence: true },
    price: { presence: true },
    description: { presence: true }
  },

  actions: {
    save: function() {
      var model = this.get('model');
      var self = this;
      var fields = this.get('fields');

      model.save().then(function(model) {
        model.get('fields').then(function(fields) {
          fields.forEach(function(field){
            field.save();
          })
        });
        
        self.flash({
          message: "Property Saved",
          type: 'alert-success'
        });
        self.transitionToRoute('properties.property.index', model.id);
      }, function() {
        alert('save error');
        self.flash({
          message: "Error saving property",
          type: 'alert-failure'
        });
      });
    },

    addHighlight: function() {
      var self = this;
      var model = this.get('model');
      var highlight = this.store.createRecord('highlight');

      model.get('highlights').addObject(highlight).then(function() {
        self.transitionTo('properties.property.highlights.highlight.edit', highlight);  
      })
    }
  },
});
