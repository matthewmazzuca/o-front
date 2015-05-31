import Ember from 'ember';

export default Ember.ArrayController.extend({
	needs: ['application', 'admin-navigation'],
	title: "Navigation Bar",

	model: Ember.A([
		Ember.Object.create({
			title: "Edit Profile", 
			route: "",
			icon: 'img/profile-icon.png'}),
		Ember.Object.create({
			title: "Account Settings", 
			route: "",
			icon: 'img/settings-icon.png'}),
		Ember.Object.create({
			title: "Properties", 
			route: 'properties.index',
			icon: 'img/properties-icon.png'}),
	])
});
