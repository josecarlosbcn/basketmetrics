import {GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLFloat,
    GraphQLString
} from "graphql";

const TMargin = new GraphQLObjectType({
    name: "TMargin",
    description: "Margin of points of a team",
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
            points: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total points of a team",
                resolve(tacs){
                    return tacs.points;
                }
            },
            opp_points: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total points scored by the opponents team",
                resolve(tacs){
                    return tacs.opp_points;
                }
            },
            margin: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Margin of points between wins and defeats",
                resolve(tacs){
                    return tacs.margin;
                }
            },
            games: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total games played by the team",
                resolve(tacs){
                    return tacs.games;
                }
            },
            opp_points_pg: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Opponent points per game",
                resolve(tacs){
                    return tacs.opp_points_pg;
                }
            },
            margin_pg: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Margin of points per game",
                resolve(tacs){
                    return tacs.margin_pg;
                }
            }
        };
    }
});

module.exports.TMargin = TMargin;