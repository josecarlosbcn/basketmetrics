import Sequelize from "sequelize";
import {FEBConnection, FIBAConnection} from "../db";

const FEBPlayerModel = FEBConnection.db.define("tbl003_player", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        name: {
            type: Sequelize.STRING,
            notNull: true,
            notEmpty: true
        },
        name_url: {
            type: Sequelize.STRING,
            notNull: true,
            notEmpty: true
        },
        language: {
            type: Sequelize.STRING,
            notNull: true,
            notEmpty: true,
            isIn: {
                args: [["es", "en"]],
                msg: "Must be 'es' or 'en'"
            }
        },
        twitter: {
            type: Sequelize.STRING,
            notEmpty: false
        },
        height: {
            type: Sequelize.INTEGER,
            isDecimal: false,
            notEmpty: false
        },
        birthday: {
            type: Sequelize.DATE,
            notEmpty: false
        },
        date_insert: {
            type: Sequelize.DATE,
            notNull: true,
            notEmpty: true
        }
    }, {
        getterMethods: {
            getID(){
                return this.id
            },
            getName(){
                return this.name
            },
            getNameURL(){
                return this.url
            },
            getLanguage(){
                return this.language
            },
            getTwitter(){
                return this.twitter
            },
            getHeight(){
                return this.height
            },
            getBirthday(){
                return this.birthday
            },
            getDateInsert(){
                return this.date_insert
            }
        },
        setterMethods: {
            setName(value){
                this.setDataValue("name", value)
            },
            setNameURL(value){
                this.setDataValue("name_url", value)
            },
            setLanguage(value){
                this.setDataValue("language", value)
            },
            setTwitter(value){
                this.setDataValue("twitter", value)
            },
            setHeight(value){
                this.setDataValue("height", value)
            },
            setBirthday(value){
                this.setDataValue("birthday", value)
            },
            setDateInsert(value){
                this.setDataValue("date_insert", value)
            }
        }
    }
);

const FIBAPlayerModel = FIBAConnection.db.define("tbl003_player", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        name: {
            type: Sequelize.STRING,
            notNull: true,
            notEmpty: true
        },
        name_url: {
            type: Sequelize.STRING,
            notNull: true,
            notEmpty: true
        },
        language: {
            type: Sequelize.STRING,
            notNull: true,
            notEmpty: true,
            isIn: {
                args: [["es", "en"]],
                msg: "Must be 'es' or 'en'"
            }
        },
        twitter: {
            type: Sequelize.STRING,
            notEmpty: false
        },
        height: {
            type: Sequelize.INTEGER,
            isDecimal: false,
            notEmpty: false
        },
        birthday: {
            type: Sequelize.DATE,
            notEmpty: false
        },
        date_insert: {
            type: Sequelize.DATE,
            notNull: true,
            notEmpty: true
        }
    }, {
        getterMethods: {
            getID(){
                return this.id
            },
            getName(){
                return this.name
            },
            getNameURL(){
                return this.url
            },
            getLanguage(){
                return this.language
            },
            getTwitter(){
                return this.twitter
            },
            getHeight(){
                return this.height
            },
            getBirthday(){
                return this.birthday
            },
            getDateInsert(){
                return this.date_insert
            }
        },
        setterMethods: {
            setName(value){
                this.setDataValue("name", value)
            },
            setNameURL(value){
                this.setDataValue("name_url", value)
            },
            setLanguage(value){
                this.setDataValue("language", value)
            },
            setTwitter(value){
                this.setDataValue("twitter", value)
            },
            setHeight(value){
                this.setDataValue("height", value)
            },
            setBirthday(value){
                this.setDataValue("birthday", value)
            },
            setDateInsert(value){
                this.setDataValue("date_insert", value)
            }
        }
    }
);


module.exports.FIBAPlayerModel = FIBAPlayerModel;
module.exports.FEBPlayerModel = FEBPlayerModel;