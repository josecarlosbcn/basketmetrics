import { 
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLString
} from "graphql";
import {DateTime} from "../scalar/dateTime";

const TeamClub = new GraphQLObjectType({
    name: "TeamClub",
    description: "Data from a team which belongs to a club",
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of team club",
                resolve(tc){
                    return tc.id;
                },       
            },
            id_group: {
                type: GraphQLID,
                description: "ID of the group which belogns",
                resolve(tc){
                    return tc.id_group;
                }
            },
            id_league: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "ID of league",
                resolve(tc){
                    return tc.id_league;
                }
            },
            id_season: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "ID of season",
                resolve(tc){
                    return tc.id_season;
                }
            },
            id_club: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "ID of Club",
                resolve(tc){
                    return tc.id_club;
                }
            },
            id_team_feb: {
                type: GraphQLInt,
                description: "ID of FEB",
                resolve(tc){
                    return tc.id_team_feb;
                }
            },
            id_fiba: {
                type: GraphQLInt,
                description: "ID of FIBA",
                resolve(tc){
                    return tc.id_fiba;
                }
            },
            logo: {
                type: GraphQLString,
                description: "url to the logo",
                resolve(tc){
                    return tc.logo;
                }
            },
            name: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of the team which belongs to a club",
                resolve(tc){
                    return tc.name;
                }
            },
            abrev: {
                type: GraphQLString,
                description: "Abreviature of the name of the team",
                resolve(tc){
                    return tc.abrev;
                }
            },
            url_name: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name for the url of the team",
                resolve(tc){
                    return tc.url_name;
                }
            },
            r_name: {
                type: GraphQLString,
                description: "Name of the team for R graphics",
                resolve(tc){
                    return tc.r_name;
                }
            },
            date_start: {
                type: new GraphQLNonNull(DateTime),
                description: "Date of insert in database",
                resolve(tc){
                    return tc.date_start;
                }
            }
        };
    }
});

module.exports.TeamClub = TeamClub;