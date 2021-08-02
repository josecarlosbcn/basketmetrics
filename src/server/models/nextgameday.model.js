import Sequelize from "sequelize";
import {FEBConnection, FIBAConnection} from "../db";

const FEBNextGamedayLF1Model = FEBConnection.db.define("tbl031_next_gameday_lf1", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        id_competition: {
            type: Sequelize.INTEGER,
            notNull: true
        },
        jornada: {
            type: Sequelize.STRING,
            notNull: false,
            notEmpty: false
        },
        id_home_team: {
            type: Sequelize.INTEGER,
            notNull: true
        },
        id_away_team: {
            type: Sequelize.INTEGER,
            notNull: true
        },
        date: {
            type: Sequelize.DATE,
            notNull: true
        },
        played: {
            type: Sequelize.BOOLEAN,
            notNull: true
        }
    }, {
        getterMethods: {
            getID(){
                return this.id
            },
            getIDCompetition(){
                return this.id_competition
            },
            getJornada(){
                return this.jornada
            },
            getIDHomeTeam(){
                return this.id_home_team
            },
            getIDAwayTeam(){
                return this.id_away_team
            },
            getDate(){
                return this.date
            },
            getPlayed(){
                return this.played
            }
        },
        setterMethods: {
            setIDCompetition(value){
                this.setDataValue("id_competition", value)
            },
            setJornada(value){
                this.setDataValue("jornada", value)
            },
            setIDHomeTeam(value){
                this.setDataValue("id_home_team", value)
            },
            setIDAwayTeam(value){
                this.setDataValue("id_away_team", value)
            },
            setDate(value){
                this.setDataValue("date", value)
            },
            setPlayed(value){
                this.setDataValue("played", value)
            }
        }
    }
);

const FEBNextGamedayLF2Model = FEBConnection.db.define("tbl032_next_gameday_lf2", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        id_competition: {
            type: Sequelize.INTEGER,
            notNull: true
        },
        jornada: {
            type: Sequelize.STRING,
            notNull: false,
            notEmpty: false
        },
        id_home_team: {
            type: Sequelize.INTEGER,
            notNull: true
        },
        id_away_team: {
            type: Sequelize.INTEGER,
            notNull: true
        },
        date: {
            type: Sequelize.DATE,
            notNull: true
        },
        played: {
            type: Sequelize.BOOLEAN,
            notNull: true
        }
    }, {
        getterMethods: {
            getID(){
                return this.id
            },
            getIDCompetition(){
                return this.id_competition
            },
            getJornada(){
                return this.jornada
            },
            getIDHomeTeam(){
                return this.id_home_team
            },
            getIDAwayTeam(){
                return this.id_away_team
            },
            getDate(){
                return this.date
            },
            getPlayed(){
                return this.played
            }
        },
        setterMethods: {
            setIDCompetition(value){
                this.setDataValue("id_competition", value)
            },
            setJornada(value){
                this.setDataValue("jornada", value)
            },
            setIDHomeTeam(value){
                this.setDataValue("id_home_team", value)
            },
            setIDAwayTeam(value){
                this.setDataValue("id_away_team", value)
            },
            setDate(value){
                this.setDataValue("date", value)
            },
            setPlayed(value){
                this.setDataValue("played", value)
            }
        }
    }
);

const FIBANextGamedayEuroleagueModel = FIBAConnection.db.define("tbl031_next_game_euroleague", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        id_competition: {
            type: Sequelize.INTEGER,
            notNull: true
        },
        id_home_team: {
            type: Sequelize.INTEGER,
            notNull: true
        },
        id_away_team: {
            type: Sequelize.INTEGER,
            notNull: true
        },
        date: {
            type: Sequelize.DATE,
            notNull: true
        },
        played: {
            type: Sequelize.BOOLEAN,
            notNull: true
        }
    }, {
        getterMethods: {
            getID(){
                return this.id
            },
            getIDCompetition(){
                return this.id_competition
            },
            getIDHomeTeam(){
                return this.id_home_team
            },
            getIDAwayTeam(){
                return this.id_away_team
            },
            getDate(){
                return this.date
            },
            getPlayed(){
                return this.played
            }
        },
        setterMethods: {
            setIDCompetition(value){
                this.setDataValue("id_competition", value)
            },
            setIDHomeTeam(value){
                this.setDataValue("id_home_team", value)
            },
            setIDAwayTeam(value){
                this.setDataValue("id_away_team", value)
            },
            setDate(value){
                this.setDataValue("date", value)
            },
            setPlayed(value){
                this.setDataValue("played", value)
            }
        }
    }
);

const FIBANextGamedayEurocupModel = FIBAConnection.db.define("tbl032_next_game_eurocup", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        id_competition: {
            type: Sequelize.INTEGER,
            notNull: true
        },
        id_home_team: {
            type: Sequelize.INTEGER,
            notNull: true
        },
        id_away_team: {
            type: Sequelize.INTEGER,
            notNull: true
        },
        date: {
            type: Sequelize.DATE,
            notNull: true
        },
        played: {
            type: Sequelize.BOOLEAN,
            notNull: true
        }
    }, {
        getterMethods: {
            getID(){
                return this.id
            },
            getIDCompetition(){
                return this.id_competition
            },
            getIDHomeTeam(){
                return this.id_home_team
            },
            getIDAwayTeam(){
                return this.id_away_team
            },
            getDate(){
                return this.date
            },
            getPlayed(){
                return this.played
            }
        },
        setterMethods: {
            setIDCompetition(value){
                this.setDataValue("id_competition", value)
            },
            setIDHomeTeam(value){
                this.setDataValue("id_home_team", value)
            },
            setIDAwayTeam(value){
                this.setDataValue("id_away_team", value)
            },
            setDate(value){
                this.setDataValue("date", value)
            },
            setPlayed(value){
                this.setDataValue("played", value)
            }
        }
    }
);


module.exports.FEBNextGamedayLF1Model = FEBNextGamedayLF1Model;
module.exports.FEBNextGamedayLF2Model = FEBNextGamedayLF2Model;
module.exports.FIBANextGamedayEuroleagueModel = FIBANextGamedayEuroleagueModel;
module.exports.FIBANextGamedayEurocupModel = FIBANextGamedayEurocupModel;