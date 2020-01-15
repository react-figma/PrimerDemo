var path = require("path");
var configure = require('react-figma-webpack-config');

module.exports = configure({
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist') // Compile into a folder called "dist"
    },
    resolve: {
        extensions: ['.figma.tsx', '.figma.ts','.tsx', '.ts', '.jsx', '.js'],
        alias: {
            'react-native$': 'react-figma'
        }
    }
});
