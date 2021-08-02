import { 
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean, 
    GraphQLFloat
} from "graphql";
import {DateTime} from "../scalar/dateTime";

const BoxScore = new GraphQLObjectType({
    name: "BoxScore",
    description: "Boxscore of a game and team",
    fields: () => {
        return{
            id_game: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of the game",
                resolve(b){
                    return b.id_game;
                }                
            },
            id_player_team: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of the player in a team",
                resolve(b){
                    return b.id_player_team;
                }
            },
            team_name: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of the team which belongs the player",
                resolve(b){
                    return b.team_name;
                }
            },
            name: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of the player",
                resolve(b){
                    return b.name;
                }
            },
            numero: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Number of the player",
                resolve(b){
                    return b.numero;
                }
            },
            titular: {
                type: new GraphQLNonNull(GraphQLBoolean),
                description: "Flag which indicates that the player has been starter or no. 1: Starter, 0: No starter",
                resolve(b){
                    return b.titular;
                }
            },
            minutes: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Minutes played by the player",
                resolve(b){
                    return b.minutes;
                }
            },
            seconds: {
                type: GraphQLInt,
                description: "Seconds played by the player",
                resolve(b){
                    return b.seconds;
                }
            },
            points: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Points",
                resolve(b){
                    return b.points;
                }
            },
            t2p_conv: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "2 points converted",
                resolve(b){
                    return b.t2p_conv;
                }
            },
            t2p_int: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "2 points attempted",
                resolve(b){
                    return b.t2p_int;
                }
            },
            t2pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "2 points percentage",
                resolve(b){
                    return b.t2pp;
                }
            },
            t3p_conv: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "3 points converted",
                resolve(b){
                    return b.t3p_conv;
                }
            },
            t3p_int: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "3 points attempted",
                resolve(b){
                    return b.t3p_int;
                }
            },
            t3pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "3 points percentage",
                resolve(b){
                    return b.t3pp;
                }
            },
            tc_conv: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Field Goal converted",
                resolve(b){
                    return b.tc_conv;
                }
            },
            tc_int: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Field Goal attempted",
                resolve(b){
                    return b.tc_int;
                }
            },
            tcp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Field Goal percentage",
                resolve(b){
                    return b.tcp;
                }
            },
            tl_conv: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "FT converted",
                resolve(b){
                    return b.tl_conv;
                }
            },
            tl_int: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "FT attempted",
                resolve(b){
                    return b.tl_int;
                }
            },
            tlp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "FT percentage",
                resolve(b){
                    return b.tlp;
                }
            },
            reb_def: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Defensive rebounds captured by the plyer",
                resolve(b){
                    return b.reb_def;
                }
            },
            reb_of: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Offensive rebounds captured by the player",
                resolve(b){
                    return b.reb_of;
                }
            },
            total_rebounds: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total rebounds",
                resolve(b){
                    return b.total_rebounds;
                }
            },
            assists: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Assits",
                resolve(b){
                    return b.assists;
                }
            },
            steals: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Steals",
                resolve(b){
                    return b.steals;
                }
            },
            turnovers: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Turnovers",
                resolve(b){
                    return b.turnovers;
                }
            },
            block_shots: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Block Shots",
                resolve(b){
                    return b.block_shots;
                }
            },
            fouls_cm: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Fouls commited",
                resolve(b){
                    return b.fouls_cm;
                }
            },
            fouls_rv: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Fouls committed",
                resolve(b){
                    return b.fouls_rv;
                }
            },
            efficience: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Efficience of the player in the game",
                resolve(b){
                    return b.efficience;
                }
            },
            benefit: {
                type: GraphQLFloat,
                description: "Benefit of the player",
                resolve(b){
                    return b.benefit;
                }
            },
            date_insert: {
                type: new GraphQLNonNull(DateTime),
                description: "Date of insert of the data",
                resolve(b){
                    return b.date_insert;
                }
            }
        };
    }
});

module.exports.BoxScore = BoxScore;