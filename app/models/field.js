import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  value: DS.attr('string')
}).reopenClass({
	FIXTURES: [
		{
			id: 1,
			name: "Field 1 Name",
			value: "FIeld 1 Value"
		}, {
			id: 2,
			name: "Field 2 Name",
			value: "Field 2 Value"
		}
	]
});
