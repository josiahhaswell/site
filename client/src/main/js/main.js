require.config({
    baseUrl: 'js',
    urlArgs: "bust=" +  (new Date()).getTime(),
    paths: {
        jquery: 'lib/jquery/jquery',
        angular: 'lib/angular/angular',
        bootstrap: 'lib/bootstrap/bootstrap'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    }
})
require([
    'jquery',
    'bootstrap',
    'angular'
], function() {

});