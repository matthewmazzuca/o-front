/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'openhouse-front',
    filepickerKey: 'AvMSkkBziQo2QzqDcSOQRz',
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' maps.gstatic.com maps.googleapis.com ",
      'connect-src': "'self' https://www.filepicker.io/ ",
      'img-src': "'self'  ",
      'style-src': "'self' 'unsafe-inline'  ",
      'frame-src': " ",
      'report-uri': "'self'",
    },
    'simple-auth': {
      authorizer: 'simple-auth-authorizer:devise',
      crossOriginWhitelist: ['*']
    },
    'simple-auth-devise': {
      serverTokenEndpoint: 'http://localhost:3000/api/v1/users/sign_in',
    },
    environment: environment,
    baseURL: '/',
    defaultLocationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    cordova: {
      rebuildOnChange: false,
      emulate: false
    }
  };

  // ENV['simple-auth']['crossOriginWhitelist'] = ['http://localhost:3000'];
  // ENV['simple-auth-devise']['serverTokenEndpoint'] = "//localhost:3000/users/sign_in"

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
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
