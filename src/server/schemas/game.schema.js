import { 
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLString
} from "graphql";
import {DateTime} from "../scalar/dateTime";

const Game = new GraphQLObjectType({
    name: "Game",
    description: "Data of a game",
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of the game",
                resolve(g){
                    return g.id;
                }
            },
            id_game_feb: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of the FEB for the game",
                resolve(g){
                    return g.id_game_feb;
                }
            },
            id_jornada: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of jornada",
                resolve(g){
                    return g.id_jornada;
                }
            },
            id_team_home: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of home team",
                resolve(g){
                    return g.id_team_home;
                }
            },
            home_team: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of the home team",
                resolve(g){
                    return g.home_team;
                }
            },
            abrev_home: {
                type: GraphQLString,
                description: "Abrevitature of the home team",
                resolve(g){
                    return g.abrev_home;
                }
            },
            home_url_name: {
                type: GraphQLString,
                description: "URL Name of the team",
                resolve(g){
                    return g.home_url_name;
                }
            },
            home_score: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Score of the home team",
                resolve(g){
                    return g.home_score;
                }
            },
            id_team_away: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of the away team",
                resolve(g){
                    return g.id_team_away;
                }
            },
            away_team: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of the away_team",
                resolve(g){
                    return g.away_team;
                }
            },
            abrev_away: {
                type: GraphQLString,
                description: "Abreviature of the away team",
                resolve(g){
                    return g.abrev_away;
                }
            },
            away_url_name: {
                type: GraphQLString,
                description: "URL name of away team",
                resolve(g){
                    return g.away_url_name;
                }
            },
            away_score: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Score of the away team",
                resolve(g){
                    return g.away_score;
                }
            },
            place: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Place of the game",
                resolve(g){
                    return g.place;
                }
            },
            date_game: {
                type: new GraphQLNonNull(DateTime),
                description: "Date of the game",
                resolve(g){
                    return g.date_game;
                }
            },
            audience: {
                type: GraphQLInt,
                description: "Total audience of the game",
                resolve(g){
                    return g.audience;
                }
            }
        };
    }
});

module.exports.Game = Game;