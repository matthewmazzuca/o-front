import Ember from 'ember';

export default Ember.ArrayController.extend({
	needs: ['application'],
	title: "Navigation Bar",
	property: 'controllers.application.activeProperty',

	admin_links: Ember.A([
		Ember.Object.create({
			title: "Beacons",
			route: '',
			icon: 'img/beacons-icon.png'}),
		Ember.Object.create({
			title: "Highlights",
			route: '',
			icon: 'img/microapps-icon.png'}),
		Ember.Object.create({
			title: "Users",
			route: '',
			icon: 'img/users-icon.png'})
		])
});
