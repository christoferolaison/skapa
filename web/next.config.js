const {
  StatsWriterPlugin,
} = require('webpack-stats-plugin')
const withMDX = require('@next/mdx')()

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  webpack: config => {
    config.plugins.push(
      new StatsWriterPlugin({
        stats: {
          source: false,
          excludeAssets: false,
        },
      }),
    )
    return config
  },
})
