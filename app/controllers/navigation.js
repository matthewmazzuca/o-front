import Ember from 'ember';

export default Ember.ArrayController.extend({
	title: "Navigation Bar",

	model: Ember.A([
		Ember.Object.create({title: "Properties", route: 'properties.index'}),
		Ember.Object.create({title: "New Property", route: 'properties.new'})
	])
});
