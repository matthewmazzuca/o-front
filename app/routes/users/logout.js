import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(
  AuthenticatedRouteMixin, {

  activate: function() {
    this.session.invalidate().then(function(){
    	this.transitionTo('properties.index');
    });
  }
});