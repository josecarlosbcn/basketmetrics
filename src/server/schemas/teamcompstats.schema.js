import { 
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLFloat
} from "graphql";

const TeamCompStats = new GraphQLObjectType({
    name: "TeamCompStats",
    description: "Competition stats which belogns to a team",
    fields: () => {
        return{
            id_club: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "ID of the club which belongs the team",
                resolve(tcs){
                    return tcs.id_club;
                }
            },
            id_team_club: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "id of the team where I'm going to get his stats of a competition",
                resolve(tcs){
                    return tcs.id_team_club;
                }
            },
            name: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of the team",
                resolve(tcs){
                    return tcs.name;
                }
            },
            id_competition: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "id of the competition where I'm gonig to return the stats of a team",
                resolve(tcs){
                    return tcs.id_competition;
                }
            },
            season_name: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of the season",
                resolve(tcs){
                    return tcs.season_name;
                }
            },
            games: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total games played in the competition",
                resolve(tcs){
                    return tcs.games;
                }
            },
            minutes:  {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total minutes played by a team",
                resolve(tcs){
                    return tcs.minutes;
                }
            },
            t2p_conv: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total 2p shoots scored",
                resolve(tcs){
                    return tcs.t2p_conv;
                }
            },
            t2p_conv_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Average of 2p made it",
                resolve(tcs){
                    return tcs.t2p_conv_pp;
                }
            },
            t2p_int: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total 2p shoots attempted",
                resolve(tcs){
                    return tcs.t2p_int;
                }
            },
            t2p_int_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Average of 2p attemtep",
                resolve(tcs){
                    return tcs.t2p_int_pp;
                }
            },
            t2p_percentage: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of 2p shoots",
                resolve(tcs){
                    return tcs.t2p_percentage;
                }
            },
            t3p_conv: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total 3p shoots scored",
                resolve(tcs){
                    return tcs.t3p_conv;
                }
            },
            t3p_conv_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Average of 3p made it",
                resolve(tcs){
                    return tcs.t3p_conv_pp;
                }
            },
            t3p_int: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total 3p shoots attempted",
                resolve(tcs){
                    return tcs.t3p_int;
                }
            },
            t3p_int_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Average of 3p attemtep",
                resolve(tcs){
                    return tcs.t3p_int_pp;
                }
            },
            t3p_percentage: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of 3p shoots",
                resolve(tcs){
                    return tcs.t3p_percentage;
                }
            },
            tc_conv: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total field goalds made it",
                resolve(tcs){
                    return tcs.tc_conv;
                }
            },
            tc_conv_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Average field goals made it per game",
                resolve(tcs){
                    return tcs.tc_conv_pp;
                }
            },
            tc_int: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total field goald attempted",
                resolve(tcs){
                    return tcs.tc_int;
                }
            },
            tc_int_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Average field goals attempted per game",
                resolve(tcs){
                    return tcs.tc_int_pp;
                }
            },
            tc_percentage: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of field goals",
                resolve(tcs){
                    return tcs.tc_percentage;
                }
            },
            tl_conv: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total free throws made it",
                resolve(tcs){
                    return tcs.tl_conv;
                }
            },
            tl_conv_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Total free throws made it by game",
                resolve(tcs){
                    return tcs.tl_conv_pp;
                }
            },
            tl_int: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total free throws attempted",
                resolve(tcs){
                    return tcs.tl_int;
                }
            },
            tl_int_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Total free throws attempted by game",
                resolve(tcs){
                    return tcs.tl_int_pp;
                }
            },
            tl_percentage: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of free throws",
                resolve(tcs){
                    return tcs.tl_percentage;
                }
            },
            total_puntos: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total points scored by the team",
                resolve(tcs){
                    return tcs.total_puntos;
                }
            },
            total_puntos_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Total points by game",
                resolve(tcs){
                    return tcs.total_puntos_pp;
                }
            },
            p_tl_puntos: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of points from Free Throws",
                resolve(tcs){
                    return tcs.p_tl_puntos;
                }
            },
            p_t2p_puntos: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of points from 2 pointers",
                resolve(tcs){
                    return tcs.p_t2p_puntos;
                }
            },
            p_t3p_puntos: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of points from 3 pointers",
                resolve(tcs){
                    return tcs.p_t3p_puntos;
                }
            },
            ppa: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Points per attempt",
                resolve(tcs){
                    return tcs.ppa;
                }
            },
            pointsbyposs: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Points by possessions",
                resolve(tcs){
                    return tcs.pointsbyposs;
                }
            },
            reb_def: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total defensive rebounds",
                resolve(tcs){
                    return tcs.reb_def;
                }
            },
            reb_def_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Average of defensive rebounds per game",
                resolve(tcs){
                    return tcs.reb_def_pp;
                }
            },
            reb_of: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total ofensive rebounds",
                resolve(tcs){
                    return tcs.reb_of;
                }
            },
            reb_of_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Average of offensive rebounds per game",
                resolve(tcs){
                    return tcs.reb_of_pp;
                }
            },
            total_rebs:{
                type: new GraphQLNonNull(GraphQLInt),
                descrition: "Total rebounds",
                resolve(tcs){
                    return tcs.total_rebs;
                }
            },
            total_rebs_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Total rebound per game",
                resolve(tcs){
                    return tcs.total_rebs_pp;
                }
            },
            assists: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total assists of a team in a competition",
                resolve(tcs){
                    return tcs.assists;
                }
            },
            assists_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Average of assists per game",
                resolve(tcs){
                    return tcs.assists_pp;
                }
            },
            steals: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total steals of a team in a competition",
                resolve(tcs){
                    return tcs.steals;
                }
            },
            steals_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Average of steals per game",
                resolve(tcs){
                    return tcs.steals_pp;
                }
            },
            turnovers: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total of turnovers of a team in a season",
                resolve(tcs){
                    return tcs.turnovers;
                }
            },
            turnovers_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Average of turnovers by game",
                resolve(tcs){
                    return tcs.turnovers_pp;
                }
            },
            astov: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Assists per turnover",
                resolve(tcs){
                    return tcs.astov;
                }
            },
            block_shots: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total of block_shos of a team in a season",
                resolve(tcs){
                    return tcs.block_shots;
                }
            },
            block_shots_pp:  {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Average of block shots by game",
                resolve(tcs){
                    return tcs.block_shots_pp;
                }
            },
            fouls_cm: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Fouls commited",
                resolve(tcs){
                    return tcs.fouls_cm;
                }
            },
            fouls_cm_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Average of fouls commited by game",
                resolve(tcs){
                    return tcs.fouls_cm_pp;
                }
            },
            fouls_rv: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total fouls received",
                resolve(tcs){
                    return tcs.fouls_rv;
                }
            },
            fouls_rv_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Average of fouls received by game",
                resolve(tcs){
                    return tcs.fouls_rv_pp;
                }
            },
            efficience: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total of efficience",
                resolve(tcs){
                    return tcs.efficience;
                }
            },
            efficience_pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Average of efficience by game",
                resolve(tcs){
                    return tcs.efficience_pp;
                }
            }
        };
    }
});

module.exports.TeamCompStats = TeamCompStats;