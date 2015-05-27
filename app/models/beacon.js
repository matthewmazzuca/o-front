import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  service_id: DS.attr('string')
  // features: DS.hasMany('features')
}).reopenClass({
	FIXTURES: [
	{
		id: 1,
		service_id: "#AK87IJU6",
		name: "Living Room"
	}, {
		id: 2,
		service_id: "#AK871JA9",
		name: "Basement",
	}, {
		id: 3,
		service_id: "#AK977B2P",
		name: "Kitchen"
	}
	]
});
