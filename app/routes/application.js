import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(
  ApplicationRouteMixin, {

  simpleAuth: Ember.inject.service(),

  //TODO use a better pattern when simple auth offers services
  activate: function() {
    this.set('simpleAuth.session', this.get('session'));
  },

  actions: {
    error: function(error) {
      console.log("Unexpected error: Check Console");
      console.log(error);

      var message = error.status + " " + error.statusText;
      Ember.Application.errorMessage = message;
      Ember.Application.errorUrl = window.location.href;

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
