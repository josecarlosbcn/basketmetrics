// Import webpack module
import webpack from "webpack";
//Import path module
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import dotenv from "dotenv";
import fs from "fs";

const devMode = process.env.NODE_ENV !== "production";

console.log("devMode: " + process.env.NODE_ENV);


/**
 * Code to get the values of environment variables during compilation time for the front-end
 */
//Get the root path. Our .env files and webpack.config.babel.js files are in the root path
const currentPath = path.join(__dirname);
const basePath = currentPath + "/.env";
// We're concatenating the environment name to our filename to specify the correct env file!
const envPath = basePath + "." + process.env.NODE_ENV;
// Check if the file exists, otherwise fall back to the production .env
const finalPath = fs.existsSync(envPath) ? envPath : basePath;
console.log("webpack.config.babel.js finalPath: " + finalPath);
// Set the path parameter in the dotenv config
const fileEnv = dotenv.config({ path: finalPath }).parsed;
// reduce it to a nice object, the same as before
const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
  return prev;
}, {});



module.exports = {
    entry: "./src/client/index.js", //set entry file

/*    entry: {
       index: "./src/client/index.js",
       module1: "./src/client/module-1.js"
   }, */

    // Resolve to output directory and set file
/*     output: {
        path: path.resolve("dist/assets"),
        filename: "js/bundle.js",
        publicPath: "/assets"   //It's mandatory to define this publicPath to get access to the website when we reload pages
                                //or we access to them directly with url's which have directories of second level like 
                                //http://localhost:4000/directory-level-1/directory-level-2
    }, */

    output: {
        path: path.resolve("dist/assets"),
        filename: "js/[name].bundle.js",
        chunkFilename: "js/[name].bundle.js",
        publicPath: "/assets"   //It's mandatory to define this publicPath to get access to the website when we reload pages
                                //or we access to them directly with url's which have directories of second level like 
                                //http://localhost:4000/directory-level-1/directory-level-2
    },
    optimization: {
        splitChunks : {
            chunks: "all",
            minSize: 30000,
            maxSize: 100000,
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/client/index.html",    //where is our template
            filename: "../index.html",              //where we are going to put our index.html inside the output directory
            favicon: "./src/client/img/favicon-96x96.png",
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }            
        }),
        new MiniCssExtractPlugin({
            filename: "css/bundle.css",
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }             
        }),
        //With this entry we can get access to the environment variable for front-end
        new webpack.DefinePlugin(envKeys),
    ],
    //It help us to detect errors. 
    devtool: "source-map", 
    // Set dev-server configuration
    devServer: {
        inline: true,
        contentBase: './dist', 
        port: 3000,
        historyApiFallback: true
    },

    // Add babel-loader to transpile js and jsx files
    module: { 
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:[
                    { 
                        loader: "babel-loader",
                        query: {
                            presets: [
                                "@babel/preset-react"
                            ]
                        }
                    }
                ]
            },
            {
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader, 
                    "css-loader"],
                test: /\.css$/
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "saas-loader", 
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    publicPath: "/assets/images/",
                    outputPath: "./images/"
                }
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    publicPath: "/assets/fonts/",   //It's mandatory to get access to the fonts when we reload pages or access directly
                    outputPath: "./fonts/"
                }
            }
        ]
    },
};