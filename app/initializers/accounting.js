import { number } from "accounting/settings";

export default {
  name: 'accounting.js',
  initialize: function() {
    number.decimal = ".";
  }
};