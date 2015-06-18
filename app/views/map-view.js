import Ember from 'ember';

export default Ember.View.extend({
	needs: ['application'],
	templateName: 'partials/map-view',

	//When an item is clicked, contract nav
	markersArray: function() {
		 return Ember.A([
      {title: "Home", lat: model.lat, lng: model.lng, body: "Here is B&H's home"}
    ]);
	}
});
