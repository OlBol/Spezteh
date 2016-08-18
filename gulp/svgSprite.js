'use strict';

var gulp = require('gulp'),
    config	= require('./config'),
    plumber	= require('gulp-plumber'),
    rename	= require('gulp-rename'),
    server	= require('browser-sync'),
    svgStore = require('gulp-svgstore');

gulp.task('svgSprite', function(){
            gulp.src(config.pathTo.src.svgSprite)
            .pipe(plumber())
            .pipe(svgStore())
            .pipe(rename('svg-sprite.svg'))
            .pipe(gulp.dest(config.pathTo.dist.svgSprite))
            .pipe(server.reload({stream:true}));
});