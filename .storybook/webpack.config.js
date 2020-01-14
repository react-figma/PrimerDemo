module.exports = ({ config }) => {
    config.module.rules.push({ test: /\.(ts|tsx)$/, use: [
        {
            loader: require.resolve('awesome-typescript-loader'),
            options: {
                silent: true,
                transpileOnly: true
            }
        },
        // Optional
        {
            loader: require.resolve('react-docgen-typescript-loader'),
        },
    ], exclude: /node_modules/ });

    config.resolve.extensions.push('.web.ts', '.web.tsx', '.ts', '.tsx');
    config.resolve.alias = {
        ...(config.resolve.alias || {}),
        'react-native$': 'react-native-web',
        '@storybook/react-native': '@storybook/react'
    };
    return config;
};
