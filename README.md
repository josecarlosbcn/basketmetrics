# Basketmetrics3

Code repository for web application Basketmetrics

In this repository we've got the server code and client code. The server code are located in /src/server and the cliente code are located in /src/client

## The server code are build with:
* Node.js
* Seriealize to access to MySQL

## The client code are build with:
* React.js
* Javascript
* CSS
* Bootstrap 4
* D3.js

## Config files

The application has several files of configuration which are located in the root of the project. These files are *env* and *config.js*

### env

We've got two files "env" to config the application:
* The file .env.development contains all the variables needed to config the application in development mode
* The file .env contains all the variables needed to config the application in production mode

### config.js

This file contains some configuration for server:

```javascript
module.exports = {
    "server": {
        "name": "Asterix",
        "host": "http://localhost"
    },
}
```
### Constants.js

This file contains some configuration for server:

```javascript
export const DDBB_CONNECTION = {
    feb: 0,
    fiba: 1
};  
```

### package.json

In this files we've got the scripts and modules that the application uses. We can make several groups with these modules, some of them are:

#### Security
* _helmet_: Helmet helps you secure your Express apps by setting various HTTP headers. Helmet is a collection of 14 smaller middleware functions that set HTTP response headers. Running app.use(helmet()) will not include all of these middleware functions by default.
* _cors_: Cors help us to share information with other resources. In our case, we want to accept request from the front-end url and not from any other url

#### Testing

We are going to use to testing Enzyme and Jest. To use them we have to import this modules in development dependencies:
* enzyme
* enzyme-adapter-react-16. Because we are using the 16 version react.
* jest
* jest-environment-enzyme
* jest-enzyme

### webpack.config.babel.js

With this file we config webpack and webpack server. We have to apply _historyApiFallback_ to let us reload pages. More information in:
[Fixing the "cannot GET /URL" error on refresh with React Router and Reach Router (or how client side routers work)](https://tylermcginnis.com/react-router-cannot-get-url-refresh/) 

```javascript
devServer: {
    inline: true,
    contentBase: './dist', 
    port: 3000,
    historyApiFallback: true
},
```

## AWS deployment
In AWS we will deploy our code of front-end and back-end of production. We will use NGINX for the code of the front-end and Node.js for the
code of the back-end.

Before to make the deploy in AWS we need to create the front-end code for production and the back-end for production. To do these tasks we will
use this scripts which are created in package.json.

We will make these steps:
* First, we create the front-end code for production with the script "compile"
* Second, we create the back-end code for production with the script "build-server"

Now, we've got our production versions of the code and we can upload our code to AWS

## How to simulate production in your laptop
After these two steps, if we want to test the front-end and back-end code in our development environment. First, we have to modify some variables
from .env file to the values of development. These variables are:
* URL_FEB_API
* URL_FIBA_API
* URL_DOMAIN
* URL_FRONT_END_SERVER

The variables URL_DOMAIN and URL_FRONT_END_SERVER have to have the same value due to security reasons. The server only attend petitions from a 
determinated url (URL_FRONT_END_SERVER)

Once, we've got the server code build it wit the development variables, we are prepared to test our production code in our development environment.
To do this, just only we need to start Webpack like front-page server and Node.js like back-end server.

We will start our Webpack like server with the script "webpack" and Node.js with the script "aws-start". Then we could be able to access to our 
application through this url: http://localhost:3000 The back-end server we will be listening in port 4000.