import Sequelize from "sequelize";
import {FEBConnection, FIBAConnection} from "../db";

const FEBQuartersModel = FEBConnection.db.define("tbl016_quarters", {
        id_game: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: false
        },
        id_quarter: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            notNull: false,
            notEmpty: false
        },
        home_score: {
            type: Sequelize.INTEGER,
            notNull: false,
            notEmpty: false
        },
        away_score: {
            type: Sequelize.INTEGER,
            notNull: false,
            notEmpty: false
        },
        date_insert: {
            type: Sequelize.DATE,
            notNull: false,
            notEmpty: false            
        }
    },{
        getterMethods: {
            getIDGame(){
                return this.id_game;
            },
            getIDQuarter(){
                return this.id_quarter;
            },
            getHomeScore(){
                return this.home_score;
            },
            getAwayScore(){
                return this.away_score;
            },
            getDataInsert(){
                return this.date_insert;
            }
        },
        setterMethods: {
            setIDGame(value){
                this.setDataValue("id_game", value);
            },
            setIDQuarter(value){
                this.setDataValue("id_quarter", value);
            },
            setHomeScore(value){
                this.setDataValue("home_score", value);
            },
            setAwayScore(value){
                this.setDataValue("away_score", value);
            },
            setDateInsert(value){
                this.setDataValue("date_insert", value);
            }
        }
    }
);

const FIBAQuartersModel = FIBAConnection.db.define("tbl016_quarters", {
        id_game: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: false
        },
        id_quarter: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            notNull: false,
            notEmpty: false
        },
        home_score: {
            type: Sequelize.INTEGER,
            notNull: false,
            notEmpty: false
        },
        away_score: {
            type: Sequelize.INTEGER,
            notNull: false,
            notEmpty: false
        },
        date_insert: {
            type: Sequelize.DATE,
            notNull: false,
            notEmpty: false            
        }
    },{
        getterMethods: {
            getIDGame(){
                return this.id_game;
            },
            getIDQuarter(){
                return this.id_quarter;
            },
            getHomeScore(){
                return this.home_score;
            },
            getAwayScore(){
                return this.away_score;
            },
            getDataInsert(){
                return this.date_insert;
            }
        },
        setterMethods: {
            setIDGame(value){
                this.setDataValue("id_game", value);
            },
            setIDQuarter(value){
                this.setDataValue("id_quarter", value);
            },
            setHomeScore(value){
                this.setDataValue("home_score", value);
            },
            setAwayScore(value){
                this.setDataValue("away_score", value);
            },
            setDateInsert(value){
                this.setDataValue("date_insert", value);
            }
        }
    }
);

module.exports.FEBQuartersModel = FEBQuartersModel;
module.exports.FIBAQuartersModel = FIBAQuartersModel;