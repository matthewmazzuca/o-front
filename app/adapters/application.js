import DS from 'ember-data';
import OpenhouseAPI from 'openhouse-front/mixins/adapters/open-house-api';

export default DS.ActiveModelAdapter.extend({
	host: 'http://localhost:3000',
  namespace: 'api/v1',
  ancestorTypes: null,

  //  buildURL: function(type, id, record) {
  //   var ancestor, ancestorID, ancestorType, ancestorTypes, ancestry, i, len, url, urlFixed, urlPrefix, urlWithoutPrefix;
  //   url = this._super(type, id, record);
  //   ancestorTypes = this.get('ancestorTypes');
  //   if (ancestorTypes === null) {
  //     urlFixed = url;
  //   } else {
  //     urlPrefix = this.urlPrefix();
  //     urlWithoutPrefix = url.slice(urlPrefix.length);
  //     ancestry = [];
  //     ancestorTypes;
  //     if (!Array.isArray(ancestorTypes)) {
  //       ancestorTypes = [ancestorTypes];
  //     }
  //     for (i = 0, len = ancestorTypes.length; i < len; i++) {
  //       ancestorType = ancestorTypes[i];
  //       ancestor = record.get(ancestorType);
  //       ancestorID = ancestor.get('id');
  //       ancestry.push(ancestorType);
  //       ancestry.push(ancestorID);
  //     }
  //     urlFixed = urlPrefix + '/' + ancestry.join('/') + urlWithoutPrefix;
  //   }
  //   console.log(urlFixed);
  //   return urlFixed;
  // }

});
