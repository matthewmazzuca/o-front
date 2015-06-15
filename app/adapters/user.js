import DS from 'ember-data';
import OpenHouseAPI from 'openhouse-front/mixins/adapters/open-house-api';

export default DS.ActiveModelAdapter.extend(
  OpenHouseAPI
);
