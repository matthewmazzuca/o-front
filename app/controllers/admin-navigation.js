import Ember from 'ember';

export default Ember.ArrayController.extend({

	model: Ember.A([
		Ember.Object.create({
			title: "Beacons",
			route: 'properties.new',
			icon: 'img/beacons-icon.png'}),
		Ember.Object.create({
			title: "Microapps",
			route: 'properties.new',
			icon: 'img/microapps-icon.png'}),
		Ember.Object.create({
			title: "Users",
			route: 'properties.new',
			icon: 'img/users-icon.png'})
		])
});
