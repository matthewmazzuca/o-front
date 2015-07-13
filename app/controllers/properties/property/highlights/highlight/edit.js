import Ember from 'ember';
import FlashableMixin from "openhouse-front/mixins/flashable";

export default Ember.Controller.extend(
	FlashableMixin, {

	needs: ['application'], 

	actions: {
		newOption: function() {
      var name = this.get('newOptionName');
      if (!name) { return false; }

      var model = this.get('model');
      var self = this;
      var option = this.store.createRecord('option', {
      	name: name
      });

      model.get('options').addObject(option).then(function() {
      	option.save().then(function(option) {
      		self.set('newOptionName', '');
      		self.transitionToRoute('properties.property.highlights.highlight.options.option.edit', option);
      	});
      });
    },

		save: function() {
			var model = this.get('model');
			var self = this;

			model.save().then(function() {
				self.flash({
          message: "Highlight Saved",
          type: 'alert-success'
        });
			});
			}, function() {
				alert('save error');
				self.flash({
					message: "Sorry, there was an error saving your highlight",
					type: "alert-error"
				});
		}
	}
});
