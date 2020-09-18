import express from "express";
import morgan from "morgan";
import {Routes} from "./routes/routes";
import path from "path";
import {server} from "./config";
import helmet from "helmet";
// import { FEBConnection, FIBAConnection } from "./db";
// import "./constants";
import config from "dotenv";

//To import environment variables
config.config(); 
/* if (process.env.NODE_ENV == "development"){
    config.config();    
} */

console.log("Entorno: " + process.env.NODE_ENV);
console.log("Puerto: " + process.env.PORT);

const app = express();

//Settings
app.set("port", process.env.PORT || 3000);
app.set("serverName", server.name);

//Middlewares
app.use(morgan("dev"));
app.use(helmet());  //Due to security reasons
app.use(express.urlencoded({extended: false})); //To understand forms
app.use(express.json()); //To understand json. We are going to send and receive json

//Routes
app.use(Routes);

//Static files
/**
 * When we pass the app to production with webpack here is the route where all the files could
 * be find them by the server. Here we've got all the html, css, js, images, fonts ... files of
 * the application
 */
app.use(express.static(path.join(__dirname, "../../dist")));

//Start server
app.listen(app.get("port"), () => {
    console.log("Server " + app.get("serverName") + " listening on port " + app.get("port"));
});