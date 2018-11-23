'use strict';

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'build.js',
		library: 'sd'
    },
    watch: true
};
