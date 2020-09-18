import Sequelize from "sequelize";
import {FEBConnection, FIBAConnection} from "../db";

const FEBPCAdvStats = FEBConnection.db.define("tbl029_pc_adv_stats", {
    id_player_team: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        notNull: true,
        notEmpty: true
    },
    id_competition: {
        type: Sequelize.SMALLINT,
        primaryKey: true,
        notNull: true,
        notEmpty: true
    },
    dre: {
        type: Sequelize.DECIMAL,
        notNull: true,
        notEmpty: true
    },
    game_score: {
        type: Sequelize.DECIMAL,
        notNull: true,
        notEmpty: true
    },
    per: {
        type: Sequelize.DECIMAL,
        notNull: false,
        notEmpty: false
    },
    etc: {
        type:Sequelize.DECIMAL,
        notNull: true,
        notEmpty: true
    },
    ts: {
        type: Sequelize.DECIMAL,
        notNull: true,
        notEmpty: true
    },
    usg: {
        type: Sequelize.DECIMAL,
        notNull: true,
        notEmpty: true
    },
    p_reb_def: {
        type: Sequelize.DECIMAL,
        notNull: true,
        notEmpty: true
    },
    p_reb_of: {
        type: Sequelize.DECIMAL,
        notNull: true,
        notEmpty: true
    },
    p_tot_reb: {
        type: Sequelize.DECIMAL,
        notNull: true,
        notEmpty: true
    },
    p_assists: {
        type: Sequelize.DECIMAL,
        notNull: true,
        notEmpty: true
    },
    assists_x_turnovers: {
        type: Sequelize.DECIMAL,
        notNull: true,
        notEmpty: true
    },
    assists_ratio: {
        type: Sequelize.DECIMAL,
        notNull: true,
        notEmpty: true
    },
    p_steals: {
        type: Sequelize.DECIMAL,
        notNull: true,
        notEmpty: true
    },
    ortg: {
        type: Sequelize.DECIMAL,
        notNull: true,
        notEmpty: true
    },
    drtg: {
        type: Sequelize.DECIMAL,
        notNull: true,
        notEmpty: true
    },
    nrtg: {
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
            return this.id_player_team;
        },
        getIDCompetition(){
            return this.id_competition;
        },
        getDRE(){
            return this.dre;
        },
        getPER(){
            return this.per;
        },
        getETC(){
            return this.etc;
        },
        getTS(){
            return this.ts;
        },
        getUSG(){
            return this.usg;
        },
        getPRebDef(){
            return this.p_reb_def;
        },
        getPRebOf(){
            return this.p_reb_of;
        },
        getPTotReb(){
            return this.p_tot_reb;
        },
        getPAssists(){
            return this.p_assists;
        },
        getAssistsTurnovers(){
            return this.assists_x_turnovers;
        },
        getAssistsRatio(){
            return this.assists_ratio;
        },
        getPSteals(){
            return this.p_steals;
        },
        getORTG(){
            return this.ortg;
        },
        getDRTG(){
            return this.drtg;
        },
        getNRTG(){
            return this.nrtg;
        },
        getDateUpdate(){
            return this.date_update;
        }
    },
    setterMethods: {
        setIDPlayerTeam(value){
            this.setDataValue("id_player_team", value);
        },
        setIDCompetition(value){
            this.setDataValue("id_competition", value);
        },
        setDRE(value){
            this.setDataValue("dre", value);
        },
        setGameScore(value){
            this.setDataValue("game_score", value);
        },
        setPER(value){
            this.setDataValue("per", value);
        },
        setETC(value){
            this.setDataValue("etc", value);
        },
        setTS(value){
            this.setDataValue("ts", value);
        },
        setUSG(value){
            this.setDataValue("usg", value);
        },
        setPRebDef(value){
            this.setDataValue("p_reb_def", value);
        },
        setPRebOf(value){
            this.setDataValue("p_reb_of", value);
        },
        setPTotReb(value){
            this.setDataValue("p_tot_reb", value);
        },
        setPAssists(value){
            this.setDataValue("p_assists", value);
        },
        setAssistsTurnovers(value){
            this.setDataValue("assists_x_turnovers", value);
        },
        setAssistsRatio(value){
            this.setDataValue("assists_ratio", value);
        },
        setPSteals(value){
            this.setDataValue("p_steals", value);
        },
        setORTG(value){
            this.setDataValue("ortg", value);
        },
        setDRTG(value){
            this.setDataValue("drtg", value);
        },
        setNRTG(value){
            this.setDataValue("nrtg", value);
        },
        setDateUpdate(value){
            this.setDataValue("date_update", value);
        }
    }
});

const FIBAPCAdvStats = FIBAConnection.db.define("tbl029_pc_adv_stats", {
    id_player_team: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        notNull: true,
        notEmpty: true
    },
    id_competition: {
        type: Sequelize.SMALLINT,
        primaryKey: true,
        notNull: true,
        notEmpty: true
    },
    dre: {
        type: Sequelize.DECIMAL,
        notNull: true,
        notEmpty: true
    },
    game_score: {
        type: Sequelize.DECIMAL,
        notNull: true,
        notEmpty: true
    },
    per: {
        type: Sequelize.DECIMAL,
        notNull: false,
        notEmpty: false
    },
    etc: {
        type:Sequelize.DECIMAL,
        notNull: true,
        notEmpty: true
    },
    ts: {
        type: Sequelize.DECIMAL,
        notNull: true,
        notEmpty: true
    },
    usg: {
        type: Sequelize.DECIMAL,
        notNull: true,
        notEmpty: true
    },
    p_reb_def: {
        type: Sequelize.DECIMAL,
        notNull: true,
        notEmpty: true
    },
    p_reb_of: {
        type: Sequelize.DECIMAL,
        notNull: true,
        notEmpty: true
    },
    p_tot_reb: {
        type: Sequelize.DECIMAL,
        notNull: true,
        notEmpty: true
    },
    p_assists: {
        type: Sequelize.DECIMAL,
        notNull: true,
        notEmpty: true
    },
    assists_x_turnovers: {
        type: Sequelize.DECIMAL,
        notNull: true,
        notEmpty: true
    },
    assists_ratio: {
        type: Sequelize.DECIMAL,
        notNull: true,
        notEmpty: true
    },
    p_steals: {
        type: Sequelize.DECIMAL,
        notNull: true,
        notEmpty: true
    },
    ortg: {
        type: Sequelize.DECIMAL,
        notNull: true,
        notEmpty: true
    },
    drtg: {
        type: Sequelize.DECIMAL,
        notNull: true,
        notEmpty: true
    },
    nrtg: {
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
            return this.id_player_team;
        },
        getIDCompetition(){
            return this.id_competition;
        },
        getDRE(){
            return this.dre;
        },
        getPER(){
            return this.per;
        },
        getETC(){
            return this.etc;
        },
        getTS(){
            return this.ts;
        },
        getUSG(){
            return this.usg;
        },
        getPRebDef(){
            return this.p_reb_def;
        },
        getPRebOf(){
            return this.p_reb_of;
        },
        getPTotReb(){
            return this.p_tot_reb;
        },
        getPAssists(){
            return this.p_assists;
        },
        getAssistsTurnovers(){
            return this.assists_x_turnovers;
        },
        getAssistsRatio(){
            return this.assists_ratio;
        },
        getPSteals(){
            return this.p_steals;
        },
        getORTG(){
            return this.ortg;
        },
        getDRTG(){
            return this.drtg;
        },
        getNRTG(){
            return this.nrtg;
        },
        getDateUpdate(){
            return this.date_update;
        }
    },
    setterMethods: {
        setIDPlayerTeam(value){
            this.setDataValue("id_player_team", value);
        },
        setIDCompetition(value){
            this.setDataValue("id_competition", value);
        },
        setDRE(value){
            this.setDataValue("dre", value);
        },
        setGameScore(value){
            this.setDataValue("game_score", value);
        },
        setPER(value){
            this.setDataValue("per", value);
        },
        setETC(value){
            this.setDataValue("etc", value);
        },
        setTS(value){
            this.setDataValue("ts", value);
        },
        setUSG(value){
            this.setDataValue("usg", value);
        },
        setPRebDef(value){
            this.setDataValue("p_reb_def", value);
        },
        setPRebOf(value){
            this.setDataValue("p_reb_of", value);
        },
        setPTotReb(value){
            this.setDataValue("p_tot_reb", value);
        },
        setPAssists(value){
            this.setDataValue("p_assists", value);
        },
        setAssistsTurnovers(value){
            this.setDataValue("assists_x_turnovers", value);
        },
        setAssistsRatio(value){
            this.setDataValue("assists_ratio", value);
        },
        setPSteals(value){
            this.setDataValue("p_steals", value);
        },
        setORTG(value){
            this.setDataValue("ortg", value);
        },
        setDRTG(value){
            this.setDataValue("drtg", value);
        },
        setNRTG(value){
            this.setDataValue("nrtg", value);
        },
        setDateUpdate(value){
            this.setDataValue("date_update", value);
        }
    }
});

module.exports.FEBPCAdvStats = FEBPCAdvStats;
module.exports.FIBAPCAdvStats = FIBAPCAdvStats;