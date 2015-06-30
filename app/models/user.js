import DS from 'ember-data';

var User = DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  phone: DS.attr('string'),
  email: DS.attr('string'),
  brokerage: DS.attr('string'),
  website: DS.attr('string'),
  device_uuid: DS.attr('string'),
  registered: DS.attr('boolean'),

  properties: DS.hasMany('property', { async: true }),

  //TODO -rm once rails /proper auth
  password: DS.attr('string'),
  old_password: DS.attr('string'),
  properties: DS.hasMany('property', { async: true, embedded: 'always'}),

  name: function() {
  	return this.get('first_name') + " " + this.get('last_name');
  }.property()
});


// User.reopenClass({
// 	FIXTURES: [
// 	{
// 		id: 1,
// 		first_name: "Gleb",
// 		last_name: "Nazarkin",
// 		brokerage: "Homelife Victory",
// 		phone: "647 271 4747",
// 		email: "gleb@addolabs.co",
// 		registered: true,
// 	}, {
// 		id: 2,
// 		first_name: "Joey",
// 		last_name: "Gollish",
// 		brokerage: "Joey Co",
// 		phone: "647 111 2223",
// 		email: "joey@addolabs.co",
// 		registered: true,
// 	}
// 	]
// });

export default User;
