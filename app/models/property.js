import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  description: DS.attr('string'),

  lat: DS.attr('number'),
  lng: DS.attr('number'),

  fields: DS.hasMany('field', {async: true, embedded: 'always'}),
  
}).reopenClass({
	FIXTURES: [
	{
		id: 1,
		name: "Gleb's Property",
		address: "63 Rollscourt Drive",
		description: "Dwelling",
		lat: 1,
		lng: 1,
		fields: [1]
	}, {
		id: 2,
		name: "Joey's property",
		address: "52 Fifeshire Road",
		description: "Dwelling",
		lat: -100,
		lng: 100,
		fields: [2]
	}]
});
