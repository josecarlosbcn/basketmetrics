import dotenv from "dotenv";
import fs from "fs";
import path from "path";

/**
 * Code to get the values of environment variables during compilation time for the front-end
 */
//Get the root path. Our .env files and webpack.config.babel.js files are in the root path
const rootPath = path.join(__dirname + "/../../");
const basePath = rootPath + "/.env";
// We're concatenating the environment name to our filename to specify the correct env file!
const envPath = basePath + "." + process.env.NODE_ENV;
// Check if the file exists, otherwise fall back to the production .env
const finalPath = fs.existsSync(envPath) ? envPath : basePath;
// Set the path parameter in the dotenv config
const fileEnv = dotenv.config({ path: finalPath }).parsed;
// reduce it to a nice object, the same as before
const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
  return prev;
}, {});

module.exports.loader = envKeys;