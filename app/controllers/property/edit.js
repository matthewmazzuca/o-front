import Ember from 'ember';
import NewFieldMixin from "../../mixins/new-field";
import FlashableMixin from "../../mixins/flashable";
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(
  NewFieldMixin,
  FlashableMixin,
  EmberValidations.Mixin, {

  needs: ["application"],

  address: null,
  price: null,
  description: null,

  validations: {
    address: { presence: true },
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
        self.transitionToRoute('property.show', model.id);
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
