// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html
module.exports = function karmaConfig (config) {
  config.set({
    frameworks: [ 'mocha', 'chai', 'sinon'],
    reporters: ['mocha', 'coverage', 'threshold'],
    files: [
      // Grab all files in the app folder that contain .spec.
      'tests.bundle.js'
    ],
    preprocessors: {
      'tests.bundle.js' : ['webpack']
    },

    browsers: ['Chrome'],

    singleRun: true,

    plugins: [
      require('karma-webpack'),
      require('karma-chai'),
      require('karma-sinon'),
      require('karma-mocha'),
      require('karma-coverage'),
      require('karma-threshold-reporter'),
      require('karma-chrome-launcher'),
      require('karma-mocha-reporter')
    ],
    // Configure code coverage reporter
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        {type: 'html', subdir: 'html'},
        {type: 'text', subdir: '.'},
        {type: 'lcovonly', subdir: '.'},
        {type: 'json', subdir: '.'},
        {type: 'cobertura', subdir: '.'}
      ],
      check: {
        global: {
          statements: 40,
          branches: 30,
          functions: 40,
          lines: 40
        }
      },
      watermarks: {
        statements: [ 80, 90 ],
        functions: [ 80, 90 ],
        branches: [ 80, 90 ],
        lines: [ 80, 90 ]
      }
    },

    webpack: {},

    // Hide webpack build information from output
    webpackMiddleware: {
      noInfo: 'errors-only'
    }
  });
};
