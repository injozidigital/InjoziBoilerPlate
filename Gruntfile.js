module.exports = function(grunt){

    grunt.initConfig({

        //load dependencies from package.json
        pkg: grunt.file.readJSON('package.json'),

        //uglify: {
        //    my_target: {
        //        files: {
        //            'js/main.min.js': ['js/main.js', 'js/test.js']
        //        }
        //    }
        //},
        sass_globbing: {
            your_target: {
                files: {
                    'src/sass/partials/_combined.scss': 'src/sass/partials/**/*.scss'
                },
                options: {
                    useSingleQuotes: false,
                    signature: '// Hello, World!'
                }
            }
        },
        compass: {
            //dev: {
            //    options: {
            //        sassDir: 'sass',
            //        cssDir: 'css/dev',
            //        environment: 'development',
            //        watch:true,
            //         require: ['susy', 'breakpoint']
            //    }
            //},
            dist: {
                options: {
                    sassDir: 'src/sass',
                    cssDir: 'src/css/dist',
                    environment: 'production',
                    watch:true,
                    require: ['susy', 'breakpoint']
                }
            }
        }
    });

    //load plugin

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-sass-globbing');
    //grunt.loadNpmTasks('grunt-contrib-cssmin');
    //grunt.loadNpmTasks('grunt-contrib-uglify');

    //execute task
    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['sass_globbing', 'compass']);


};