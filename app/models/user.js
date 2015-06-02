import DS from 'ember-data';

var User = DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  phone: DS.attr('string'),
  email: DS.attr('sring'),
  brokerage: DS.attr('string'),

  name: function() {
  	return this.get('first_name') + " " + this.get('last_name');
  }.property()
});

User.reopenClass({
	FIXTURES: [
	{
		id: 1,
		first_name: "Gleb",
		last_name: "Nazarkin",
		brokerage: "Homelife Victory",
		phone: "647 271 4747",
		email: "gleb@addolabs.co"
	}, {
		id: 1,
		first_name: "Joey",
		last_name: "Gollish",
		brokerage: "Joey Co",
		phone: "647 111 2223",
		email: "joey@addolabs.co"
	}
	]
});

export default User;