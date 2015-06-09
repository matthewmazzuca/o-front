import Ember from 'ember';
import RequireRegisteredMixin from '../../../mixins/require-registered';
import { module, test } from 'qunit';

module('Unit | Mixin | require registered');

// Replace this with your real tests.
test('it works', function(assert) {
  var RequireRegisteredObject = Ember.Object.extend(RequireRegisteredMixin);
  var subject = RequireRegisteredObject.create();
  assert.ok(subject);
});
