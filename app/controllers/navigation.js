import Ember from 'ember';

export default Ember.ArrayController.extend({
	needs: ['application'],
	title: "Navigation Bar",

	model: Ember.A([
		Ember.Object.create({title: "Edit Profile", route: ""}),
		Ember.Object.create({title: "Account Settings", route: ""}),
		Ember.Object.create({title: "Properties", route: 'properties.index'}),
		Ember.Object.create({title: "Beacons", route: 'properties.new'}),
		Ember.Object.create({title: "Microapps", route: 'properties.new'}),
		Ember.Object.create({title: "Users", route: 'properties.new'})
	])
});
