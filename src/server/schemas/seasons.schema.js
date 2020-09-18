import { 
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLFloat,
    GraphQLString
} from "graphql";
import {DateTime} from "../scalar/dateTime";

const Seasons = new GraphQLObjectType({
    name: "Seasons",
    description: "List of seasons",
    fields: () => {
        return {
            name: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of the league", 
                resolve(season){
                    return season.name;
                }
            },
            id: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "ID of season",
                resolve(season){
                    return season.id;
                }                
            },
            id_league: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "ID of league",
                resolve(season){
                    return season.id_league;
                }
            },
            id_season_feb: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "ID of season from FEB",
                resolve(season){
                    return season.id_season_feb;
                }
            },
            description: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of the season",
                resolve(season){
                    return season.description;
                }
            },
            date_start: {
                type: new GraphQLNonNull(DateTime),
                description: "Day of start of the season",
                resolve(season){
                    return season.date_start;
                }
            },
            date_finish: {
                type: DateTime,
                description: "Day of finish of the season",
                resolve(season){
                    return season.date_finish;
                }
            }
        };
    }
});

module.exports.Seasons = Seasons;