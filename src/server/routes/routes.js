import {Router} from "express";
import GraphHTTP from "express-graphql";
import NoIntrospection from "graphql-disable-introspection";
import {SchemaFEB} from "../schemas/schema.feb";
import {SchemaFIBA} from "../schemas/schema.fiba";
import {FEBPlayerModel, FIBAPlayerModel} from "../models/player.model";  /** It's mandatory because is used by Schema */
import {FEBNextGamedayLF1Model, 
        FEBNextGamedayLF2Model,
        FIBANextGamedayEuroleagueModel,
        FIBANextGamedayEurocupModel } from "../models/nextgameday.model";      /** It's mandatory because is used by Schema */
import {FEBTeamClubModel,
        FIBATeamClubModel} from "../models/teamclub.model"; /** It's mandatory because is used by Schema */
import {FEBTeamCompetitionAdvancedStats,
        FIBATeamCompetitionAdvancedStats} from "../models/tcadvs.model";    /** It's mandatory because is used by Schema */
import { FEBPCStdStats, FIBAPCStdStats } from "../models/pcstds.model";     /** It's mandatory because is used by Schema */
import { FEBPCAdvStats, FIBAPCAdvStats} from "../models/pcadvs.model";      /** It's mandatory because is used by Schema */
import { FEBSeasonsModel, FIBASeasonsModel } from "../models/seasons.model";    /** It's mandatory because is used by Schema */
import { FEBTeamCompetitionStandardStats, FIBATeamCompetitionStandardStats } from "../models/tcstds.model"; /** It's mandatory because is used by Schema */
import { FEBGamedayModel, FIBAGamedayModel }  from "../models/gameday.model";
/** It's mandatory because is used by Schema  when we make querys like
this:  FEBConnection.db.models.tbl012_competition.findAll({where: args}) */
import { FEBCompetitionModel, FIBACompetitionModel } from "../models/competition.model"; 
 /** It's mandatory because is used by Schema  when we make querys like
this:  FEBConnection.db.models.tbl009_team_adv_stats.findAll({where: args}) */
import { FEBTeamGameAdvancedStats, FIBATeamGameAdvancedStats} from "../models/tgadvs.model";
/** It's mandatory because is used by Schema  when we make querys like
this:  FEBConnection.db.models.tbl016_quarters.findAll({where: args}) */
import { FEBQuarterModel, FIBAQuarterModel } from "../models/quarters.model";
/** It's mandatory because is used by Schema  when we make querys like
this:  FEBConnection.db.models.tbl034_team_group.findAll({where: args}) */
import { FEBTeamGroupModel, FIBATeamGroupModel } from "../models/teamgroup.model";
import path from "path";
import cors from "cors";
//import { RootRef } from "@material-ui/core";
//To import environment variables
/* import config from "dotenv";
config.config();  */

const router = Router();

const corsOptions = {
    origin: (process.env.NODE_ENV === "development") ? process.env.URL_FRONT_END_SERVER : ["http://www.basketmetrics.com", "http://basketmetrics.com"],
    optionSuccessStatus: 200,
    methods: ["POST", "OPTIONS"],
};



/* console.log("Routers NODE_ENV: " + process.env.NODE_ENV);
const whitelist = ["http://wwww.basketmetrics.com", "http://basketmetrics.com"];

const corsOptions = {
    origin: function (origin, callback) {
      console.log("origin: " + origin);
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    optionSuccessStatus: 200,
    methods: ["POST", "OPTIONS"]
  };  */

/* const whitelist = ["http://www.basketmetrics.com", "http://basketmetrics.com"];
const corsOptions = {
  origin: function (origin, callback) {
    console.log("origin: " + origin);
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionSuccessStatus: 200,
  methods: ["POST", "OPTIONS"]
}; */


/**
 * We don't need to create a router for statics files like html, js, css, images, etc, because all that files are served
 * with the command app.use(express.static("public")); that we've got in the file /src/server/server.js
 */
/* router.get("/", (req, res) => {
    //res.send("Hello World!!!");
    res.sendFile("/dist/index.html");
}); */

router.all("*", cors(corsOptions));

router.get(/^\/liga-femenina-(1|2)\/?\w*$/, (req, res) => {
    console.log("route: " + path.resolve(__dirname, "../../../dist/index.html"));
    res.sendFile(path.resolve(__dirname, "../../../dist/index.html"));
});

router.get(/^\/liga-femenina-(1|2)\/previa\/[A-Z-]*\/\d*$/, (req, res) => {
    console.log("route: " + path.resolve(__dirname, "../../../dist/index.html"));
    res.sendFile(path.resolve(__dirname, "../../../dist/index.html"));
});

router.get(/^\/liga-femenina-(1|2)\/equipo\/estadisticas-estandard\/[A-Z-]*\/\d*$/, (req, res) => {
    console.log("route: " + path.resolve(__dirname, "../../../dist/index.html"));
    res.sendFile(path.resolve(__dirname, "../../../dist/index.html"));
});

router.get(/^\/liga-femenina-(1|2)\/equipo\/estadisticas-avanzadas\/[A-Z-]*\/\d*$/, (req, res) => {
    console.log("route: " + path.resolve(__dirname, "../../../dist/index.html"));
    res.sendFile(path.resolve(__dirname, "../../../dist/index.html"));
});

router.get(/^\/liga-femenina-(1|2)\/partido\/estadisticas-estandard\/[A-Z-]*\/\d*$/, (req, res) => {
    console.log("route: " + path.resolve(__dirname, "../../../dist/index.html"));
    res.sendFile(path.resolve(__dirname, "../../../dist/index.html"));
});

router.get(/^\/liga-femenina-(1|2)\/partido\/estadisticas-avanzadas\/[A-Z-]*\/\d*$/, (req, res) => {
    console.log("route: " + path.resolve(__dirname, "../../../dist/index.html"));
    res.sendFile(path.resolve(__dirname, "../../../dist/index.html"));
});

router.get(/^\/women-(euroleague|eurocup)\/?\w*$/, (req, res) => {
    console.log("route: " + path.resolve(__dirname, "../../../dist/index.html"));
    res.sendFile(path.resolve(__dirname, "../../../dist/index.html"));
});

router.get(/^\/women-(euroleague|eurocup)\/previa\/[A-Z-]*\/\d*$/, (req, res) => {
    console.log("route: " + path.resolve(__dirname, "../../../dist/index.html"));
    res.sendFile(path.resolve(__dirname, "../../../dist/index.html"));
});

router.get(/^\/women-(euroleague|eurocup)\/equipo\/estadisticas-estandard\/[A-Z-]*\/\d*$/, (req, res) => {
    console.log("route: " + path.resolve(__dirname, "../../../dist/index.html"));
    res.sendFile(path.resolve(__dirname, "../../../dist/index.html"));
});

router.get(/^\/women-(euroleague|eurocup)\/equipo\/estadisticas-avanzadas\/[A-Z-]*\/\d*$/, (req, res) => {
    console.log("route: " + path.resolve(__dirname, "../../../dist/index.html"));
    res.sendFile(path.resolve(__dirname, "../../../dist/index.html"));
});

router.get(/^\/women-(euroleague|eurocup)\/game\/standard-stats\/[A-Z-]*\/\d*$/, (req, res) => {
    console.log("route: " + path.resolve(__dirname, "../../../dist/index.html"));
    res.sendFile(path.resolve(__dirname, "../../../dist/index.html"));
});

router.get(/^\/women-(euroleague|eurocup)\/game\/advanced-stats\/[A-Z-]*\/\d*$/, (req, res) => {
    console.log("route: " + path.resolve(__dirname, "../../../dist/index.html"));
    res.sendFile(path.resolve(__dirname, "../../../dist/index.html"));
});

router.get("/aviso", (req, res) => {
    console.log("route: " + path.resolve(__dirname, "../../../dist/index.html"));
    res.sendFile(path.resolve(__dirname, "../../../dist/index.html"));
});

router.get("/contacto", (req, res) => {
    console.log("route: " + path.resolve(__dirname, "../../../dist/index.html"));
    res.sendFile(path.resolve(__dirname, "../../../dist/index.html"));
});

router.get("/glosario", (req, res) => {
    console.log("route: " + path.resolve(__dirname, "../../../dist/index.html"));
    res.sendFile(path.resolve(__dirname, "../../../dist/index.html"));
});


router.get("/api", (req, res) => {
    res.json({text: "Hello World from API!!!"});
});

//API
router.get("/api/feb/graphiql", GraphHTTP({
    schema: SchemaFEB,
    pretty: true,
    graphiql: (process.env.NODE_ENV === "development") ? true : false, //We have to change to false to production to avoid to show the interface
    validationRules: [NoIntrospection]
}));

router.post("/api/feb/graphiql", GraphHTTP({
    schema: SchemaFEB,
    pretty: true,
    graphiql: (process.env.NODE_ENV === "development") ? true : false, //We have to change to false to production to avoid to show the interface
    validationRules: [NoIntrospection]
}));

router.get("/api/fiba/graphiql", GraphHTTP({
    schema: SchemaFIBA,
    pretty: true,
    graphiql: (process.env.NODE_ENV === "development") ? true : false, //We have to change to false to production to avoid to show the interface
    validationRules: [NoIntrospection]
}));

router.post("/api/fiba/graphiql", GraphHTTP({
    schema: SchemaFIBA,
    pretty: true,
    graphiql: (process.env.NODE_ENV === "development") ? true : false, //We have to change to false to production to avoid to show the interface
    validationRules: [NoIntrospection]
}));    


module.exports.Routes = router;