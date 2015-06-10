//Mix me in to controllers to access currentUser
//TODO - I will probably be deprecated for computed aliases

import Ember from 'ember';

export default Ember.Mixin.create({
  currentUser: function() {
    return this.controllerFor('application').get('currentUser');
  }.property(),

  registeredUser: function() {
    var user = this.currentUser;
    return true;
    //if (!user) { return false; }

    //if (user.get('registered') === true) {
    //  return true;
    //} else {
    //  return false;
    //}
  },

  isAdmin: function() {
    console.log('checking');
    var user = this.registeredUser;
    if (!user) return false;
    console.log('still');
  }.property()
});