import Ember from 'ember';
import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend({
  attrs:{
    user: { embedded: 'always' }
  }
});