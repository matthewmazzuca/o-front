import DS from 'ember-data';
import OpenhouseAPI from 'openhouse-front/mixins/adapters/open-house-api';

export default DS.ActiveModelAdapter.extend(
  OpenhouseAPI
);
