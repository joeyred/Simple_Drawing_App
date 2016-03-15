var gulp     	= require('gulp');
var	browserSync = require('browser-sync').create();

gulp.task( 'server', function() {
  browserSync.init({
    server: './', port: 8000
  });
});

gulp.task( 'watch', function() {
	gulp.watch('css/*.css', function() {
		gulp.src('css/*.css')
		.pipe(browserSync.stream());
	});
	gulp.watch('js/*.js').on('change', browserSync.reload);
	gulp.watch('*.html').on('change', browserSync.reload);

});

gulp.task( 'default', function() {
	gulp.start( 'watch', ['server'] );
});