import DS from 'ember-data';

var UserDevice = DS.Model.extend({
  uuid: DS.attr('string'),
  user: DS.belongsTo('user', {async: true})
});

export default UserDevice;