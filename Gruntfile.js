'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        bump: {
            options: {
                pushTo: 'origin'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['test/output']
        },

        jasmine_node: {
            all: ['spec/']
        },


        jshint: {
            all: [
                'Gruntfile.js',
                'spec/*.js',
                '*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        metalsmith: {
            json: {
                options: {
                    plugins: {
                        '../../../index.js': {
                            foo : 'bar'
                        },
                        'metalsmith-collections': {
                            builds: {
                                pattern: 'builds/*/config.json'
                            }
                        },
                        'metalsmith-templates': {
                            engine: 'handlebars',
                            directory: 'test/templates'
                        }
                    }
                },
                src: 'test/src',
                dest: 'test/output'
            }
        }
    });

    grunt.registerTask('test', ['clean:tests', 'metalsmith:json', 'jasmine_node:all']);

    grunt.registerTask('default', ['jshint:all', 'test']);

};