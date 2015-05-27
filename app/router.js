import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('properties', function() {
    this.route('new');
    this.resource('property', {path: ':property_id'}, function() {
      this.route('edit');
      this.resource('beacons', function() {
        this.route('new');
        this.resource('beacon', {path: ':beacon_id'}, function() {
          this.route('edit');
        });
      });
    });
  });
});