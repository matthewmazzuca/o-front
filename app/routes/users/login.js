import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    authenticate: function(loginParams) {
      return this.get('session').
        authenticate('simple-auth-authenticator:devise', loginParams);
    }
  }
});
