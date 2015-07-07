import Ember from 'ember';

export default Ember.Route.extend({
	pageTitle: 'Sign In',

  actions: {
    authenticate: function(data) {
      let _this = this;
      let session = this.get('session');

      session.authenticate('simple-auth-authenticator:devise', data).
        then(function() {

        let sessionData = session.get('content.secure');
        let user = sessionData.user;

        // create user record in the store
        _this.store.push('user', user);

        // replace session's user object with only the id, for later fetching
        delete sessionData['user'];
        sessionData.userId = user.id;
      });
    }
  }
});
