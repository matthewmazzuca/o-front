import Ember from 'ember';

export default Ember.Route.extend({
	pageTitle: 'Sign In',

  actions: {
    authenticate: function(data) {
      let _this = this;
      let session = this.get('session');

      // todo: keep an eye on https://github.com/simplabs/ember-simple-auth/issues/580
      //   - if they end up supporting sideloading, handle as suggested
      //   - else pay close attention to updates, so this remains in sync
      session.authenticate('simple-auth-authenticator:devise', data).
        then(function() {

        let sessionSecure = session.get('content.secure');
        let user = sessionSecure.user;

        // create user record in the store
        _this.store.push('user', user);

        // replace session's user object with only the id, for later fetching
        delete sessionSecure['user'];
        let newContent = {
          secure: sessionSecure,
          userId: user.id
        }

        session.set('content', newContent);
        session.get('store').persist(newContent); // not running automatically
      });
    }
  }
});
