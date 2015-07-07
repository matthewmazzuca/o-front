import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(
  ApplicationRouteMixin, {

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
