module.exports = function (grunt) {

  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      browserify: {
          dist: {
              options: {},
              files: {
                  "dist/Frontend.<%= pkg.version %>.js":['core/main.js']
              }
          },
          custom: {
              options: {},
              files: {
                  "dist/Custom.js":["custom/main.js"]
              }
          }
      },
      sass: {
          dist: {
              options: {},
              files:   {
                  "dist/app.<%= pkg.version %>.css": ["core/main.scss"]
              }
          },
          custom: {
              options: {},
              files: {
                  "dist/custom.css":["custom/main.scss"]
              }
          }
      }
   });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask("build", ["sass:dist","browserify:dist","sass:custom","browserify:custom"]);

};