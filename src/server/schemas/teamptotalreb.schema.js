import {GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLFloat,
    GraphQLString
} from "graphql";

const TPercentageTRTS = new GraphQLObjectType({
    name: "TPercentageTRTS",
    description: "Returns the value of percentage total rebounds and ts of each team",
    fields: () => {
        return {
            id_team_club: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of the team",
                resolve(tptr){
                    return tptr.id_team_club;
                }
            },
            name: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of the team",
                resolve(tptr){
                    return tptr.name;
                }
            },
            minutes: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Minutes played",
                resolve(tptr){
                    return tptr.minutes;
                }
            },
            total_rebs: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total rebounds of the team",
                resolve(tptr){
                    return tptr.total_rebs;
                }
            },
            opp_total_rebs: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total rebounds of the opponent team",
                resolve(tptr){
                    return tptr.opp_total_rebs;
                }
            },
            p_total_rebs: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of total rebounds",
                resolve(tptr){
                    return tptr.p_total_rebs;
                }
            },
            ts: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "TS%",
                resolve(tptr){
                    return tptr.ts;
                }
            },
        };
    }
});

module.exports.TPercentageTRTS = TPercentageTRTS;