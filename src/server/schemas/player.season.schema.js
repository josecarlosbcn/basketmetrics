import { 
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLInt
} from "graphql";
import {DateTime} from "../scalar/dateTime";

const PlayerSeason = new GraphQLObjectType ({
    name: "PlayerSeason",
    description: "Seasons played by a player",
    fields: () => {
        return {
            id_player_team: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of player team",
                resolve(ps){
                    return ps.id_player_team;
                }
            },
            id_season: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of season",
                resolve(ps){
                    return ps.id_season;
                }
            },
            id_team_club: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of team club",
                resolve(ps){
                    return ps.id_team_club;
                }
            },
            description: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Description of season",
                resolve(ps){
                    return ps.description;
                }
            },
            team: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Team name where the player was playing that season",
                resolve(ps){
                    return ps.team;
                }
            },
            league: {
                type: new GraphQLNonNull(GraphQLString),
                description: "League where played the team that season",
                resolve(ps){
                    return ps.league;
                }
            }
        };
    }
});

module.exports.PlayerSeason = PlayerSeason;