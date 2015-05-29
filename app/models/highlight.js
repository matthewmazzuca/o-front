import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  sub_heading: DS.attr('string'),
}).reopenClass({
	FIXTURES: [
		{
			id: 1,
			name: "Fireplace",
			sub_heading: "Checkout the different kinds of stone!"
		}, {
			id: 2,
			name: "Flooring",
			sub_heading: "Two kinds of wood offerings available!"
		}
	]
});
