import Ember from 'ember';
import Session from 'simple-auth/session';
import SimpleAuthLocalStorageStore from 'simple-auth/stores/local-storage';

export default {
  name: 'user-session',
  before: 'simple-auth',

  initialize: function(container) {
    Session.reopen({

      store: SimpleAuthLocalStorageStore,

      currentUser: Ember.computed('content.userId', function() {
        var id = this.get('content.userId');

        if (!Ember.isEmpty(id)) {
          return container.lookup('store:main').find('user', id);
        }
      })
    });
  }
};
