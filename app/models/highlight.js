import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  sub_heading: DS.attr('string'),
  img_url: DS.attr('string'),

  options: DS.hasMany('option', {async: true})

}).reopenClass({
	FIXTURES: [
		{
			id: 1,
			name: "Fireplace",
			sub_heading: "Checkout the different kinds of fireplaces!",
			img_url: 'highlight-1.jpg',
			options: [1,2]
		}, {
			id: 2,
			name: "Flooring",
			sub_heading: "Two kinds of offerings available!",
			img_url: 'highlight-2.jpg',
			options: [3,4]
		}
	]
});
