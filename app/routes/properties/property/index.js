import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    didTransition: function() {
      var appController = this.get('controller').
                          get('controllers.application');
      appController.set('activeProperty', this.get('model'));
    }
  }
});
