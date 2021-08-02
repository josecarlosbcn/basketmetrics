/**
 * We create this file to avoid an error in the test because it's not found css files. So, we have to modify package.json and in 
 * jest section we have to add:
 *   "moduleNameMapper": {
 *      "\\.(css|jpg|png)$": "<rootDir>/empty-module.js"
 *   }
 */
module.exports = '';