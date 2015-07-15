import DS from 'ember-data';

export default DS.Model.extend({
  image_url: DS.attr('string'),
  property: DS.belongsTo('property', { async: true }),

  style: function() {
    return [ "background-image:url('",
             this.get("image_url"),
             "')"].join('');
  }.property('image_url'),

});
