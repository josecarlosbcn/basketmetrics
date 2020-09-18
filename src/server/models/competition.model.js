import Sequelize from "sequelize";
import {FEBConnection, FIBAConnection} from "../db";

const FEBCompetitionModel = FEBConnection.db.define("tbl012_competition", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        id_competition_feb: {
            type: Sequelize.INTEGER,
            notNull: true,
            notEmpty: true
        },
        id_league: {
            type: Sequelize.INTEGER,
            notNull: true,
            notEmpty: true
        },
        id_season: {
            type: Sequelize.INTEGER,
            notNull: true,
            notEmpty: true
        },
        id_group: {
            type: Sequelize.INTEGER,
            notNull: true,
            notEmpty: true
        },
        name: {
            type: Sequelize.STRING,
            notNull: true,
            notEmpty: true
        }
    },
    {
        getterMethods: {
            getID(){
                return this.id
            },
            getIDCompetitionFEB(){
                return this.id_competition_feb
            },
            getIDLeague(){
                return this.id_league
            },
            getIDSeason(){
                return this.id_season
            },
            getIDGroup(){
                return this.id_group
            },
            getName(){
                return this.name
            }
        },
        setterMethods: {
            setID(value){
                this.setDataValue("id", value)
            },
            setIDCompetition(value){
                this.setDataValue("id_competition", value)
            },
            setIDLeague(value){
                this.setDataValue("id_league", value)
            },
            setIDSeason(value){
                this.setDataValue("id_season", value)
            },
            setIDGroup(value){
                this.setDataValue("id_group", value)
            },
            setName(value){
                this.setDataValue("name", value)
            }
        }
    }
);

const FIBACompetitionModel = FIBAConnection.db.define("tbl012_competition", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        id_competition_feb: {
            type: Sequelize.INTEGER,
            notNull: false,
            notEmpty: false
        },
        id_league: {
            type: Sequelize.INTEGER,
            notNull: true,
            notEmpty: true
        },
        id_season: {
            type: Sequelize.INTEGER,
            notNull: true,
            notEmpty: true
        },
        id_group: {
            type: Sequelize.INTEGER,
            notNull: true,
            notEmpty: true
        },
        name: {
            type: Sequelize.STRING,
            notNull: true,
            notEmpty: true
        }
    },
    {
        getterMethods: {
            getID(){
                return this.id
            },
            getIDCompetitionFEB(){
                return this.id_competition_feb
            },
            getIDLeague(){
                return this.id_league
            },
            getIDSeason(){
                return this.id_season
            },
            getIDGroup(){
                return this.id_group
            },
            getName(){
                return this.name
            }
        },
        setterMethods: {
            setID(value){
                this.setDataValue("id", value)
            },
            setIDCompetition(value){
                this.setDataValue("id_competition", value)
            },
            setIDLeague(value){
                this.setDataValue("id_league", value)
            },
            setIDSeason(value){
                this.setDataValue("id_season", value)
            },
            setIDGroup(value){
                this.setDataValue("id_group", value)
            },
            setName(value){
                this.setDataValue("name", value)
            }
        }
    }
);

module.exports.FEBCompetitionModel = FEBCompetitionModel;
module.exports.FIBACompetitionModel = FIBACompetitionModel;