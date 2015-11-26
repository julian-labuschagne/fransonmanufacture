// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function (grunt) {
	// Configure GRUNT
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		less: {
			build: {
				options: {
					compress: true
				},
				files: {'dist/css/app.css': 'src/css/app.less'}
			}
		},
		watch: {
			files: ['src/css/*.less'],
			tasks: ['less']
		},
		concat: {
			js: {
				src: [
					'bower_components/magnific-popup/dist/jquery.magnific-popup.min.js',
					'src/js/jquery/magnificient_popups.js',
					'src/js/angular/app.js', 
					'src/js/angular/controllers/**.js', 
					'src/js/angular/filters/**.js', 
				],
				dest: 'dist/js/app.js'
			},
			css: {
				src: ['bower_components/magnific-popup/dist/magnific-popup.css', 'dist/css/app.css'],
				dest: 'dist/css/app.css'
			}
		},
		serve: {
			options: {
				port: 9000,
				'aliases': {
					'test.js': {
						tasks: ['less', 'concat'],
						output: 'index.html'
					}
				}
			}
		}

	});

	// Load Grunt Plugins
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-serve');

	// Create tasks
	grunt.registerTask('default', ['less', 'concat']);
};
