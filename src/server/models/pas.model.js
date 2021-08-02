import Sequelize from "sequelize";
import {FEBConnection, FIBAConnection} from "../db";

const FEBPlayerAdvStats = FEBConnection.db.define("tbl013_player_adv_stats", {
    id_player_team: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        notNull: true,
        notEmpty: true
    },
    id_game: {
        type: Sequelize.INTEGER,
        notNull: true,
        notEmpty: true
    },
    id_competition: {
        type: Sequelize.INTEGER,
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
        notNull: true,
        notEmpty: true
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
        notEmpy: true
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
    date_insert: {
        type: Sequelize.DATE,
        notNull: true,
        notEmpty: true
    }
},{
    getterMethods: {
        getIDPlayerTeam(){
            return this.id_player_team;
        },
        getIDGame(){
            return this.id_game;
        },
        getIDCompetition(){
            return this.id_competition;
        },
        getDRE(){
            return this.dre;
        },
        getGameScore(){
            return this.game_score;
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
        }
    },
    setterMethos: {
        setIDPlayerTeam(value){
            this.setDataValue("id_player_team", value);
        },
        setIDGame(){
            this.setDataValue("id_game", value);
        },
        setIDCompetition(){
            this.setDataValue("id_competition", value);
        },
        setDRE(){
            this.setDataValue("dre", value);
        },
        setGameScore(){
            this.setDataValue("game_score", value);
        },
        setPER(){
            this.setDataValue("per", value);
        },
        setETC(){
            this.setDataValue("etc", value);
        },
        setTS(){
            this.setDataValue("ts", value);
        },
        setUSG(){
            this.setDataValue("usg", value);
        },
        setPRebDef(){
            this.setDataValue("p_reb_def", value);
        },
        setPRebOf(){
            this.setDataValue("p_reb_of", value);
        },
        setPTotReb(){
            this.setDataValue("p_tot_reb", value);
        },
        setPAssists(){
            this.setDataValue("p_assists", value);
        },
        setAssistsTurnovers(){
            this.setDataValue("assists_x_turnovers", value);
        },
        setAssistsRatio(){
            this.setDataValue("assists_ratio", value);
        },
        setPSteals(){
            this.setDataValue("p_steals", value);
        },
        setORTG(){
            this.setDataValue("ortg", value);
        },
        setDRTG(){
            this.setDataValue("drtg", value);
        },
        setNRTG(){
            this.setDataValue("nrtg", value);
        }
    }
});

const FIBAPlayerAdvStats = FIBAConnection.db.define("tbl013_player_adv_stats", {
    id_player_team: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        notNull: true,
        notEmpty: true
    },
    id_game: {
        type: Sequelize.INTEGER,
        notNull: true,
        notEmpty: true
    },
    id_competition: {
        type: Sequelize.INTEGER,
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
        notNull: true,
        notEmpty: true
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
        notEmpy: true
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
    date_insert: {
        type: Sequelize.DATE,
        notNull: true,
        notEmpty: true
    }
},{
    getterMethods: {
        getIDPlayerTeam(){
            return this.id_player_team;
        },
        getIDGame(){
            return this.id_game;
        },
        getIDCompetition(){
            return this.id_competition;
        },
        getDRE(){
            return this.dre;
        },
        getGameScore(){
            return this.game_score;
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
        }
    },
    setterMethos: {
        setIDPlayerTeam(value){
            this.setDataValue("id_player_team", value);
        },
        setIDGame(){
            this.setDataValue("id_game", value);
        },
        setIDCompetition(){
            this.setDataValue("id_competition", value);
        },
        setDRE(){
            this.setDataValue("dre", value);
        },
        setGameScore(){
            this.setDataValue("game_score", value);
        },
        setPER(){
            this.setDataValue("per", value);
        },
        setETC(){
            this.setDataValue("etc", value);
        },
        setTS(){
            this.setDataValue("ts", value);
        },
        setUSG(){
            this.setDataValue("usg", value);
        },
        setPRebDef(){
            this.setDataValue("p_reb_def", value);
        },
        setPRebOf(){
            this.setDataValue("p_reb_of", value);
        },
        setPTotReb(){
            this.setDataValue("p_tot_reb", value);
        },
        setPAssists(){
            this.setDataValue("p_assists", value);
        },
        setAssistsTurnovers(){
            this.setDataValue("assists_x_turnovers", value);
        },
        setAssistsRatio(){
            this.setDataValue("assists_ratio", value);
        },
        setPSteals(){
            this.setDataValue("p_steals", value);
        },
        setORTG(){
            this.setDataValue("ortg", value);
        },
        setDRTG(){
            this.setDataValue("drtg", value);
        },
        setNRTG(){
            this.setDataValue("nrtg", value);
        }
    }
});

module.exports.FEBPlayerAdvStats = FEBPlayerAdvStats;
module.exports.FIBAPlayerAdvStats = FIBAPlayerAdvStats;