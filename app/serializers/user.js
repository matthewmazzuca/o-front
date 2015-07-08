import Ember from 'ember';
import DS from 'ember-data';


export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
	
	simpleAuth: Ember.inject.service(),

	normalizePayload: function(payload) {
		let session = this.get('simpleAuth.session');
		let userJSON = payload.user;

		let sessionData = {
			secure: {
				token: userJSON.authentication_token,
				email: userJSON.email
			},

			userId: userJSON.id
		};

		session.setProperties({
			isAuthenticated: true,
			content: sessionData
		});

		session.get('store').persist(sessionData); // not running automatically

		delete userJSON['authentication_token'];

		return payload;
	}


});
