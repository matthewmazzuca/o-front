import Ember from 'ember';

export default Ember.Controller.extend({
	navVisible: false,
	activeProperty: null,

  //TODO - I should be deleted when Aidan can set me
  init: function() {
    var store = this.get('store');
    var active = store.find('property', 1);
    this.set('activeProperty', active);
  },

  propertyAddress: function() {
    if (!this.activeProperty) { return; }

    return this.activeProperty.get('address');
  }.property(),

  propertyLocation: function() {
    if (!this.activeProperty) { return; }

    return this.activeProperty.get('location');
  }.property(),

	actions: {
		toggleNav: function() {
			this.toggleProperty('navVisible');
		},

		back: function() {
			window.history.back();
		}
	}
});
