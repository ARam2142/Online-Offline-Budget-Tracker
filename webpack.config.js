const WebpackPwaManifest = require("require-pwa-manifest");
const path = require("path");

const config = {
    entry: "./public/index.js",
    output: {
        path:__dirname + "/public/dist",
        filename: "bundle.js"
    },
    mode: "development",
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          },
        ],
      },
    
    plugins: [
        new WebpackPwaManifest({
            filename: "manifest.json",
            inject: false,
            fingerprints: false,

            name: "budget-app",
            short_name: "budget-app",
            start_url: "/",
            background_color: "#3367D6",
            display: "standalone",
            theme_color: "#3367D6",
        
        })
    ]
}

module.exports = config