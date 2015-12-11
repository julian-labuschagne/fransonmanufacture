// Gruntfile.js
module.exports = function (grunt) {

	grunt.initConfig({
		//
		// Change this to the hugo theme name you are using
		//
		hugo_theme: 'franson',

		pkg: grunt.file.readJSON('package.json'),

		less: {
			build: {
				options: {
					compress: true
				},
				files: {
					'themes/<%= hugo_theme %>/static/assets/css/styles.css':'src/less/app.less'
				}
			}
		},

		concat: {
			js: {
				src: [
					'bower_components/jquery/dist/jquery.min.js',
					'bower_components/bootstrap/dist/js/bootstrap.min.js',
					'bower_components/magnific-popup/dist/jquery.magnific-popup.min.js',
					'src/js/jquery/magnificient_popups.js'
				],
				dest: 'themes/<%= hugo_theme %>/static/assets/js/app.js'
			},
			css: {
				src: [
					'themes/<%= hugo_theme %>/static/assets/css/styles.css',
					'bower_components/magnific-popup/dist/magnific-popup.css'
				],
				dest: 'themes/<%= hugo_theme %>/static/assets/css/styles.css'
			}
		},

		exec: {
			hugo: 'hugo -v  --preserveTaxonomyNames'
		},

		clean: {
			public: {
				src: ["public/*"]
			}
		},

		connect: {
			server: {
				options: {
					port: 9000,
					hostname: '*',
					base: 'public',
					livereload: true
				}
			}
		},

		watch: {
			less: {
				files: ['src/less/*.less'],
				tasks: ['less', 'exec'],
				options: {
					livereload: true
				}
			},
			js: {
				files: ['src/js/**/**.js'],
				tasks: ['concat', 'exec'],
				options: {
					livereload: true
				}
			},
			layouts: {
				files: ['themes/<%= hugo_theme %>/layouts/**/**.*'],
				tasks: ['exec'],
				options: {
					livereload: true
				}
			},
			images: {
				files: ['themes/<%= hugo_theme %>/static/assets/images/**/**.*'],
				tasks: ['exec'],
				options: {
					livereload: true
				}
			},
			content: {
				files: ['content/**/**.*'],
				tasks: ['clean', 'exec'],
				options: {
					livereload: true
				}
			},
			config: {
				files: ['config.toml'],
				tasks: ['clean', 'exec'],
				options: {
					livereload: true
				}
			}

		},

	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-exec');

	grunt.registerTask('default', ['less', 'concat', 'clean', 'exec', 'connect', 'watch']);

};
