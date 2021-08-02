import { 
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLInt
} from "graphql";
import { GraphQLFloat } from "graphql/type";

const PlayerStdStats = new GraphQLObjectType ({
    name: "PlayerStdStats",
    description: "Standard stats of a player in a whole season",
    fields: () => {
        return {
            id_player: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of ṕlayer",
                resolve(pss){
                    return pss.id_player;
                }
            },
            id_player_team: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID player team",
                resolve(pss){
                    return pss.id_player_team;
                }
            },
            name_player: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of the player",
                resolve(pss){
                    return pss.name_player;
                }
            },
            season_name: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of the season",
                resolve(pss){
                    return pss.season_name;
                }
            },
            games: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Number of games played",
                resolve(pss){
                    return pss.games;
                }
            },
            minutes: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total minutes played",
                resolve(pss){
                    return pss.minutes;
                }
            },
            mpp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Minutes played by game",
                resolve(pss){
                    return pss.mpp;
                }
            },
            t2p_conv: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "2P made",
                resolve(pss){
                    return pss.t2p_conv;
                }
            },
            t2p_conv_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "2P made by game",
                resolve(pss){
                    return pss.t2p_conv_pp;
                }
            },
            t2p_int: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "2p attempted",
                resolve(pss){
                    return pss.t2p_int;
                }
            },
            t2p_int_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "2p attpemted by game",
                resolve(pss){
                    return pss.t2p_int_pp;
                }
            },
            t2p_percentage: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "2p percentage",
                resolve(pss){
                    return pss.t2p_percentage;
                }
            },
            t3p_conv: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "3p made",
                resolve(pss){
                    return pss.t3p_conv;
                }
            },
            t3p_conv_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "3p made per game",
                resolve(pss){
                    return pss.t3p_conv_pp;
                }
            },
            t3p_int: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "3p attempted",
                resolve(pss){
                    return pss.t3p_int;
                }
            },
            t3p_int_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "3p attepmted by game",
                resolve(pss){
                    return pss.t3p_int_pp;
                }
            },
            t3p_percentage: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "3p percentage",
                resolve(pss){
                    return pss.t3p_percentage;
                }
            },
            tc_conv: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Field goals converted",
                resolve(pss){
                    return pss.tc_conv;
                }
            },
            tc_conv_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Field goals converted per game",
                resolve(pss){
                    return pss.tc_conv_pp;
                }
            },
            tc_int: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Field goals attempted",
                resolve(pss){
                    return pss.tc_int;
                }
            },
            tc_int_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Filed goals attempted per game",
                resolve(pss){
                    return pss.tc_int_pp;
                }
            },
            tc_percentage: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Filed goals percentage",
                resolve(pss){
                    return pss.tc_percentage;
                }
            },
            tl_conv: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Free Throws made",
                resolve(pss){
                    return pss.tl_conv;
                }
            },
            tl_int: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Free Throws attempted",
                resolve(pss){
                    return pss.tl_int;
                }
            },
            tl_percentage: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Free Throws percentage",
                resolve(pss){
                    return pss.tl_percentage;
                }
            },
            tl_conv_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                descritpion: "Free throws made per game",
                resolve(pss){
                    return pss.tl_conv_pp;
                }
            },
            tl_int_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Free throws attempted per game",
                resolve(pss){
                    return pss.tl_int_pp;
                }
            },
            total_puntos: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total points",
                resolve(pss){
                    return pss.total_puntos;
                }
            },
            total_puntos_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Points per game",
                resolve(pss){
                    return pss.total_puntos_pp;
                }
            },
            p_t2p_puntos: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "% of points made from 2p",
                resolve(pss){
                    return pss.p_t2p_puntos;
                }
            },
            p_t3p_puntos: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "% of points made from 3p",
                resolve(pss){
                    return pss.p_t3p_puntos;
                }
            },
            p_tl_puntos: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "% of points made from free throws",
                resolve(pss){
                    return pss.p_tl_puntos;
                }
            },
            ppa: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Points per attempt to score",
                resolve(pss){
                    return pss.ppa;
                }
            },
            pointsbyposs: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Points by possession",
                resolve(pss){
                    return pss.pointsbyposs;
                }
            },
            rd: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Defensive Rebounds",
                resolve(pss){
                    return pss.rd;
                }
            },
            reb_def_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Defensive rebounds per game",
                resolve(pss){
                    return pss.reb_def_pp;
                }
            },
            ro: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Offensive Rebounds",
                resolve(pss){
                    return pss.ro;
                }
            },
            reb_of_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Offensive rebounds per game",
                resolve(pss){
                    return pss.reb_of_pp;
                }
            },
            tot_reb: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total rebounds",
                resolve(pss){
                    return pss.tot_reb;
                }
            },
            total_rebs_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Total rebounds per game",
                resolve(pss){
                    return pss.total_rebs_pp;
                }
            },
            assists: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total assists",
                resolve(pss){
                    return pss.assists;
                }
            },
            assists_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Assists per game",
                resolve(pss){
                    return pss.assists_pp;
                }
            },
            steals: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total steals",
                resolve(pss){
                    return pss.steals;
                }
            },
            steals_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Steals per game",
                resolve(pss){
                    return pss.steals_pp;
                }
            },
            tov: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total turnovers",
                resolve(pss){
                    return pss.tov;
                }
            },
            turnovers_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Turnovers per game",
                resolve(pss){
                    return pss.turnovers_pp;
                }
            },
            astov: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Ratio Assists/Turnovers",
                resolve(pss){
                    return pss.astov;
                }
            },
            block_shots: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total block shots",
                resolve(pss){
                    return pss.block_shots;
                }
            },
            block_shots_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Block shots per game",
                resolve(pss){
                    return pss.block_shots_pp;
                }
            },
            fouls_cm: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Fouls commited",
                resolve(pss){
                    return pss.fouls_cm;
                }
            },
            fouls_cm_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Fouls commited per game",
                resolve(pss){
                    return pss.fouls_cm_pp;
                }
            },
            fouls_rv: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Fouls received",
                resolve(pss){
                    return pss.fouls_rv;
                }
            },
            fouls_rv_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Fouls received per game",
                resolve(pss){
                    return pss.fouls_rv_pp;
                }
            },
            efficience: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total Efficience",
                resolve(pss){
                    return pss.efficience;
                }
            },
            efficience_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Efficience per game",
                resolve(pss){
                    return pss.efficience_pp;
                }
            }
        };
    }
});

module.exports.PlayerStdStats = PlayerStdStats;