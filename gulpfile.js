var gulp = require('gulp'),
	browserSync = require('browser-sync');
	server = require('gulp-live-server')


 gulp.task('serve',function(){
	browserSync.init({
		notify: false,
		port: 8080,
		server: {
			baseDir: ['app'],
			routes: {
				'/bower_components': 'bower_components'
			}
		}
	})

	gulp.watch(['app/**/*.*'])
		.on('change',browserSync.reload)

});


// Test
gulp.task('test',['api-server'], function(){

	browserSync.init({
		notify: false,
		port: 8081,
		server: {
			baseDir: ['test', 'app'],
			routes: {
				'/bower_components': 'bower_components',
				'/node_modules': 'node_modules'
			}
		}
	})

	gulp.watch(['test/**/*.*', 'app/**/*.*'])
		.on('change',browserSync.reload)

});

gulp.task('api-server',function(){
	var live = new server('server.js');
	live.start();

});

gulp.task('default', ['serve']);