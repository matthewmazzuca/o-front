import Ember from 'ember';
import FlashableMixin from "openhouse-front/mixins/flashable";
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(
  FlashableMixin,
  EmberValidations.Mixin, {

  needs: ["application"],
  pageTitle: 'New Highlight',

  validations: {
  },

  actions: {

    save: function() {
      var self = this;
      var highlight = this.store.createRecord('highlight');
      var name = this.get('name');
      var options = this.get('options');
      var sub_heading = this.get('sub_heading');

      var property = highlight.get('property')
      var propertyID = highlight.get('property.id')
      console.log(propertyI)
      console.log(property)

      highlight.setProperties({name: name, sub_heading: sub_heading })

      property.
      highlight.save().then(function(highlight) {
        highlight.get('options').then(function(options){
          options.forEach(function(option){
            option.save();
          });
        });

        self.flash({
          message: "Welcome to openhouse",
          type: "alert-success"
        });

      }, function() {
        self.flash({
          message: "Error creating account",
          type: "alert-success"
        });
      });
    }
  },
});
