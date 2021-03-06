/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',

    '@angular':                   '@angular',
    'angular2-in-memory-web-api': 'angular2-in-memory-web-api',
    'rxjs':                       'rxjs',
    'zone.js':                    'zone.js',
    'ng2-bootstrap':              'ng2-bootstrap',
    'moment':                     'moment',
    'notifications':              'node_modules/angular2-notifications',
    'ng2-img-cropper':            'ng2-img-cropper',
    'ng2-file-upload':            'ng2-file-upload'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    'zone.js':                    { main: 'dist/index.js', defaultExtension: 'js' },
    'ng2-bootstrap':              { main: 'ng2-bootstrap.js', defaultExtension: 'js' },
    'moment':                     { main: 'moment.js', defaultExtension: 'js' },
    'notifications':              { main: 'components.js', defaultExtension: 'js' },
    'ng2-img-cropper' :           { main: 'index.js', defaultExtension: 'js' },
    'file-droppa' :               { main: 'index.js', defaultExtension: 'js' },
    'ng2-file-upload':            { main: 'ng2-file-upload.js', defaultExtension: 'js' },
    'ng2-pagination':             { main: 'index.js', defaultExtension: 'js' },
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade'
  ];

  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }

  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  // No umd for router yet
  packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };

  var config = {
    map: map,
    packages: packages
  };

  System.config(config);

})(this);
