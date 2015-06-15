import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {

  this.route('users', function() {
    this.route('new');
    this.route('login');

    this.route('user', {path: ':user_id'}, function() {
      this.route('edit');
    });
  });

  this.route('properties', function() {
    this.route('new');

    this.route('property', {path: ':property_id'}, function() {
      this.route('edit');
      this.route('details');

      this.route('beacons', function() {
        this.route('new');

        this.route('beacon', {path: ':beacon_id'}, function() {
          this.route('edit');
        });
      });

      this.route('highlights', function() {
        this.route('new');

        this.route('highlight', {path: ':highlight_id'}, function() {
          this.route('edit');

          this.route('options', function() {
            this.route('new');

            this.route('option', {path: ':option_id'}, function() {
              this.route('edit');
            });
          });
        });
      });

    });
  });
});
