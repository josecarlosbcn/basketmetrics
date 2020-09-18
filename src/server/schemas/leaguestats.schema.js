import { GraphQLFloat, GraphQLObjectType, GraphQLNonNull, GraphQLInt } from "graphql";

const LeagueStats = new GraphQLObjectType ({
    name: "LeagueStats",
    description: "Stats from the league",
    fields: () => {
        return {
            t2p_percentage: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Average of 2P% of all the players of the league in the same season",
                resolve(ls){
                    return ls.t2p_percentage;
                }
            },
            t3p_percentage: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Average of 3P% of all the players of the league in the same season",
                resolve(ls){
                    return ls.t3p_percentage;
                }
            },
            tl_percentage: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Average of FT% of all the players of the league in the same season",
                resolve(ls){
                    return ls.tl_percentage;
                }
            },
            pbg: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Average of points scored in a game",
                resolve(ls){
                    return ls.pbg;
                }
            },
            tpbg: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Average of Total players which play in a game",
                resolve(ls){
                    return ls.tpbg;
                }
            },
            pbp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Average of Points scored by a player in a game",
                resolve(ls){
                    return ls.pbp;
                }
            },
            mbp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Average of minutes played by a player in each game",
                resolve(ls){
                    return ls.mbp;
                }
            },
            etc: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Average of eFG% for each team in a season",
                resolve(ls){
                    return ls.etc;
                }
            },
            ts: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Average of TS% for each team in a season",
                resolve(ls){
                    return ls.ts;
                }
            },
            p_reb_def: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of defensive rebounds",
                resolve(ls){
                    return ls.p_reb_def;
                }
            },
            p_reb_of: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of offensive rebounds",
                resolve(ls){
                    return ls.p_reb_of;
                }
            },
            p_tot_reb: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of total rebounds",
                resolve(ls){
                    return ls.p_tot_reb;
                }
            },
            p_assists: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of assists",
                resolve(ls){
                    return ls.p_assists;
                }
            },
            assists_ratio: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Assists ratio",
                resolve(ls){
                    return ls.assists_ratio;
                }
            },
            p_steals: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of steals",
                resolve(ls){
                    return ls.p_steals;
                }
            },
            total_games: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total games played in a season",
                resolve(ls){
                    return ls.total_games;
                }
            }
        };
    }
});

module.exports.LeagueStats = LeagueStats;