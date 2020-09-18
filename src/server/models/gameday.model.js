import Sequelize from "sequelize";
import {FEBConnection, FIBAConnection} from "../db";

const FEBGamedayModel = FEBConnection.db.define("tbl004_jornada", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        id_competition: {
            type: Sequelize.INTEGER,
            notEmpty: true,
            notNull: true
        },
        id_jornada_feb: {
            type: Sequelize.INTEGER,
            notEmpty: true,
            notNull: true
        },
        num_jornada: {
            type: Sequelize.INTEGER,
            notEmpty: true,
            notNull: true
        },
        date: {
            type: Sequelize.DATE,
            notEmpty: true,
            notNull: true
        },
        date_insert: {
            type: Sequelize.DATE,
            notEmpty: true,
            notNull: true
        }
    },
    {
        getterMethods: {
            getID(){
                return this.id
            },
            getIDCompetition(){
                return this.id_competition
            },
            getIDJornadaFEB(){
                return this.id_jornada_feb
            },
            getNumJornada(){
                return this.num_jornada
            },
            getDate(){
                return this.date
            },
            getDateInsert(){
                return this.date_insert
            }
        },
        setterMethods: {
            setID(value){
                this.setDataValue("id", value);
            },
            setIDCompetition(value){
                this.setDataValue("id_competition", value)
            },
            setIDJornadaFEB(value){
                this.setDataValue("id_jornada_feb", value)
            },
            setNumJornada(value){
                this.setDataValue("num_jornada". value)
            },
            setData(value){
                this.setDataValue("data", value)
            },
            setDateInsert(value){
                this.setDataValue("date_insert", value)
            }
        }
    }
);

const FIBAGamedayModel = FIBAConnection.db.define("tbl004_jornada", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        notNull: true
    },
    id_competition: {
        type: Sequelize.INTEGER,
        notEmpty: true,
        notNull: true
    },
    id_jornada_feb: {
        type: Sequelize.INTEGER,
        notEmpty: false,
        notNull: false
    },
    num_jornada: {
        type: Sequelize.INTEGER,
        notEmpty: true,
        notNull: true
    },
    date: {
        type: Sequelize.DATE,
        notEmpty: true,
        notNull: true
    },
    date_insert: {
        type: Sequelize.DATE,
        notEmpty: true,
        notNull: true
    }
},
{
    getterMethods: {
        getID(){
            return this.id
        },
        getIDCompetition(){
            return this.id_competition
        },
        getIDJornadaFEB(){
            return this.id_jornada_feb
        },
        getNumJornada(){
            return this.num_jornada
        },
        getDate(){
            return this.date
        },
        getDateInsert(){
            return this.date_insert
        }
    },
    setterMethods: {
        setID(value){
            this.setDataValue("id", value);
        },
        setIDCompetition(value){
            this.setDataValue("id_competition", value)
        },
        setIDJornadaFEB(value){
            this.setDataValue("id_jornada_feb", value)
        },
        setNumJornada(value){
            this.setDataValue("num_jornada". value)
        },
        setData(value){
            this.setDataValue("data", value)
        },
        setDateInsert(value){
            this.setDataValue("date_insert", value)
        }
    }
}
);

module.exports.FEBGamedayModel = FEBGamedayModel;
module.exports.FIBAGamedayModel = FIBAGamedayModel;