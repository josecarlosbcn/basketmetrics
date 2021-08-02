import Sequelize from "sequelize";
import {FEBConnection, FIBAConnection} from "../db";


const FEBGameModel = FEBConnection.db.define("tbl007_game", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        id_game_feb: {
            type: Sequelize.INTEGER,
            notNull: false,
            notEmpty: false
        },
        id_jornada: {
            type: Sequelize.INTEGER,
            notNull: true,
            notEmpty: true
        },
        id_team_home: {
            type: Sequelize.INTEGER,
            notNull: true,
            notEmpty: true
        },
        id_team_away: {
            type: Sequelize.INTEGER,
            notNull: true,
            notEmpty: true
        },
        home_score: {
            type: Sequelize.INTEGER,
            notNull: true,
            notEmpty: true
        },
        away_score: {
            type: Sequelize.INTEGER,
            notNull: true,
            notEmpty: true
        },
        place: {
            type: Sequelize.STRING,
            notNull: false,
            notEmpty: false
        },
        date_game: {
            type: Sequelize.DATE,
            notNull: true,
            notEmpty: true
        },
        audience: {
            type: Sequelize.INTEGER,
            notNull: false,
            notEmpty: false
        },
        date_insert: {
            type: Sequelize.DATE,
            notNull: true,
            notEmpty: true
        }
    },
    {
        getterMethods: {
            getID(){
                return this.id;
            },
            getIDGameFEB(){
                return this.id_game_feb;
            },
            getIDJornada(){
                return this.id_jornada;
            },
            getIDTeamHome(){
                return this.id_team_home;
            },
            getIDTeamAway(){
                return this.id_team_away;
            },
            getHomeScore(){
                return this.home_score;
            },
            getAwayScore(){
                return this.away_score;
            },
            getPlace(){
                return this.place;
            },
            getDateGame(){
                return this.date_game;
            },
            getAudience(){
                return this.audience;
            },
            getDateInsert(){
                return this.date_insert;
            }
        },
        setterMethods: {
            setID(value){
                this.setDataValue("id", value);
            },
            setIDGameFEB(value){
                this.setDataValue("id_game_feb", value);
            },
            setIDJornada(value){
                this.setDataValue("id_jornada", value);
            },
            setIDTeamHome(value){
                this.setDataValue("id_team_home", value);
            },
            setIDTeamAway(value){
                this.setDataValue("id_team_away", value);
            },
            setHomeScore(value){
                this.setDataValue("home_score", value);
            },
            setAwayScore(value){
                this.setDataValue("away_score", value);
            },
            setPlace(value){
                this.setDataValue("place", value);
            },
            setDateGame(value){
                this.setDataValue("date_game", value);
            },
            setAudience(value){
                this.setDataValue("audience", value);
            },
            setDataInsert(value){
                this.setDataValue("data_insert", value);
            }
        }
    }
);

const FIBAGameModel = FIBAConnection.db.define("tbl007_game", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        id_game_feb: {
            type: Sequelize.INTEGER,
            notNull: true,
            notEmpty: true
        },
        id_jornada: {
            type: Sequelize.INTEGER,
            notNull: true,
            notEmpty: true
        },
        id_team_home: {
            type: Sequelize.INTEGER,
            notNull: true,
            notEmpty: true
        },
        id_team_away: {
            type: Sequelize.INTEGER,
            notNull: true,
            notEmpty: true
        },
        home_score: {
            type: Sequelize.INTEGER,
            notNull: true,
            notEmpty: true
        },
        away_score: {
            type: Sequelize.INTEGER,
            notNull: true,
            notEmpty: true
        },
        place: {
            type: Sequelize.STRING,
            notNull: false,
            notEmpty: false
        },
        date_game: {
            type: Sequelize.DATE,
            notNull: true,
            notEmpty: true
        },
        audience: {
            type: Sequelize.INTEGER,
            notNull: false,
            notEmpty: false
        },
        date_insert: {
            type: Sequelize.DATE,
            notNull: true,
            notEmpty: true
        }
    },
    {
        getterMethods: {
            getID(){
                return this.id;
            },
            getIDGameFEB(){
                return this.id_game_feb;
            },
            getIDJornada(){
                return this.id_jornada;
            },
            getIDTeamHome(){
                return this.id_team_home;
            },
            getIDTeamAway(){
                return this.id_team_away;
            },
            getHomeScore(){
                return this.home_score;
            },
            getAwayScore(){
                return this.away_score;
            },
            getPlace(){
                return this.place;
            },
            getDateGame(){
                return this.date_game;
            },
            getAudience(){
                return this.audience;
            },
            getDateInsert(){
                return this.date_insert;
            }
        },
        setterMethods: {
            setID(value){
                this.setDataValue("id", value);
            },
            setIDGameFEB(value){
                this.setDataValue("id_game_feb", value);
            },
            setIDJornada(value){
                this.setDataValue("id_jornada", value);
            },
            setIDTeamHome(value){
                this.setDataValue("id_team_home", value);
            },
            setIDTeamAway(value){
                this.setDataValue("id_team_away", value);
            },
            setHomeScore(value){
                this.setDataValue("home_score", value);
            },
            setAwayScore(value){
                this.setDataValue("away_score", value);
            },
            setPlace(value){
                this.setDataValue("place", value);
            },
            setDateGame(value){
                this.setDataValue("date_game", value);
            },
            setAudience(value){
                this.setDataValue("audience", value);
            },
            setDataInsert(value){
                this.setDataValue("data_insert", value);
            }
        }
    }
);

module.exports.FEBGameModel = FEBGameModel;
module.exports.FIBAGameModel = FIBAGameModel;