import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs:{
  	fields: { embedded: 'always' },
    user: { embedded: 'always' },
    highlights: { embedded: 'always' }
  }
});
