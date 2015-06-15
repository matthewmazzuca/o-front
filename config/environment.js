/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' maps.gstatic.com http://api.filepicker.io/v1/filepicker.js *.googleapis.com maps.gstatic.com",
      'connect-src': "'self' maps.gstatic.com",
      'font-src': "'self' fonts.gstatic.com",
      'img-src': "'self' *.googleapis.com maps.gstatic.com csi.gstatic.com",
      'style-src': "'self' fonts.googleapis.com maps.gstatic.com",
      'frame-src': "dialog.filepicker.io www.filepicker.io",
      'report-uri': "'self'",
      'simple-auth-devise': {
        serverTokenEndpoint: '/api/v1/users'
      },
      filepickerKey: 'AvMSkkBziQo2QzqDcSOQRz'
    },
    googleMap: {
      apiKey: 'AIzaSyAl5FYoQ87XnwquxX_uf_dzP4N5L1iN_z4'
    },
    modulePrefix: 'openhouse-front',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
