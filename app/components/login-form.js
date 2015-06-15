import Ember from 'ember';

export default Ember.Component.extend({
  // public api
  authenticate: null,
  identification: '',
  password: '',

  actions: {
    // n.b. split so it will be easier to hook to a cancel/clear button
    resetParams: function() {
      this.set('identification', '');
      this.set('password', '');
    },

    authenticate: function() {
      var loginParams = this.getProperties('identification, password');
      this.sendAction('authenticate', loginParams);

      this.send('resetParams');
    }
  }
});
