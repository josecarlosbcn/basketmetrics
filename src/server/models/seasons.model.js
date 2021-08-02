import Sequelize from "sequelize";
import {FEBConnection, FIBAConnection} from "../db";

const FEBSeasonsModel = FEBConnection.db.define("tbl015_seasons", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        id_league: {
            type: Sequelize.INTEGER,
            notNull: true,
            notEmpty: true
        },
        id_season_feb: {
            type: Sequelize.INTEGER,
            notNull: true,
            notEmpty: true
        },
        description: {
            type: Sequelize.STRING,
            notNull: true,
            notEmpty: true
        },
        date_start: {
            type: Sequelize.DATE,
            notNull: true,
            notEmpty: true
        },
        date_finish: {
            type: Sequelize.DATE,
            notNull: false,
            notEmpty: false
        }
    },
    {
        getterMethods: {
            getID(){
                return this.id;
            },
            getIDLeague(){
                return this.id_league;
            },
            getIDSeasonFEB(){
                return this.id_season_feb;
            },
            getDescription(){
                return this.description;
            },
            getDateStart(){
                return this.date_start;
            },
            getDateFinish(){
                return this.date_finish;
            }
        },
        setterMethods: {
            setID(value){
                this.setDataValue("id", value);
            },
            setIDLeague(value){
                this.setDataValue("id_league", value);
            },
            setIDSeasonFEB(value){
                this.setDataValue("id_season_feb", value);
            },
            setDescription(value){
                this.setDataValue("description", value);
            },
            setDateStart(value){
                this.setDataValue("date_start", value);
            },
            setDateFinish(value){
                this.setDataValue("date_finish", value);
            }
        }
    }
);

const FIBASeasonsModel = FIBAConnection.db.define("tbl015_seasons", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        id_league: {
            type: Sequelize.INTEGER,
            notNull: true,
            notEmpty: true
        },
        description: {
            type: Sequelize.STRING,
            notNull: true,
            notEmpty: true
        },
        date_start: {
            type: Sequelize.DATE,
            notNull: true,
            notEmpty: true
        },
        date_finish: {
            type: Sequelize.DATE,
            notNull: false,
            notEmpty: false
        }
    },
    {
        getterMethods: {
            getID(){
                return this.id;
            },
            getIDLeague(){
                return this.id_league;
            },
            getDescription(){
                return this.description;
            },
            getDateStart(){
                return this.date_start;
            },
            getDateFinish(){
                return this.date_finish;
            }
        },
        setterMethods: {
            setID(value){
                this.setDataValue("id", value);
            },
            setIDLeague(value){
                this.setDataValue("id_league", value);
            },
            setDescription(value){
                this.setDataValue("description", value);
            },
            setDateStart(value){
                this.setDataValue("date_start", value);
            },
            setDateFinish(value){
                this.setDataValue("date_finish", value);
            }
        }
    }
);

module.exports.FEBSeasonsModel = FEBSeasonsModel;
module.exports.FIBASeasonsModel = FIBASeasonsModel;