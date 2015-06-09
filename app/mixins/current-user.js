import Ember from 'ember';

export default Ember.Mixin.create({
  currentUser: function() {
    return this.controllerFor('application').get('currentUser');
  }.property(),

  registeredUser: function() {
    var user = this.currentUser;
    if (!user) { return false; }

    if (user.get('registered') === true) {
      return true;
    } else {
      return false;
    }
  },
});