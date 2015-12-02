// Gruntfile.js
module.exports = function (grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		less: {
			build: {
				options: {
					compress: true
				},
				files: {
					'themes/franson/static/assets/css/styles.css':'src/less/app.less'
				}
			}
		},
		
		exec: {
			hugo: 'hugo -v'
		},
		
		connect: {
			server: {
				options: {
					port: 9000,
					hostname: '*',
					base: 'public',
					open: true,
					livereload: true
				}
			}
		},
		
		watch: {
			src: {
				files: ['src/less/*.less'],
				tasks: ['less', 'exec'],
				options: {
					livereload: true
				}
			},
			layouts: {
				files: ['themes/franson/layouts/**/**.*'],
				tasks: ['exec'],
				options: {
					livereload: true
				}
			},
			content: {
				files: ['content/**/**.*'],
				tasks: ['exec'],
				options: {
					livereload: true
				}
			},
			config: {
				files: ['config.toml'],
				tasks: ['exec'],
				options: {
					livereload: true
				}
			}
			
		},
		
	});
	
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-exec');
	
	grunt.registerTask('default', ['connect', 'watch']);
	
};
