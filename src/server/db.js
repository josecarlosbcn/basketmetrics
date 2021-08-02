import Sequelize from "sequelize";
//It's mandatory to import dotenv in each file where we can use enviroment variables
import "@babel/polyfill";   //We add this import to avoid an error when we make the build of server code for AWS
//import config from "dotenv";
//To import environment variables
//config.config(); 
/* if (process.env.NODE_ENV == "development"){
    config.config();    
} */
//We need to import loader to import all the environment variables from the respecting file
import {loader} from "./loader";

//console.log("Usuario DDBB: " + loader.FEB_CONNECTION_USER);


class MySQLConnection{
    constructor(){
        this.db = this.setConnection();
    }

    /**
     * This method has to be overwrited 
     */
    setConnection(){}

    async test(){
        try{
            console.log("host: " + process.env.FEB_CONNECTION_HOST + 
            "port: " + process.env.FEB_CONNECTION_PORT + 
            "user: " + process.env.FEB_CONNECTION_USER +
            "password: " + process.env.FEB_CONNECTION_PASSWORD + 
            "database: " + process.env.FEB_CONNECTION_DDBBNAME);
            await this.db.authenticate();
            console.log("Connection to database has been established succesfully");  
            //this.closeConnection();  
        }catch (err){
            console.error("Unable to connect to database: " + err);
        }
     }    

    closeConnection(){
        this.db.close();
        console.log("Connection to database has been closed!!!");
    }
}

class FEBConnection extends MySQLConnection{
    constructor(){
        super();
    }

    setConnection(){
/*         console.log("host: " + process.env.FEB_CONNECTION_HOST + "\n" + 
        "port: " + process.env.FEB_CONNECTION_PORT + "\n" + 
        "user: " + process.env.FEB_CONNECTION_USER + "\n" +
        "password: " + process.env.FEB_CONNECTION_PASSWORD + "\n" + 
        "database: " + process.env.FEB_CONNECTION_DDBBNAME);   */      
        return(
            new Sequelize(
                process.env.FEB_CONNECTION_DDBBNAME, 
                process.env.FEB_CONNECTION_USER,
                process.env.FEB_CONNECTION_PASSWORD, {
                    host: process.env.FEB_CONNECTION_HOST, 
                    port: process.env.FEB_CONNECTION_PORT,
                    define: {
                        freezeTableName: true, /**Don't add 's to the end of each table/model */
                        timestamps: false,  /**Don't add fields createdAt and updatedAt */
        /*                 charset: 'utf8',
                        dialectOptions: {
                          collate: 'utf8_general_ci'
                        },     */            
                    },
                    dialect: "mysql",
                    //Remove operatorAliases due to an error when we update to sequelize 6.0.0
                    //operatorsAliases: false,
                    pool: {
                        max: 5,
                        min: 0,
                        acquire: 30000,
                        idle: 10000
                    }
                }
            )
        );
    }
}

class FIBAConnection extends MySQLConnection{
    constructor(){
        super();
    }

    setConnection(){
        return(
            new Sequelize(
                process.env.FIBA_CONNECTION_DDBBNAME, 
                process.env.FIBA_CONNECTION_USER,
                process.env.FIBA_CONNECTION_PASSWORD, {
                    host: process.env.FIBA_CONNECTION_HOST,
                    port: process.env.FIBA_CONNECTION_PORT,
                    define: {
                        freezeTableName: true, /**Don't add 's to the end of each table/model */
                        timestamps: false,  /**Don't add fields createdAt and updatedAt */
        /*                 charset: 'utf8',
                        dialectOptions: {
                          collate: 'utf8_general_ci'
                        },     */            
                    },
                    dialect: "mysql",
                    //Remove operatorAliases due to an error when we update to sequelize 6.0.0
                    //operatorsAliases: false,
                    pool: {
                        max: 5,
                        min: 0,
                        acquire: 30000,
                        idle: 10000
                    }
                }
            )
        );        
    }
}

const FEBConn = new FEBConnection();
const FIBAConn = new FIBAConnection();

/* FEBConn.test();
FIBAConn.test(); */

module.exports.FEBConnection = FEBConn;
module.exports.FIBAConnection = FIBAConn;