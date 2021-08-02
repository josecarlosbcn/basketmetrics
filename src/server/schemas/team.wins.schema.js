import {GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLFloat,
    GraphQLString
} from "graphql";

const TWins = new GraphQLObjectType({
    name: "TWins",
    description: "Number of wins and percentage of wins of a team",
    fields: () => {
        return {
            id_club: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of the club who belongs the team",
                resolve(tacs){
                    return tacs.id_club;
                }
            },
            id_team_club: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of the team",
                resolve(tacs){
                    return tacs.id_team_club;
                }
            },
            wins: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total victories of a team",
                resolve(tacs){
                    return tacs.wins;
                }
            },
            defeats: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total defeats of a team",
                resolve(tacs){
                    return tacs.defeats;
                }
            },
            p_wins: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of victories of a team",
                resolve(tacs){
                    return tacs.p_wins;
                }
            },
        };
    }
});

module.exports.TWins = TWins;