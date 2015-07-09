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
      model.save().then(function() {
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
    }
  },
});
