import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  service_id: DS.attr('string'),
  micro_apps: DS.hasMany('micro_app', {async:true})

}).reopenClass({
	FIXTURES: [
		{
			id: 1,
			service_id: "#AK87IJU6",
			name: "Living Room",
			micro_apps: [1,2]
		}, {
			id: 2,
			service_id: "#AK871JA9",
			name: "Basement",
			micro_apps: [1,2]
		}, {
			id: 3,
			service_id: "#AK977B2P",
			name: "Kitchen",
			micro_apps: [1,2]
		}
	]
});
