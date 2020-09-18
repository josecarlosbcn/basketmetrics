import { 
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLInt
} from "graphql";
import {DateTime} from "../scalar/dateTime";

const Player = new GraphQLObjectType ({
    name: "Player",
    description: "Player of basketball",
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of Player",
                resolve(player){
                    return player.id;
                }
            },
            name: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of player",
                resolve(player){
                    return player.name;
                }
            },
            name_url: {
                type: new GraphQLNonNull(GraphQLString),
                description: "URL name of player",
                resolve(player){
                    return player.name_url;
                }
            },
            language: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Language of the player",
                resolve(player){
                    return player.language;
                }
            },
            twitter: {
                type: GraphQLString,
                description: "Twitter of the player",
                resolve(player){
                    return player.twitter;
                }

            },
            height: {
                type: GraphQLInt,
                description: "Height of the player",
                resolve(player){
                    return player.height;
                }
            },
            birthday: {
                type: DateTime,
                description: "Birthday of the player",
                resolve(player){
                    return player.birthday;
                }
            },
            date_insert: {
                type: GraphQLNonNull(DateTime),
                description: "Date of insert of the playe in database",
                resolve(player){
                    return player.date_insert;
                }
            }
        };
    }
});

module.exports.Player = Player;