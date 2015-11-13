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
		serve: {
			options: {
				port: 9000,
				'aliases': {
					'test.js': {
						tasks: ['less'],
						output: 'index.html'
					}
				}
			}
		}

	});

	// Load Grunt Plugins
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-serve');

	// Create tasks
	grunt.registerTask('default', ['less']);
};
