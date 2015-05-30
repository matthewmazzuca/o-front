import Ember from 'ember';
import EditableFieldMixin from '../../../mixins/editable-field';
import { module, test } from 'qunit';

module('EditableFieldMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var EditableFieldObject = Ember.Object.extend(EditableFieldMixin);
  var subject = EditableFieldObject.create();
  assert.ok(subject);
});
