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

      model.get('options').addObject(option).then(function(option) {
      	console.log(option);
      	option.save();
        self.set('newOptionName', '');
      });
    },

		save: function() {
			var model = this.get('model');
			var name = this.get('name');
      var options = this.get('options');
      var sub_heading = this.get('sub_heading');
			var self = this;
			model.save().then(function(highlight) {
				self.flash({
          message: "Highlight Saved",
          type: 'alert-success'
        });
				console.log(highlight.id)
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
