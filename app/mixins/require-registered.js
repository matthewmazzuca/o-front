import Ember from 'ember';

export default Ember.Mixin.create({

  activate: function() {
    if (this.registeredUser() === false) {
      this.transitionTo('users.new');
    }
  }
});