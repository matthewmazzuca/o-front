import Ember from 'ember';
import Session from 'simple-auth/session';

export default {
  name: 'user-session',
  before: 'simple-auth',

  initialize: function(container) {
    Session.reopen({

      currentUser: Ember.computed('secure.userId', function() {
        var id = this.get('secure.userId');
        if (!Ember.isEmpty(id)) {
          return container.lookup('store:main').find('user', id);
        }
      })
    });
  }
};
