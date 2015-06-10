import Ember from 'ember';
import CurrentUserMixin from "./current-user";

export default Ember.Mixin.create(
  CurrentUserMixin, {

  activate: function() {
    if (this.registeredUser() === false) {
      this.transitionTo('users.new');
    }
  }
});