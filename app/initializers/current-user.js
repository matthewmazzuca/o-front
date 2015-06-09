import Ember from 'ember';

export default {
  name: 'current-user',
  after: 'store',
  initialize: function(container, application) {
    var store, user, device;

    store = container.lookup('store:main');
    if (window.device) {
      device = window.device.uuid;
    } else {
      device = "stubbed";
    }

    user = store.createRecord('user', {
      'device_uuid': device
    });

    user.save().then(function(currentUser) {
      var appCon = container.lookup('controller:application');
      appCon.set('currentUser', currentUser);
    }, function(error) {
      Ember.Logger.error("Failed to auth", error.stack);
    });
  }
};