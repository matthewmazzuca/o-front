import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  sub_heading: DS.attr('string'),
  image_url: DS.attr('string'),
  options: DS.hasMany('option', {async: true}),

  style: function() {
  	console.log('looking for style');
    return [ "background-image:url('",
             this.get("image_url"),
             "')"].join('');
  }.property('image_url'),


}).reopenClass({
	FIXTURES: [
		{
			id: 1,
			name: "Fireplace",
			sub_heading: "Checkout the different kinds of fireplaces!",
			image_url: 'img/highlight-1.jpg',
			options: [1,2]
		}, {
			id: 2,
			name: "Flooring",
			sub_heading: "Two kinds of offerings available!",
			image_url: 'img/highlight-2.jpg',
			options: [3,4]
		}
	]
});
