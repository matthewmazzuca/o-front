import Ember from 'ember';
import FlashableMixin from '../../../mixins/flashable';
import { module, test } from 'qunit';

module('FlashableMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var FlashableObject = Ember.Object.extend(FlashableMixin);
  var subject = FlashableObject.create();
  assert.ok(subject);
});
