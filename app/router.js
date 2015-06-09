import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {

  this.resource('users', function() {
    this.route('new');
    this.resource('user', {path: ':user_id'}, function() {
      this.route('edit');
    });
  });

  this.resource('properties', function() {
    this.route('new'),

    this.resource('property', {path: ':property_id'}, function() {
      this.route('edit'),
      this.route('show'),
      this.route('details'),

      this.resource('beacons', function() {
        this.route('new'),

        this.resource('beacon', {path: ':beacon_id'}, function() {
          this.route('edit');
        });
      });

      this.resource('highlights', function() {
        this.route('new');

        this.resource('highlight', {path: ':highlight_id'}, function() {
          this.route('edit');

          this.resource('options', function() {
            this.route('new');

            this.resource('option', {path: ':option_id'}, function() {
              this.route('edit');
            });
          });
        });
      });

    });
  });
});