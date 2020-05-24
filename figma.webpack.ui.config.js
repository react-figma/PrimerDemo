var configure = require('react-figma-webpack-config/hmr');

module.exports = configure({
    resolve: {
        alias: {
            'react-native$': 'react-figma'
        }
    }
});
