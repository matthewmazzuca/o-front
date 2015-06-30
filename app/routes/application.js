import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(
  ApplicationRouteMixin, {
  // currentDevice: Ember.computed('session.deviceUUID', function() {
  //   return this.store.find('user-device', this.get('session.deviceUUID'));
  // }),

  currentUser: Ember.computed('session.userID', function() {
    var userID = this.get('session.userID');
    if (userID) {
      return this.store.find('user', userID);
    } else if (this.get('session.deviceUUID')) {
      this.get('currentDevice').then(function() {
        userID = this.get('session.userID');
        return userID ? this.store.find('user', userID) : null;
      }, function() {
        return null;
      });
    } else {
      return null;
    }
    console.log(currentUser);
  }),

  actions: {
    error: function(error) {
      console.log("Unexpected error: Check Console");
      console.log(error);

      var message = error.status + " " + error.statusText;
      App.errorMessage = message;
      App.errorUrl = window.location.href;

      return true;
    },

    sessionInvalidationSucceeded: function() {
      this.transitionTo('index');
    },

    sessionAuthenticationSucceeded: function() {
      this.transitionTo('index');
    }
  }
});