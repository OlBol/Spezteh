'use strict';

var gulp = require('gulp'),
	config	= require('./config'),
    bs = require('browser-sync');

gulp.task('server', function () {
    bs.init({
        port: 7777,
        // tunnel: false,
        server: './dist'
    });
});