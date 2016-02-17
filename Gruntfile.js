module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: ['src/client/*.js','src/client/modules/*.js'],
        dest: 'build/js/main.js'
      }
    },
    copy: {
      dist: {
      },
      dev: {
        expand: true,
        cwd: 'src/client/',
        src: '**',
        dest: 'public/'
      },
      html: {
        expand: true,
        cwd: 'src/client/',
        src: '**',
        dest: 'public/'
      }
    },
    uglify: {
      dist: {
        files: {
          'public/js/webmidicontroler.min.js': ['build/js/main.js']
        }
      }
    },
    clean: {
      options: {
        'force': false,
        'no-write': false
      },
      public: {
        options: {
          'force': false,
          'no-write': false
        },
        src: ['build/', 'public/**/*']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');


  grunt.registerTask('dist', ['clean:public', 'concat:dist','uglify:dist','copy:dist','copy:html']);
  grunt.registerTask('dev',['clean:public', 'copy:dev','copy:html']);

  grunt.registerTask('default', ['dev']);


//  grunt.registerTask('default', browserLib);
};
