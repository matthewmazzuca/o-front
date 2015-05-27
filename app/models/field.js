import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  value: DS.attr('string')
}).reopenClass({
	FIXTURES: [
		{
			id: 1,
			name: "Custom field",
			value: "Thing"
		}, {
			id: 2,
			name: "Custom field",
			value: "Thing"
		}
	]
});
