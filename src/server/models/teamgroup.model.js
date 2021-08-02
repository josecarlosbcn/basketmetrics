import Sequelize from "sequelize";
import {FEBConnection, FIBAConnection} from "../db";


const FEBTeamGroupModel = FEBConnection.db.define("tbl034_team_group", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        id_group: {
            type: Sequelize.INTEGER,
            notNull: true
        },
        id_team_club: {
            type: Sequelize.INTEGER,
            notNull: true
        },
        date_insert: {
            type: Sequelize.DATE,
            notNull: true,
            notEmpty: true
        }
    }, {
        getterMethods: {
            getID(){
                return this.id;
            },
            getIDGroup(){
                return this.id_group;
            },
            getIDTeamClub(){
                return this.id_team_club;
            },
            getDataInsert(){
                return this.date_insert;
            }
        },
        setterMethods: {
            setID(value){
                this.setDataValue("id", value);
            },
            setIDGroup(value){
                this.setDataValue("id_group", value);
            },
            setIDTeamClub(value){
                this.setDataValue("id_team_club", value);
            },
            setDateInsert(value){
                this.setDataValue("date_insert", value);
            }
        }
    }
);

const FIBATeamGroupModel = FIBAConnection.db.define("tbl034_team_group", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        id_group: {
            type: Sequelize.INTEGER,
            notNull: true
        },
        id_team_club: {
            type: Sequelize.INTEGER,
            notNull: true
        },
        date_insert: {
            type: Sequelize.DATE,
            notNull: true,
            notEmpty: true
        }
    }, {
        getterMethods: {
            getID(){
                return this.id;
            },
            getIDGroup(){
                return this.id_group;
            },
            getIDTeamClub(){
                return this.id_team_club;
            },
            getDataInsert(){
                return this.date_insert;
            }
        },
        setterMethods: {
            setID(value){
                this.setDataValue("id", value);
            },
            setIDGroup(value){
                this.setDataValue("id_group", value);
            },
            setIDTeamClub(value){
                this.setDataValue("id_team_club", value);
            },
            setDateInsert(value){
                this.setDataValue("date_insert", value);
            }
        }
    }
);

module.exports.FEBTeamGroupModel = FEBTeamGroupModel;
module.exports.FIBATeamGroupModel = FIBATeamGroupModel;