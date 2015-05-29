import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  sub_heading: DS.attr('string'),

  options: DS.hasMany('option', {async: true})

}).reopenClass({
	FIXTURES: [
		{
			id: 1,
			name: "Fireplace",
			sub_heading: "Checkout the different kinds of fireplaces!",
			options: [1,2]
		}, {
			id: 2,
			name: "Flooring",
			sub_heading: "Two kinds of offerings available!",
			options: [3,4]
		}
	]
});
