import Ember from 'ember';
import NewFieldMixin from "../../mixins/new-field";


export default Ember.Controller.extend(
  NewFieldMixin, {

  needs: ["application"],

  actions: {
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
