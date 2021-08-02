import { 
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat
} from "graphql";

const PlayerPrevia = new GraphQLObjectType ({
    name: "PlayerPrevia",
    description: "Data from player for the previa of each game",
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of Player",
                resolve(pp){
                    return pp.id
                }
            },
            name: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of the player",
                resolve(pp){
                    return pp.name
                }
            },
            abrev: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Abreviature of the team",
                resolve(pp){
                    return pp.abrev
                }
            },
            id_team_club: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Id of team club",
                resolve(pp){
                    return pp.id_team_club
                }
            },
            game_score: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Game score of player",
                resolve(pp){
                    return pp.game_score
                }
            },
            ts: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "True Shoot %",
                resolve(pp){
                    return pp.ts
                }
            },
            games: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total games played by player",
                resolve(pp){
                    return pp.games
                }
            },
            t2p: {
                type: GraphQLFloat,
                description: "% of T2P by game",
                resolve(pp){
                    return pp.t2p
                }
            },
            t3p: {
                type: GraphQLFloat,
                description: "% of T3P by game",
                resolve(pp){
                    return pp.t3p
                }
            },
            tlp: {
                type: GraphQLFloat,
                description: "% of TL by game",
                resolve(pp){
                    return pp.tlp
                }
            },
            points: {
                type: GraphQLFloat,
                description: "Poins per game",
                resolve(pp){
                    return pp.points
                }
            },
            reb_def: {
                type: GraphQLFloat,
                description: "Defensive rebounds per game",
                resolve(pp){
                    return pp.reb_def
                }
            },
            reb_of: {
                type: GraphQLFloat,
                description: "Ofensive rebouns per game",
                resolve(pp){
                    return pp.reb_of
                }
            },
            assists: {
                type: GraphQLFloat,
                description: "Assists per game",
                resolve(pp){
                    return pp.assists
                }
            },
            steals: {
                type: GraphQLFloat,
                description: "Steals per game",
                resolve(pp){
                    return pp.steals
                }
            },
            turnovers: {
                type: GraphQLFloat,
                description: "Turnovers per game",
                resolve(pp){
                    return pp.turnovers
                }
            }
        }
    }
});

module.exports.PlayerPrevia = PlayerPrevia;