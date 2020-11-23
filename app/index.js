'use strict'

var Generator  = require('yeoman-generator');

module.exports =  class extends Generator {

    writing() {
        this.log('template path: ' + this.templatePath());
        this.log('destination path: ' + this.destinationPath());

        var source = this.templatePath('test.js');
        var destination = this.destinationPath('src/test.js');

        this.log('source: ' + source);
        this.log('destination: ' + destination);
        this.fs.copyTpl(this.templatePath('index.html'), this.destinationPath('src/index.html'), { title:'My App Name' });

        this.fs.copyTpl(this.templatePath('test.js'), this.destinationPath('src/test.js'), { AppName:'My App Name' });
    }
}