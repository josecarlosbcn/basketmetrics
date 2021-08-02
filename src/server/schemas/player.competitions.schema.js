import { 
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLInt
} from "graphql";
import {DateTime} from "../scalar/dateTime";

const PlayerCompetitions = new GraphQLObjectType ({
    name: "PlayerCompetitions",
    description: "Competitions played by a player",
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of competition",
                resolve(pc){
                    return pc.id;
                }
            },
            id_league: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of league",
                resolve(pc){
                    return pc.id_league;
                }
            },
            id_season: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of season",
                resolve(pc){
                    return pc.id_season;
                }
            },
            id_group: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID group",
                resolve(pc){
                    return pc.id_group;
                }
            },
            name: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of the competition",
                resolve(pc){
                    return pc.name;
                }
            },
            description: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Description of phase of competition",
                resolve(pc){
                    return pc.description;
                }
            },
        };
    }
});

module.exports.PlayerCompetitions = PlayerCompetitions;