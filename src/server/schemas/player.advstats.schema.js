import { 
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLInt
} from "graphql";
import {DateTime} from "../scalar/dateTime";

const PlayerAdvStats = new GraphQLObjectType ({
    name: "PlayerAdvancedStats",
    description: "Advanced stats of a player in a game",
    fields: () => {
        return {
            id_team_club: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of team club",
                resolve(pas){
                    return pas.id_team_club;
                }
            },
            team_name: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of the team",
                resolve(pas){
                    return pas.team_name;
                }
            },
            numero: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Number of player",
                resolve(pas){
                    return pas.numero;
                }
            },
            name_player: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of the player",
                resolve(pas){
                    return pas.name_player;
                }
            },
            season_name: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of the season",
                resolve(pas){
                    return pas.season_name;
                }
            },
            id_player: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of the player",
                resolve(pas){
                    return pas.id_player;
                }
            },
            games: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Number of games played by a player",
                resolve(pas){
                    return pas.games;
                }
            },
            id_player_team: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of the player in a team",
                resolve(pas){
                    return pas.id_player_team;
                }
            },
            id_game: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of game",
                resolve(pas){
                    return pas.id_game;
                }
            },
            id_competition: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of competition",
                resolve(pas){
                    return pas.id_competition;
                }
            },
            dre: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "DRE",
                resolve(pas){
                    return pas.dre;
                }
            },
            game_score: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Game Score",
                resolve(pas){
                    return pas.game_score;
                }
            },
            per: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "PER",
                resolve(pas){
                    return pas.per;
                }
            },
            etc: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "%eTC",
                resolve(pas){
                    return pas.etc;
                }
            },
            ts: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "TS%",
                resolve(pas){
                    return pas.ts;
                }
            },
            usg: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "USG%",
                resolve(pas){
                    return pas.usg;
                }
            },
            p_reb_def: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of Defensive Rebounds",
                resolve(pas){
                    return pas.p_reb_def;
                }
            },
            p_reb_of: {
                type:new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of Offensive Rebounds",
                resolve(pas){
                    return pas.p_reb_of;
                }
            },
            p_tot_reb: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of Total Rebounds",
                resolve(pas){
                    return pas.p_tot_reb;
                }
            },
            p_assists: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of assists",
                resolve(pas){
                    return pas.p_assists;
                }
            },
            assists_x_turnovers: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Assists per turnovers",
                resolve(pas){
                    return pas.assists_x_turnovers;
                }
            },
            assists_ratio: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Assists Ratio",
                resolve(pas){
                    return pas.assists_ratio;
                }
            },
            p_steals: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of Steals",
                resolve(pas){
                    return pas.p_steals;
                }
            },
            ortg: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Offensive Ratio",
                resolve(pas){
                    return pas.ortg;
                }
            },
            drtg: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Defensive Ratio",
                resolve(pas){
                    return pas.drtg;
                }
            },
            nrtg: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Net ratio",
                resolve(pas){
                    return pas.nrtg;
                }
            },
            date_insert: {
                type: GraphQLNonNull(DateTime),
                description: "Date of insert of the playe in database",
                resolve(player){
                    return player.date_insert;
                }
            }
        };
    }
});

module.exports.PlayerAdvStats = PlayerAdvStats;