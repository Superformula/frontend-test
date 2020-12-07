const fs = require('fs')
const path = require('path')

const appDirectory = fs.realpathSync(process.cwd())

function resolveApp(relativePath) {
    return path.resolve(appDirectory, relativePath)
}

module.exports = {
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-knobs',
        '@storybook/addon-viewport',
    ],
    stories: ['../src/**/?(*.)stories.tsx'],
    webpackFinal: async (config) => {
        config.resolve.alias['~'] = resolveApp('src')

        config.module.rules = config.module.rules.map((rule) => {
            if (/svg|/.test(String(rule.test))) {
                return {
                    ...rule,
                    test: new RegExp(String(rule.test).replace('svg|', '')),
                }
            }

            return rule
        })

        config.module.rules.push(
            {
                test: /\.svg$/,
                use: [
                    { loader: require.resolve('babel-loader') },
                    { loader: require.resolve('react-svg-loader') },
                ],
            },
            {
                test: /\.(ts|tsx)$/,
                loader: require.resolve('babel-loader'),
                options: {
                    presets: [['react-app', { flow: false, typescript: true }]],
                },
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        query: {
                            name: '[name].[ext]',
                        },
                    },
                ],
                include: path.resolve(__dirname, '../'),
            },
        )

        config.resolve.extensions.push('.svg', '.ts', '.tsx')

        return config
    },
}
