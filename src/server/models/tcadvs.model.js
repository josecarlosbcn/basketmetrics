import Sequelize from "sequelize";
import {FEBConnection, FIBAConnection} from "../db";

const FEBTeamCompetitionAdvancedStats = FEBConnection.db.define("tbl028_tc_adv_stats", {
        id_team_club: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        id_competition: {
            type: Sequelize.INTEGER,
            notNull: true,
            notEmpty: true        
        },
        etc: {
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
        p_turnovers: {
            type: Sequelize.DECIMAL,
            notNull: true,
            notEmpty: true
        },
        ratio_ft: {
            type: Sequelize.DECIMAL,
            notNull: true,
            notEmpty: true
        },
        possessions: {
            type: Sequelize.DECIMAL,
            notNull: true,
            notEmpty: true
        },
        possessions_x_minute: {
            type: Sequelize.DECIMAL,
            notNull: true,
            notEmpty: true
        },
        assists_x_turnovers: {
            type: Sequelize.DECIMAL,
            notNull: true,
            notEmpty: true
        },
        steals_x_turnovers: {
            type: Sequelize.DECIMAL,
            notNull: true,
            notEmpty: true
        },
        ts: {
            type: Sequelize.DECIMAL,
            notNull: true,
            notEmpty: true
        },
        rival_p_etc: {
            type: Sequelize.DECIMAL,
            notNull: true,
            notEmpty: true
        },
        rival_p_turnovers: {
            type: Sequelize.DECIMAL,
            notNull: true,
            notEmpty: true
        },
        rival_ratio_ft: {
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
            getIDTeamClub(){
                return this.id_team_club;
            },
            getIDCompetition(){
                return this.id_competition;
            },
            getETC(){
                return this.etc;
            },
            getPRebDef(){
                return this.p_reb_def;
            },
            getRebOf(){
                return this.p_reb_of;
            },
            getPTurnovers(){
                return this.p_turnovers;
            },
            getRatioTF(){
                return history.ratio_ft;
            },
            getPossessions(){
                return this.possessions;
            },
            getPossessionsPerMinute(){
                return this.possessions_x_minute;
            },
            getAssistsPerTurnover(){
                return this.assists_x_turnovers;
            },
            getStealsPerTurnover(){
                return this.steals_x_turnovers;
            },
            getTS(){
                return this.ts;
            },
            getRivalPercentageETC(){
                return this.rival_p_etc;
            },
            getRivalPercentageTurnovers(){
                return this.rival_p_turnovers;
            },
            getRivalRatioFT(){
                return this.rival_ratio_ft;
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
            setIDTeamClub(value){
                this.setDataValue("id_team_club", value);
            },
            setIDCompetition(value){
                this.setDataValue("id_competition", value);
            },
            setETC(value){
                this.setDataValue("etc", value);
            },
            setPRebDef(value){
                this.setDataValue("p_reb_def", value);
            },
            setPRebOf(value){
                this.setDataValue("p_reb_of", value);
            },
            setPTurnovers(value){
                this.setDataValue("p_turnovers", value);
            },
            setRatioFT(value){
                this.setDataValue("ratio_ft", value);
            },
            setPossessions(value){
                this.setDataValue("possessions", value);
            },
            setPossessionsPerMinute(value){
                this.setDataValue("possessions_x_minute", value);
            },
            setAssistsPerTurnover(value){
                this.setDataValue("assists_x_turnovers", value);
            },
            setStealsPerTurnover(value){
                this.setDataValue("steals_x_turnovers", value);
            },
            setTS(value){
                this.setDataValue("ts", value);
            },
            setRivalPercenageETC(value){
                this.setDataValue("rival_p_etc", value);
            },
            setRivalPercentageTurnovers(value){
                this.setDataValue("rival_p_turnovers", value);
            },
            setRivalRatioFT(value){
                this.setDataValue("rival_ratio_ft", value);
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
    }
);

const FIBATeamCompetitionAdvancedStats = FIBAConnection.db.define("tbl028_tc_adv_stats", {
        id_team_club: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        id_competition: {
            type: Sequelize.INTEGER,
            notNull: true,
            notEmpty: true        
        },
        etc: {
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
        p_turnovers: {
            type: Sequelize.DECIMAL,
            notNull: true,
            notEmpty: true
        },
        ratio_ft: {
            type: Sequelize.DECIMAL,
            notNull: true,
            notEmpty: true
        },
        possessions: {
            type: Sequelize.DECIMAL,
            notNull: true,
            notEmpty: true
        },
        possessions_x_minute: {
            type: Sequelize.DECIMAL,
            notNull: true,
            notEmpty: true
        },
        assists_x_turnovers: {
            type: Sequelize.DECIMAL,
            notNull: true,
            notEmpty: true
        },
        steals_x_turnovers: {
            type: Sequelize.DECIMAL,
            notNull: true,
            notEmpty: true
        },
        ts: {
            type: Sequelize.DECIMAL,
            notNull: true,
            notEmpty: true
        },
        rival_p_etc: {
            type: Sequelize.DECIMAL,
            notNull: true,
            notEmpty: true
        },
        rival_p_turnovers: {
            type: Sequelize.DECIMAL,
            notNull: true,
            notEmpty: true
        },
        rival_ratio_ft: {
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
            getIDTeamClub(){
                return this.id_team_club;
            },
            getIDCompetition(){
                return this.id_competition;
            },
            getETC(){
                return this.etc;
            },
            getPRebDef(){
                return this.p_reb_def;
            },
            getRebOf(){
                return this.p_reb_of;
            },
            getPTurnovers(){
                return this.p_turnovers;
            },
            getRatioFT(){
                return history.ratio_ft;
            },
            getPossessions(){
                return this.possessions;
            },
            getPossessionsPerMinute(){
                return this.possessions_x_minute;
            },
            getAssistsPerTurnover(){
                return this.assists_x_turnovers;
            },
            getStealsPerTurnover(){
                return this.steals_x_turnovers;
            },
            getTS(){
                return this.ts;
            },
            getRivalPercentageETC(){
                return this.rival_p_etc;
            },
            getRivalPercentageTurnovers(){
                return this.rival_p_turnovers;
            },
            getRivalRatioFT(){
                return this.rival_ratio_ft;
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
            setIDTeamClub(value){
                this.setDataValue("id_team_club", value);
            },
            setIDCompetition(value){
                this.setDataValue("id_competition", value);
            },
            setETC(value){
                this.setDataValue("etc", value);
            },
            setPRebDef(value){
                this.setDataValue("p_reb_def", value);
            },
            setPRebOf(value){
                this.setDataValue("p_reb_of", value);
            },
            setPTurnovers(value){
                this.setDataValue("p_turnovers", value);
            },
            setRatioFT(value){
                this.setDataValue("ratio_ft", value);
            },
            setPossessions(value){
                this.setDataValue("possessions", value);
            },
            setPossessionsPerMinute(value){
                this.setDataValue("possessions_x_minute", value);
            },
            setAssistsPerTurnover(value){
                this.setDataValue("assists_x_turnovers", value);
            },
            setStealsPerTurnover(value){
                this.setDataValue("steals_x_turnovers", value);
            },
            setTS(value){
                this.setDataValue("ts", value);
            },
            setRivalPercenageETC(value){
                this.setDataValue("rival_p_etc", value);
            },
            setRivalPercentageTurnovers(value){
                this.setDataValue("rival_p_turnovers", value);
            },
            setRivalRatioFT(value){
                this.setDataValue("rival_ratio_ft", value);
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
    }
);

module.exports.FEBTeamCompetitionAdvancedStats = FEBTeamCompetitionAdvancedStats;
module.exports.FIBATeamCompetitionAdvancedStats = FIBATeamCompetitionAdvancedStats;