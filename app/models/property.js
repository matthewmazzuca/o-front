import DS from 'ember-data';

export default DS.Model.extend({
  address: DS.attr('string'),
  price: DS.attr('number'),
  agent: DS.attr('string'),
  phone: DS.attr('string'),
  website: DS.attr('string'),
  description: DS.attr('string'),
  location: DS.attr('string'),
  image_url: DS.attr('string'),

  lat: DS.attr('number'),
  lng: DS.attr('number'),

  fields: DS.hasMany('field', {async: true, embedded: 'always'}),
  highlights: DS.hasMany('highlight', {async: true, embedded: 'always'}),

  styleString: function() {
  	var imgURL = 'img/property-profile-1.jpg';

  	var overlayStr = 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2))';
  	var urlStr = 'url(' + imgURL + ')';

  	var style = [overlayStr, urlStr].join(',');
  	return 'background: ' + style + ';';
  }.property('photoURL'),

  calculatedDistance: function() {
  	return '500m';
  }.property('lat', 'lng'),

  style: function() {
  	return [ "background-image:url('",
             'img/property-profile-1.jpg',
             "')"].join('');
  }.property('image_url'),
  
}).reopenClass({
	FIXTURES: [
		{
			id: 1,
			address: "63 Rollscourt Drive",
			price: "600000",
			agent: "Gleb",
			location: "Toronto, Canada",
			phone: "(647) 271 4747",
			website: "www.google.com",
			description: "Dwelling",
			lat: 1,
			lng: 1,
			fields: [1],
			beacons: [1],
			highlights: [1],
			image_url: 'img/property-profile-1.jpg'
		}, {
			id: 2,
			address: "52 Fifeshire Road",
			price: "600000",
			agent: "Joey",
			location: "Toronto, Canada",
			phone: "(647) 696 9696",
			website: "www.yahoo.com",
			description: "Dwelling",
			lat: -100,
			lng: 100,
			fields: [2],
			beacons: [1,2],
			highlights: [2],
			image_url: 'img/property-profile-1.jpg'
		}
	]
});
