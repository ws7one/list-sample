/** @type {import('next').NextConfig} */

import withBundleAnalyzer from '@next/bundle-analyzer'
import { withAxiom } from 'next-axiom'

const nextConfig = {
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'cleanupIds',
                },
                {
                  name: 'prefixIds',
                  params: {
                    prefix: (_, extra) => {
                      const fileName = extra.path
                        .split('/')
                        .pop()
                        .split('.')
                        .shift()
                        .replaceAll('-', '_')
                      return `ose_${fileName}`
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    })

    return config
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  // async rewrites() {
  //   return {
  //     afterFiles: [{ source: '/:path*', destination: '/' }],
  //   }
  // },
}

const initConfig = withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })(nextConfig)

export default withAxiom(initConfig)
