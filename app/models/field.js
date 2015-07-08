import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  value: DS.attr('string'),

  property: DS.belongsTo('property', { async: true })
  
});
// .reopenClass({
// 	FIXTURES: [
// 		{
// 			id: 1,
// 			name: "4 Bedrooms",
// 			value: "2 Bath"
// 		}, {
// 			id: 2,
// 			name: "Field 2 Name",
// 			value: "Field 2 Value"
// 		}
// 	]
// });
