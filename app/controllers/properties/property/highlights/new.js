import Ember from 'ember';
import FlashableMixin from "openhouse-front/mixins/flashable";
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(
  FlashableMixin,
  EmberValidations.Mixin, {

  needs: ["application"],
  pageTitle: 'New Property',

  validations: {
  },

  actions: {

    save: function() {
      var self = this;
      var highlight = this.get('model');
      var name = this.get('name');
      var options = this.get('options');
      var sub_heading = this.get('sub_heading');

      highlight.setProperties({name: name, sub_heading: sub_heading })

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
