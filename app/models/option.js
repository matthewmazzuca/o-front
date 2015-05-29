import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  image_url: DS.attr('string'),

}).reopenClass({
	FIXTURES: [
		{
			id: 1,
			name: "Rectangular Fireplace",
			image_url: "fireplace-1.jpg" 
		}, {
			id: 2,
			name: "Open Fireplace",
			image_url: "fireplace-2.jpg"
		}, {
			id: 3,
			name: "Wooden Floors",
			image_url: "floors-1.jpg",
		}, {
			id: 4,
			name: "Granite Floors",
			image_url: "floors-2.jpg"
		}
	]
});
