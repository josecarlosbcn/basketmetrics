import Sequelize from "sequelize";
import {FEBConnection, FIBAConnection} from "../db";

const FEBPCStdStats = FEBConnection.db.define("tbl010_player_std_stats", {
    id_player_team: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        notNull: true        
    },
    id_competition: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        notNull: true,
        notEmpty: true
    },
    games: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    minutes: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    seconds: {
        type: Sequelize.INTEGER,
        notNull: false,
        notEmpty: false
    },
    t2p_conv: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    t2p_int: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    t3p_conv: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    t3p_int: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    tl_conv: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    tl_int: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    reb_def: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    reb_of: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    assists: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    steals: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    turnovers: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    block_shots: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    fouls_cm: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    fouls_rv: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    efficience: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    benefit: {
        type: Sequelize.DECIMAL,
        notNull: true,
        notEmpty: true
    },
    date_update: {
        type: Sequelize.DATE,
        notNull: true,
        notEmpty: true
    }
},{
    getterMethods: {
        getIDPlayerTeam(){
            return this.id_player_team
        },
        getIDCompetition(){
            return this.id_competition
        },
        getGames(){
            return this.games
        },
        getMinutes(){
            return this.minutes
        },
        getSeconds(){
            return this.seconds
        },
        getT2PConv(){
            return this.t2p_conv
        },
        getT2PInt(){
            return this.t2p_int
        },
        getT3PConv(){
            return this.t3p_conv
        },
        getT3PInt(){
            return this.t3p_int
        },
        getTLConv(){
            return this.tl_conv
        },
        getTLInt(){
            return this.tl_int
        },
        getRebDef(){
            return this.reb_def
        },
        getRebOf(){
            return this.reb_of
        },
        getAssists(){
            return this.assists
        },
        getSteals(){
            return this.steals
        },
        getTurnovers(){
            return this.turnovers
        },
        getBlockShots(){
            return this.block_shots
        },
        getFoulsCommited(){
            return this.fouls_cm
        },
        getFoulsReceived(){
            return this.fouls_rv
        },
        getEfficience(){
            return this.efficience
        },
        getBenefit(){
            return this.benefit
        },
        getDateUpdate(){
            return this.date_update
        }
    },
    setterMethods: {
        setIDPlayerTeam(value){
            this.setDataValue("id_player_team", value)
        },        
        setIDCompetition(value){
            this.setDataValue("id_competition", value)
        },
        setGames(value){
            this.setDataValue("games", value)
        },
        setMinutes(value){
            this.setDataValue("minutes", value)
        },
        setSeconds(value){
            this.setDataValue("seconds", value)
        },
        setT2PConv(value){
            this.setDataValue("t2p_conv", value)
        },
        setT2PInt(value){
            this.setDataValue("t2p_int", value)
        },
        setT3PConv(value){
            this.setDataValue("t3p_conv", value)
        },
        setT3PInt(value){
            this.setDataValue("t3p_int", value)
        },
        setTLConv(value){
            this.setDataValue("tl_conv", value)
        },
        setTLInt(value){
            this.setDataValue("tl_int", value)
        },
        setRebDef(value){
            this.setDataValue("reb_def", value)
        },
        setRebOf(value){
            this.setDataValue("reb_of", value)
        },
        setAssists(value){
            this.setDataValue("assists", value)
        },
        setSteals(Value){
            this.setDataValue("steals", value)
        },
        setTurnovers(value){
            this.setDataValue("turnovers", value)
        },
        setBlockShots(value){
            this.setDataValue("block_shots", value)
        },
        setFoulsCommited(value){
            this.setDataValue("fouls_cm", value)
        },
        setFoulsReceived(value){
            this.setDataValue("fouls_rv", value)
        },
        setEfficience(value){
            this.setDataValue("efficience", value)
        },
        setBenefit(value){
            this.setDataValue("benefit", value)
        },
        setDateUpdate(value){
            this.setDataValue("date_update", value)
        }
    }
});

const FIBAPCStdStats = FIBAConnection.db.define("tbl010_player_std_stats", {
    id_player_team: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        notNull: true        
    },
    id_competition: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        notNull: true,
        notEmpty: true
    },
    games: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    minutes: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    seconds: {
        type: Sequelize.INTEGER,
        notNull: false,
        notEmpty: false
    },
    t2p_conv: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    t2p_int: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    t3p_conv: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    t3p_int: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    tl_conv: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    tl_int: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    reb_def: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    reb_of: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    assists: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    steals: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    turnovers: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    block_shots: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    fouls_cm: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    fouls_rv: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    efficience: {
        type: Sequelize.SMALLINT,
        notNull: true,
        notEmpty: true
    },
    benefit: {
        type: Sequelize.DECIMAL,
        notNull: true,
        notEmpty: true
    },
    date_update: {
        type: Sequelize.DATE,
        notNull: true,
        notEmpty: true
    }
},{
    getterMethods: {
        getIDPlayerTeam(){
            return this.id_player_team
        },
        getIDCompetition(){
            return this.id_competition
        },
        getGames(){
            return this.games
        },
        getMinutes(){
            return this.minutes
        },
        getSeconds(){
            return this.seconds
        },
        getT2PConv(){
            return this.t2p_conv
        },
        getT2PInt(){
            return this.t2p_int
        },
        getT3PConv(){
            return this.t3p_conv
        },
        getT3PInt(){
            return this.t3p_int
        },
        getTLConv(){
            return this.tl_conv
        },
        getTLInt(){
            return this.tl_int
        },
        getRebDef(){
            return this.reb_def
        },
        getRebOf(){
            return this.reb_of
        },
        getAssists(){
            return this.assists
        },
        getSteals(){
            return this.steals
        },
        getTurnovers(){
            return this.turnovers
        },
        getBlockShots(){
            return this.block_shots
        },
        getFoulsCommited(){
            return this.fouls_cm
        },
        getFoulsReceived(){
            return this.fouls_rv
        },
        getEfficience(){
            return this.efficience
        },
        getBenefit(){
            return this.benefit
        },
        getDateUpdate(){
            return this.date_update
        }
    },
    setterMethods: {
        setIDPlayerTeam(value){
            this.setDataValue("id_player_team", value)
        },        
        setIDCompetition(value){
            this.setDataValue("id_competition", value)
        },
        setGames(value){
            this.setDataValue("games", value)
        },
        setMinutes(value){
            this.setDataValue("minutes", value)
        },
        setSeconds(value){
            this.setDataValue("seconds", value)
        },
        setT2PConv(value){
            this.setDataValue("t2p_conv", value)
        },
        setT2PInt(value){
            this.setDataValue("t2p_int", value)
        },
        setT3PConv(value){
            this.setDataValue("t3p_conv", value)
        },
        setT3PInt(value){
            this.setDataValue("t3p_int", value)
        },
        setTLConv(value){
            this.setDataValue("tl_conv", value)
        },
        setTLInt(value){
            this.setDataValue("tl_int", value)
        },
        setRebDef(value){
            this.setDataValue("reb_def", value)
        },
        setRebOf(value){
            this.setDataValue("reb_of", value)
        },
        setAssists(value){
            this.setDataValue("assists", value)
        },
        setSteals(Value){
            this.setDataValue("steals", value)
        },
        setTurnovers(value){
            this.setDataValue("turnovers", value)
        },
        setBlockShots(value){
            this.setDataValue("block_shots", value)
        },
        setFoulsCommited(value){
            this.setDataValue("fouls_cm", value)
        },
        setFoulsReceived(value){
            this.setDataValue("fouls_rv", value)
        },
        setEfficience(value){
            this.setDataValue("efficience", value)
        },
        setBenefit(value){
            this.setDataValue("benefit", value)
        },
        setDateUpdate(value){
            this.setDataValue("date_update", value)
        }
    }
});

module.exports.FEBPCStdStats = FEBPCStdStats;
module.exports.FIBAPCStdStats = FIBAPCStdStats;