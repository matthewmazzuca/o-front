import Ember from 'ember';

export default Ember.Route.extend({
	pageTitle: 'Sign In',

  actions: {
    authenticate: function(data) {
      return this.get('session').authenticate('simple-auth-authenticator:devise', data);
    }
  }
});
