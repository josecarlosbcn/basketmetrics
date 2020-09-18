import Sequelize from "sequelize";
import {FEBConnection, FIBAConnection} from "../db";


const FEBTeamClubModel = FEBConnection.db.define("tbl005_team_club", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        id_league: {
            type: Sequelize.INTEGER,
            notNull: true
        },
        id_season: {
            type: Sequelize.INTEGER,
            notNull: true
        },
        id_club: {
            type: Sequelize.INTEGER,
            notNull: true
        },
        id_team_feb: {
            type: Sequelize.INTEGER,
            notNull: true
        },
        logo: {
            type: Sequelize.STRING,
            notEmpty: false,
            notNull: false
        },
        name: {
            type: Sequelize.STRING,
            notEmpty: true,
            notNull: true
        },
        abrev: {
            type: Sequelize.STRING,
            notEmpty: false,
            notNull: false
        },
        url_name: {
            type: Sequelize.STRING,
            notEmpty: true,
            notNull: true
        },
        r_name: {
            type: Sequelize.STRING,
            notEmpty: false,
            notNull: false
        },
        date_start: {
            type: Sequelize.DATE,
            notNull: true,
            notEmpty: true
        }
    }, {
        getterMethods: {
            getID(){
                return this.id
            },
            getIDLeague(){
                return this.id_league
            },
            getIDSeason(){
                return this.id_season
            },
            getIDClub(){
                return this.id_club
            },
            getIDTeamClub(){
                return this.id_team_feb
            },
            getLogo(){
                return this.logo
            },
            getName(){
                return this.name
            },
            getAbrev(){
                return this.abrev
            },
            getURLName(){
                return this.url_name
            },
            getRName(){
                return this.r_name
            },
            getDataStart(){
                return this.date_start
            }
        },
        setterMethods: {
            setIDLeague(value){
                this.setDataValue("id_league", value)
            },
            setIDSeason(value){
                this.setDataValue("id_season", value)
            },
            setIDClub(value){
                this.setDataValue("id_club", value)
            },
            setIDTeamClub(value){
                this.setDataValue("id_team_club", value)
            },
            setLogo(value){
                this.setDataValue("logo", value)
            },
            setName(value){
                this.setDataValue("name", value)
            },
            setAbrev(value){
                this.setDataValue("abrev", value)
            },
            setURLName(value){
                this.setDataValue("url_name", value)
            },
            setRName(value){
                this.setDataValue("r_name", value)
            },
            setDataStart(value){
                this.setDataValue("date_start", value)
            }
        }
    }
);

const FIBATeamClubModel = FIBAConnection.db.define("tbl005_team_club", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        id_league: {
            type: Sequelize.INTEGER,
            notNull: true
        },
        id_season: {
            type: Sequelize.INTEGER,
            notNull: true
        },
        id_club: {
            type: Sequelize.INTEGER,
            notNull: true
        },
        id_team_feb: {
            type: Sequelize.INTEGER,
            notNull: true
        },
        logo: {
            type: Sequelize.STRING,
            notEmpty: false,
            notNull: false
        },
        name: {
            type: Sequelize.STRING,
            notEmpty: true,
            notNull: true
        },
        abrev: {
            type: Sequelize.STRING,
            notEmpty: false,
            notNull: false
        },
        url_name: {
            type: Sequelize.STRING,
            notEmpty: true,
            notNull: true
        },
        r_name: {
            type: Sequelize.STRING,
            notEmpty: false,
            notNull: false
        },
        date_start: {
            type: Sequelize.DATE,
            notNull: true,
            notEmpty: true
        }
    }, {
        getterMethods: {
            getID(){
                return this.id
            },
            getIDLeague(){
                return this.id_league
            },
            getIDSeason(){
                return this.id_season
            },
            getIDClub(){
                return this.id_club
            },
            getIDTeamClub(){
                return this.id_team_feb
            },
            getLogo(){
                return this.logo
            },
            getName(){
                return this.name
            },
            getAbrev(){
                return this.abrev
            },
            getURLName(){
                return this.url_name
            },
            getRName(){
                return this.r_name
            },
            getDataStart(){
                return this.date_start
            }
        },
        setterMethods: {
            setIDLeague(value){
                this.setDataValue("id_league", value)
            },
            setIDSeason(value){
                this.setDataValue("id_season", value)
            },
            setIDClub(value){
                this.setDataValue("id_club", value)
            },
            setIDTeamClub(value){
                this.setDataValue("id_team_club", value)
            },
            setLogo(value){
                this.setDataValue("logo", value)
            },
            setName(value){
                this.setDataValue("name", value)
            },
            setAbrev(value){
                this.setDataValue("abrev", value)
            },
            setURLName(value){
                this.setDataValue("url_name", value)
            },
            setRName(value){
                this.setDataValue("r_name", value)
            },
            setDataStart(value){
                this.setDataValue("date_start", value)
            }
        }
    }
);

module.exports.FEBTeamClubModel = FEBTeamClubModel;
module.exports.FIBATeamClubModel = FIBATeamClubModel;