import Ember from 'ember';
import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend({
	extract: function(store, typeClass, payload, id, requestType) {
		console.log('hello extract', store, typeClass, payload, id, requestType);
	}
});