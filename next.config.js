module.exports = {
    env: {
        GRAPHQL_SCHEMA_URL: process.env.GRAPHQL_SCHEMA_URL,
        YELP_API_KEY: process.env.YELP_API_KEY,
    },
    redirects: async () => [
        { source: '/', destination: '/restaurants', permanent: false },
    ],
    rewrites: async () => [
        {
            source: '/:path*',
            destination: '/:path*',
        },
        {
            source: '/:path*',
            destination: '/api/proxy/:path*',
        },
    ],
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/,
            },
            use: [
                { loader: require.resolve('babel-loader') },
                { loader: require.resolve('react-svg-loader') },
            ],
        })

        return config
    },
}
