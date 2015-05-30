import Ember from 'ember';
import NewFieldMixin from '../../../mixins/new-field';
import { module, test } from 'qunit';

module('NewFieldMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var NewFieldObject = Ember.Object.extend(NewFieldMixin);
  var subject = NewFieldObject.create();
  assert.ok(subject);
});
