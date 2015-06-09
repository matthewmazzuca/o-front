import Ember from 'ember';

export default Ember.ArrayController.extend({
	needs: ['application'],
	title: "Navigation Bar",
	property: 'controllers.application.activeProperty',

	nav_links: Ember.A([
		Ember.Object.create({
			title: "Edit Profile", 
			route: "user.edit",
			icon: 'img/profile-icon.png'}),
		Ember.Object.create({
			title: "Account Settings", 
			route: "",
			icon: 'img/settings-icon.png'}),
		Ember.Object.create({
			title: "Properties", 
			route: 'properties.index',
			icon: 'img/properties-icon.png'}),
	]),

	admin_links: Ember.A([
		Ember.Object.create({
			title: "Beacons",
			route: 'beacons.index',
			icon: 'img/beacons-icon.png'}),
		Ember.Object.create({
			title: "Highlights",
			route: 'highlights.index',
			icon: 'img/microapps-icon.png'}),
		Ember.Object.create({
			title: "Users",
			route: '',
			icon: 'img/users-icon.png'})
		])
});
