import Ember from 'ember';
import NewFieldMixin from "../../mixins/new-field";
import FlashableMixin from "../../mixins/flashable";
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(
  FlashableMixin,
  EmberValidations.Mixin,
  NewFieldMixin, {

  needs: ["application"],
  pageTitle: 'New Property',
  viewingOptions: ['Openhouse', 'Private Showing'],

  validations: {
    address: { presence: true },
    price: { presence: true },
    description: { presence: true },
  },

  actions: {

    save: function() {
      var self = this;
      var property = this.get('model');
      var address = this.get('address');
      var price = this.get('price');
      var location = this.get('location');
      var description = this.get('description');
      var postal_code = this.get('postal_code');
      property.setProperties({address: address, price: price, description: description, postal_code: postal_code, location: location});

      property.save().then(function(property) {
        
        property.get('fields').then(function(fields){
          fields.forEach(function(field){
            field.save();
          });
        });

        self.flash({
          message: "Welcome to openhouse",
          type: "alert-success"
        });

        self.transitionTo('properties.property.index', property.id);
      }, function() {
        self.flash({
          message: "Error creating account",
          type: "alert-success"
        });
      });
    }
  },
});
