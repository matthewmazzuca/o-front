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

  validations: {
    address: { presence: true },
    price: { presence: true },
    description: { presence: true },

  },

  actions: {
    // newField: function() {
    //   var name = this.get('newFieldName');
    //   var value = this.get('newFieldValue');
    //   if (!name || !value) { return false; }

    //   var model = this.get('model');
    //   var self = this;
    //   model.get('fields').addObject(this.store.createRecord('field', {
    //     name: name,
    //     value: value
    //   })).then(function() {
    //     self.set('newFieldName', '');
    //     self.set('newFieldValue', '');
    //   });
    // },

    save: function() {
      var self = this;
      var property = this.get('model');
      var address = this.get('address');
      var price = this.get('price');
      var description = this.get('description');
      var fields = this.get('fields');
      property.setProperties({address: address, price: price, description: description })

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
