import { 
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLInt
} from "graphql";
import {DateTime} from "../scalar/dateTime";

const ClubSeason = new GraphQLObjectType ({
    name: "ClubSeason",
    description: "Seasons played by a club",
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of Club",
                resolve(cs){
                    return cs.id;
                }
            },
            description: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of club",
                resolve(cs){
                    return cs.description;
                }
            },
            name: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of the team",
                resolve(cs){
                    return cs.name;
                }
            },
            leagueName: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of the league",
                resolve(cs){
                    return cs.leagueName;
                }
            }
        };
    }
});

module.exports.ClubSeason = ClubSeason;