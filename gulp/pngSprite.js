'use strict';

var gulp = require('gulp'),
    config	= require('./config'),
    spritesmith  = require('gulp.spritesmith');

gulp.task('pngSprite', function() {
    var spriteData =
        gulp.src(config.pathTo.src.pngSprite)
            .pipe(spritesmith({
                imgName: 'png-sprite.png',
                cssName: 'png-sprite.scss',
            }));

    spriteData.img.pipe(gulp.dest(config.pathTo.dist.pngSprite));
    spriteData.css.pipe(gulp.dest(config.pathTo.src.pngStyles));
});