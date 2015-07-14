import Ember from 'ember';

export default Ember.Mixin.create({
  host: 'http://45.55.74.11:3000/api/v1',
  namespace: 'api/v1',
  buildURL: function(type, id, record) {
    return this._super(type, id, record) + this.get('suffix');
  }
});
