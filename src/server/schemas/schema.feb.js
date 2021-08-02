import { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLID, GraphQLInt, GraphQLBoolean } from "graphql";
import { FEBConnection }  from "../db";
import { Player } from "./player.schema";
import { NextGameday } from "./nextgameday.schema";
import { TeamClub } from "./teamclub.schema";
import { TCAdvStats } from "./tcadvs.schema";
import { Seasons }  from "./seasons.schema";
import { TCStdStats } from "./tcstds.schema";
import { PlayerPrevia} from "./playerprevia.schema";
import { GameDay } from "./gameday.schema";
import { Competition }  from "./competition.schema";
import { Game } from "./game.schema";
import { GameStats }  from "./gamestats.schema";
import { TeamCompStats } from "./teamcompstats.schema";
import { TGAdvStats } from "./tgadvs.schema";
import { Quarters } from "./quarters.schema";
import { BoxScore } from "./boxscore.schema";
import { PlayerAdvStats } from "./player.advstats.schema";
import { PlayersClubs } from "./players.clubs.schema";
import { PlayerSeason } from "./player.season.schema";
import { ClubSeason } from "./club.season.schema";
import { PlayerStdStats } from "./player.stdstats.schema";
import { GameLog } from "./gamelog.schema";
import { TMargin } from "./team.margin.schema";
import { TWins } from "./team.wins.schema";
import { TPercentageTRTS } from "./teamptotalreb.schema";
import { LeagueStats } from "./leaguestats.schema";
import { Group } from "./group.schema";
import { TeamGroup } from "./teamgroup.schema";


const QueryFEB = new GraphQLObjectType({
    name: "QueryFEB",
    description: "This is the root query",
    fields: () => {
        return{
            boxscore: {
                type: GraphQLList(BoxScore),
                description: "Box score of a game for all the players of a team",
                args: {
                    id_game: {
                        type: GraphQLInt,
                    },
                    id_team_club: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select bx.id_game, bx.id_player_team, tc.name as team_name, pt.numero, p.name, bx.titular, bx.minutes, bx.seconds, " + 
                    "bx.t2p_conv * 2 + bx.t3p_conv * 3 + bx.tl_conv as points, " +
                    "bx.t2p_conv, bx.t2p_int, ifnull(round(bx.t2p_conv/bx.t2p_int*100, 2), 0.00) as t2pp, bx.t3p_conv, bx.t3p_int, " +  
                    "ifnull(round(bx.t3p_conv/bx.t3p_int*100, 2), 0.00) as t3pp, bx.t2p_conv + bx.t3p_conv as tc_conv, " +
                    "bx.t2p_int + bx.t3p_int as tc_int, ifnull(round((bx.t2p_conv+bx.t3p_conv)/(bx.t2p_int+bx.t3p_int)*100, 2), 0.00) as tcp, " + 
                    "bx.tl_conv, bx.tl_int, ifnull(round(bx.tl_conv/bx.tl_int*100, 2), 0.00) as tlp, " +
                    "bx.reb_def, bx.reb_of, bx.reb_def + bx.reb_of as total_rebounds, bx.assists, bx.steals, bx.turnovers, bx.block_shots, bx.fouls_cm, " +
                    "bx.fouls_rv, bx.efficience, bx.benefit, bx.date_insert from tbl011_boxscore bx, tbl005_team_club tc, tbl006_player_team pt, " + 
                    "tbl003_player p where bx.id_game = ###id_game### and tc.id = ###id_team_club### and bx.id_player_team = pt.id and " +
                    "pt.id_team_club = ###id_team_club### and pt.id_player = p.id order by pt.numero asc";
                    query = query.replace("###id_game###", args.id_game);
                    query = query.replace(/###id_team_club###/g, args.id_team_club);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            competitions_by_team: {
                type: GraphQLList(Competition),
                description: "List of competitions played by a team in a season. It's not necessary to pass the id of season because the id of team is different for each season",
                args: {
                    id_team: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select c1.* from tbl012_competition c1, (select distinct(c.id) from tbl007_game g, tbl004_jornada j, " +
                    "tbl012_competition c where (g.id_team_home = ###id_team### or g.id_team_away = ###id_team###) and g.id_jornada = j.id and " +
                    "c.id = j.id_competition) c2 where c1.id = c2.id order by c1.id asc";
                    query = query.replace(/###id_team###/g, args.id_team);
                    console.log("query: " + query);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );

                }
            },
            competitions_by_season: {
                type: GraphQLList(Competition),
                description: "List of competitions of a season",
                args: {
                    id_season: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    return FEBConnection.db.models.tbl012_competition.findAll({where: args});
                }
            },            
            club_season: {
                type: GraphQLList(ClubSeason),
                description: "List of seasons played by a club",
                args: {
                    id_club: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select s.id, l.name as leagueName, s.description, tc.name from tbl002_club c, " +
                    "tbl005_team_club tc, tbl015_seasons s, tbl001_league l where c.id = ###id_club### and tc.id_club = c.id and s.id = tc.id_season " +
                    "and s.id_league = l.id order by s.id_season_feb desc";
                    query = query.replace("###id_club###", args.id_club);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            game_adv_stats:{
                type: GraphQLList(TGAdvStats),
                description: "Return the advanced stats of teams who play the same game",
                args: {
                    id_game: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    return FEBConnection.db.models.tbl009_team_adv_stats.findAll({where: args});
                }
            },
            game_data :{
                type: GraphQLList(Game),
                description: "Return te data of a game selected by id_game",
                args: {
                    id_game: {
                        type:GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select g.*, tc1.name as home_team, tc1.url_name as home_url_name, tc1.abrev as abrev_home, tc2.name as away_team, " +
                    "tc2.url_name as away_url_name, tc2.abrev as abrev_away from tbl007_game g, tbl005_team_club tc1, tbl005_team_club tc2 " + 
                    "where g.id = ###id_game### and g.id_team_home = tc1.id and g.id_team_away = tc2.id";
                    query = query.replace("###id_game###", args.id_game);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            game_log: {
                type: GraphQLList(GameLog),
                description: "List with standard stats of each game played by a player in a season",
                args: {
                    id_player_team: {
                        type: GraphQLInt
                    },
                },
                resolve(root, args){
                    let query = "select bx.id_game, g.date_game, tc1.url_name as home_team_url, tc1.abrev as home_abrev, tc2.url_name as away_team_url, " +
                    "tc2.abrev as away_abrev, bx.minutes as mp, (bx.t2p_conv*2 + bx.t3p_conv*3 + bx.tl_conv) as points, (bx.t2p_conv + bx.t3p_conv) as fgm, " +
                    "(bx.t2p_int + bx.t3p_int) as fga, coalesce(round((bx.t2p_conv + bx.t3p_conv)/(bx.t2p_int + bx.t3p_int)*100, 2), 0.00) as fgp, " +
                    "bx.t2p_conv, bx.t2p_int, coalesce(round(concat(bx.t2p_conv/bx.t2p_int*100), 2), 0.00) as t2pp, bx.t3p_conv, bx.t3p_int, " +
                    "coalesce(round(concat(bx.t3p_conv/bx.t3p_int*100), 2), 0.00) as t3pp, bx.tl_conv, bx.tl_int, " +
                    "coalesce(round(concat(bx.tl_conv/bx.tl_int*100), 2), 0.00) as ftp, bx.reb_def, bx.reb_of, (bx.reb_def + bx.reb_of) as tot_reb, " +
                    "bx.assists, bx.turnovers, bx.steals, bx.block_shots, bx.fouls_cm, bx.efficience as efficience from tbl011_boxscore bx, " +
                    "tbl007_game g, tbl005_team_club tc1, tbl005_team_club tc2, (select pt.id, tc.id as id_team from tbl006_player_team pt, " +
                    "tbl005_team_club tc where pt.id = ###id_player_team### and pt.id_team_club = tc.id) pt where bx.id_player_team = pt.id and " +
                    "bx.id_game = g.id and g.id_team_home = tc1.id and g.id_team_away = tc2.id order by g.date_game asc";
                    query = query.replace("###id_player_team###", args.id_player_team);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            game_stats_by_team: {
                type: GraphQLList(GameStats),
                description: "Return the stats of a team in all the competitions played in a season. id_team_club depends of the season.",
                args: {
                    id_team_club: {
                        type: GraphQLInt
                    },
                    id_competition: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select g.id, g.date_game, g.id_team_home, c1.name as home_team, c1.url_name as home_url_name, c1.abrev as home_abrev_name, " +
                    "g.id_team_away, c2.name as away_team, c2.url_name as away_url_name, c2.abrev as away_abrev_name, g.home_score, g.away_score, " +
                    "tss.id_team_club, tss.id_competition, tss.minutes, tss.t2p_conv, tss.t2p_int, " +
                    "coalesce(round((tss.t2p_conv/tss.t2p_int)*100, 2), 0.00) as t2p_percentage, tss.t3p_conv, tss.t3p_int, " +
                    "coalesce(round((tss.t3p_conv/tss.t3p_int)*100, 2), 0.00) as t3p_percentage, " +
                    "tss.t2p_conv + tss.t3p_conv as tc_conv, tss.t2p_int + tss.t3p_int as tc_int, " +
                    "coalesce(round((tss.t2p_conv + tss.t3p_conv)/(tss.t2p_int + tss.t3p_int)*100, 2), 0.00) as tc_percentage, tss.tl_conv, tss.tl_int, " +
                    "round(tss.tl_conv/tss.tl_int*100, 2) as tl_percentage, tss.reb_def, tss.reb_of, tss.assists, tss.steals, tss.turnovers, " +
                    "tss.block_shots, tss.fouls_cm, tss.fouls_rv, tss.efficience from tbl007_game g, tbl008_team_std_stats tss, tbl005_team_club c1, " +
                    "tbl005_team_club c2 where tss.id_team_club = ###id_team_club### and tss.id_competition = ###id_competition### and " +
                    "c1.id = g.id_team_home and c2.id = g.id_team_away and g.id = tss.id_game";
                    query = query.replace("###id_team_club###", args.id_team_club);
                    query = query.replace("###id_competition###", args.id_competition);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            groups: {
                type: GraphQLList(Group),
                descripion: "List of groups of a competition",
                args: {
                    id_season: {
                        type: GraphQLInt
                    },
                    id_league: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select * from tbl033_groups g where g.id_season = ###id_season### and id_league = ###id_league###";
                    query = query.replace("###id_season###", args.id_season);
                    query = query.replace("###id_league###", args.id_league);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            last_game_day: {
                type: GraphQLList(GameDay),
                description: "Return the last game day of a competition in a season",
                args: {
                    id_league: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
/*                     let query = "select s.id as id_season, s.description as season, j.id_competition, c.name as competition, j.id as id_jornada, " +
                    "j.id_jornada_feb, j.num_jornada, j.date, j.date_insert from tbl004_jornada j, tbl012_competition c, tbl015_seasons s, " +
                    "(select j.id from tbl004_jornada j, (select id from tbl012_competition where id_league = ###id_league### order by id desc " +
                    "limit 1) c where j.id_competition = c.id order by id desc limit 1) lj where j.id = lj.id and j.id_competition = c.id and " +
                    "c.id_season = s.id";
 */                 let query = "select s.id as id_season, s.description as season, j.id_competition, c.name as competition, j.id as id_jornada, " +
                    "j.id_jornada_feb, j.num_jornada, j.date, j.date_insert from tbl004_jornada j, tbl012_competition c, tbl015_seasons s, " +
                    "(select j.id from tbl004_jornada j, (select c.id from tbl012_competition c, tbl004_jornada j where c.id_league = ###id_league### and " +
                    "c.id = j.id_competition order by id desc limit 1) c where j.id_competition = c.id order by id desc limit 1) lj where " + 
                    "j.id = lj.id and j.id_competition = c.id and c.id_season = s.id";
                    query = query.replace("###id_league###", args.id_league);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            league_stats: {
                type: GraphQLList(LeagueStats),
                description: "League stats for a season",
                args: {
                    id_season: {
                        type: GraphQLInt
                    },
                },
                resolve(root, args){
                    let query = "select * from (select round(sum(bx.t2p_conv)/sum(bx.t2p_int)*100, 2) as t2p_percentage, " + 
                    "round(sum(bx.t3p_conv)/sum(bx.t3p_int)*100, 2) as t3p_percentage, round(sum(bx.tl_conv)/sum(bx.tl_int)*100, 2) as tl_percentage " +
                    "from tbl006_player_team pt, tbl011_boxscore bx, (select tc.* from tbl005_team_club tc where tc.id_season = ###id_season###) tc2 where " +
                    "pt.id_team_club = tc2.id and pt.id = bx.id_player_team) t1, (select round(avg(g.points), 2) as pbg, " + 
                    "round(avg(g.total_players), 2) as tpbg, round(avg(g.pbp), 2) as pbp, round(avg(g.mbp), 2) as mbp from " +
                    "(select g.id, g.home_score + g.away_score as points, round((g.home_score + g.away_score)/count(*), 2) pbp, " + 
                    "count(*) as total_players, sum(bx.minutes), round(sum(bx.minutes)/count(*), 2) as mbp from tbl012_competition c, tbl004_jornada j, " + 
                    "tbl007_game g, tbl011_boxscore bx where c.id_season = ###id_season### and c.id = j.id_competition and j.id = g.id_jornada and " +
                    "bx.id_game = g.id group by bx.id_game) g) t2, (select round(avg(pas.etc), 2) as etc, round(avg(pas.ts), 2) as ts, " +
                    "round(avg(pas.p_reb_def), 2) as p_reb_def, round(avg(pas.p_reb_of), 2) as p_reb_of, round(avg(pas.p_tot_reb), 2) as p_tot_reb, " +
                    "round(avg(pas.p_assists), 2) as p_assists, round(avg(pas.assists_ratio), 2) as assists_ratio, round(avg(pas.p_steals), 2) as p_steals " +
                    "from tbl006_player_team pt, tbl013_player_adv_stats pas, (select tc.* from tbl005_team_club tc where tc.id_season = ###id_season###) tc2 where " + 
                    "pt.id_team_club = tc2.id and pt.id = pas.id_player_team) t3";
                    query = query.replace(/###id_season###/g, args.id_season);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            lf1_games: {
                type: GraphQLList(Game),
                description: "List of games of a gameday for LF1 and LF2",
                args: {
                    id_jornada: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select g.id, g.id_jornada, g.id_team_home, tc1.name as home_team, tc1.abrev as abrev_home, tc1.url_name as home_url_name, " +
                    "g.home_score, g.id_team_away, tc2.name as away_team, tc2.abrev as abrev_away, tc2.url_name as away_url_name, " +
                    "g.away_score, g.date_game from tbl007_game g, tbl005_team_club tc1, tbl005_team_club tc2 where g.id_jornada = ###id_jornada### " +
                    "and g.id_team_home = tc1.id and g.id_team_away = tc2.id order by g.date_game asc";
                    query = query.replace("###id_jornada###", args.id_jornada);
                    //console.log("QUERY: " + query);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            list_competitions: {
                type: GraphQLList(Competition),
                description: "List of competitions given a league and a season. At least one game played in that competition.",
                args: {
                    id_league: {
                        type: GraphQLInt
                    },
                    id_season: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    return FEBConnection.db.models.tbl012_competition.findAll({where: args});
                }
            },
            list_game_days: {
                type: GraphQLList(GameDay),
                description: "List of gamedays given a competition",
                args: {
                    id_competition: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select id as id_jornada, id_competition, id_jornada_feb, num_jornada, date, date_insert from " +
                    "tbl004_jornada where id_competition = ###id_competition### order by id_jornada_feb";
                    query = query.replace("###id_competition###", args.id_competition);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
/*             list_team_advanced_stats: {
                type: GraphQLList(TCAdvStats),
                description: "List of advanced stats from teams which have been played a competition",
                args: {
                    id_season: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select tas.id_team_club, tc.name, tss.games, tas.etc, tas.p_reb_def, tas.p_reb_of, tas.p_turnovers, tas.ratio_ft, tas.possessions, tas.possessions_x_minute, " +
                    "tas.assists_x_turnovers, tas.steals_x_turnovers, tas.ts, tas.rival_p_etc, tas.rival_p_turnovers, tas.rival_ratio_ft, tas.ortg, tas.drtg, tas.nrtg from " +
                    "tbl037_team_season_advanced_stats tas, tbl005_team_club tc, tbl035_team_season_standard_stats tss where tas.id_season = ###id_season### and " + 
                    "tss.id_team_club = tas.id_team_club and tas.id_team_club = tc.id";
                    query = query.replace(/###id_season###/g, args.id_season);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }                   
            }, */
            list_nextgamedaylf1: {
                type: GraphQLList(NextGameday),
                description: "Lista de partidos de la próxima jornada para LF1",
                args: {
                    id: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    if (typeof args.id === "undefined"){
                        return FEBConnection.db.query(
                            "select ng.*, tc1.name as home_team, tc1.url_name as home_url_name, tc2.name as away_team, tc2.url_name as away_url_name, c.name as competition from tbl031_next_gameday_lf1 ng, tbl005_team_club tc1, tbl005_team_club tc2, tbl012_competition c where ng.played = 0 and ng.id_home_team = tc1.id and ng.id_away_team = tc2.id and ng.id_competition = c.id",
                            {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                        );
                    }
                    else{
                        return FEBConnection.db.models.tbl031_next_gameday_lf1.findAll({where: args});
                    }
                }               
            },
            list_nextgamedaylf2: {
                type: GraphQLList(NextGameday),
                description: "Lista de partidos de la próxima jornada en LF2",
                args: {
                    id: {
                        type: GraphQLInt
                    }
                },                
                resolve(root, args){
                    if (typeof args.id === "undefined"){
                        return FEBConnection.db.query(
                            "select ng.*, tc1.name as home_team, tc1.url_name as home_url_name, tc2.name as away_team, tc2.url_name as away_url_name, c.name as competition from tbl032_next_gameday_lf2 ng, tbl005_team_club tc1, tbl005_team_club tc2, tbl012_competition c where ng.played = 0 and ng.id_home_team = tc1.id and ng.id_away_team = tc2.id and ng.id_competition = c.id",
                            {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                        );
                    }
                    else{
                        return FEBConnection.db.models.tbl032_next_gameday_lf2.findAll({where: args});
                    }
                }
            },
            player: {
                type: GraphQLList(Player),
                description: "Jugadora a partir del id de ella",
                args: {
                    id: {
                        type: GraphQLID
                    }
                },
                resolve(root, args){
/*                     return FEBConnection.db.query("select * from tbl003_player where id = 2792",
                    {raw: true, type: FEBConnection.db.QueryTypes.SELECT}); */
                    console.log("id: " + args.id);
                    return FEBConnection.db.models.tbl003_player.findAll({where: args});
                }                    
            },
            player_advanced_stats: {
                type: GraphQLList(PlayerAdvStats),
                description: "Get the advanced stats of all the player who have played a certain game",
                args: {
                    id_game: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select tc.id as id_team_club, tc.name as team_name, pt.numero, p.name as name_player, pas.* from tbl013_player_adv_stats pas, " +
                    "tbl005_team_club tc, tbl006_player_team pt, tbl003_player p where pas.id_game = ###id_game### and pas.id_player_team = pt.id and " +
                    "pt.id_team_club = tc.id and pt.id_player = p.id";
                    query  = query.replace("###id_game###", args.id_game);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            player_previa: {
                type: GraphQLList(PlayerPrevia),
                description: "Get the best player in game score for the previa view",
                args: {
                    id_team_club: {
                        type: GraphQLInt
                    },
                },
                resolve(root, args){
                    let query = "select pss.id_player_team as id, p.name, tc.abrev, pss.id_team_club, pas.game_score, pss.games, pas.ts, pss.t2p_percentage as t2p, pss.t3p_percentage as t3p, " +
                    "pss.tl_percentage as tlp, pss.total_puntos_pp as points, pss.reb_def_pp as reb_def, pss.reb_of_pp as reb_of, pss.assists_pp as assists, pss.steals_pp as steals, " +
                    "pss.turnovers_pp as turnovers from tbl038_player_season_standard_stats pss, tbl039_player_season_advanced_stats pas, tbl006_player_team pt, tbl003_player p, tbl005_team_club tc where " +
                    "pss.id_team_club = ###id_team_club### and pss.id_player_team = pt.id and pss.games >= round((select count(*) from tbl007_game g where " +
                    "(g.id_team_home = ###id_team_club### or g.id_team_away = ###id_team_club###))*0.55, 0) and pss.id_player_team = pas.id_player_team and " +
                    "pss.id_player_team = pt.id and pt.id_player = p.id and pt.id_team_club = tc.id order by pas.game_score desc limit 1";
                    query = query.replace(/###id_team_club###/g, args.id_team_club);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );                             
                }
            },
            player_season: {
                type: GraphQLList(PlayerSeason),
                description: "List of seasons played by a player",
                args: {
                    id_player: {
                        type: GraphQLInt
                    } 
                },
                resolve(root, args){
/*                     let query = "select s.id, s.description, tc.name as team, l.name as league from tbl006_player_team pt, tbl005_team_club tc, tbl015_seasons s, " +
                    "tbl001_league l where pt.id_player = ###id_player### and pt.id_team_club = tc.id and tc.id_season = s.id and s.id_league = l.id " +
                    "order by s.id_season_feb desc"; */
                    let query = "select pt.id as id_player_team, s.id as id_season, concat(s.description, ' / ', tc.name) as description, tc.name as team, l.name as league " +
                    "from tbl006_player_team pt, tbl005_team_club tc, tbl015_seasons s, tbl001_league l where pt.id_player = ###id_player### and " +
                    "pt.id_team_club = tc.id and tc.id_season = s.id and s.id_league = l.id order by s.id_season_feb desc";
                    query = query.replace("###id_player###", args.id_player);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                },
            },
            player_std_stats: {
                type: GraphQLList(PlayerStdStats),
                description: "Standard stats of a player in a team",
                args: {
                    id_player_team: {
                        type: GraphQLInt
                    },
                },
                resolve(root, args){
/*                     let query = "select p.id as id_player, sum(pss.games) as games, sum(minutes) as minutes, round(sum(minutes)/sum(games), 2) as mpp, " + 
                    "sum(t2p_conv) as t2p_conv, round(sum(t2p_conv)/sum(games), 2) as t2p_conv_pp, sum(t2p_int) as t2p_int, " + 
                    "round(sum(t2p_int)/sum(games), 2) as t2p_int_pp, coalesce(round(sum(t2p_conv)/sum(t2p_int)*100, 2), 0) as t2p_percentage, " + 
                    "sum(t3p_conv) as t3p_conv, round(sum(t3p_conv)/sum(games), 2) as t3p_conv_pp, sum(t3p_int) as t3p_int, " + 
                    "round(sum(t3p_int)/sum(games), 2) as t3p_int_pp, coalesce(round(sum(t3p_conv)/sum(t3p_int)*100, 2), 0) as t3p_percentage, " + 
                    "sum(t2p_conv + t3p_conv) as tc_conv, round(sum(t2p_conv + t3p_conv)/sum(games), 2) as tc_conv_pp, sum(t2p_int + t3p_int) as tc_int, " + 
                    "round(sum(t2p_int + t3p_int)/sum(games), 2) as tc_int_pp, " +
                    "coalesce(round(sum(t2p_conv + t3p_conv)/sum(t2p_int + t3p_int)*100, 2), 0) as tc_percentage, sum(tl_conv) as tl_conv, sum(tl_int) as tl_int, " +
                    "coalesce(round(sum(tl_conv)/sum(tl_int)*100, 2), 0) as tl_percentage, round(sum(tl_conv)/sum(games), 2) as tl_conv_pp, " + 
                    "round(sum(tl_int)/sum(games), 2) as tl_int_pp, sum(t2p_conv)*2 + sum(t3p_conv) * 3 + sum(tl_conv) as total_puntos, " +
                    "coalesce(round((sum(t2p_conv)*2 + sum(t3p_conv) * 3 + sum(tl_conv))/(sum(t2p_int) + sum(t3p_int) + sum(tl_int)), 2), 0.00) ppa, " +
                    "coalesce(round((sum(t2p_conv)*2)/(sum(t2p_conv)*2 + sum(t3p_conv) * 3 + sum(tl_conv))*100, 2), 0.00) as p_t2p_puntos, " +
                    "coalesce(round((sum(t3p_conv)*3)/(sum(t2p_conv)*2 + sum(t3p_conv) * 3 + sum(tl_conv))*100, 2), 0.00) as p_t3p_puntos, " + 
                    "100 - (coalesce(round((sum(t2p_conv)*2)/(sum(t2p_conv)*2 + sum(t3p_conv) * 3 + sum(tl_conv))*100, 2), 0.00) + " +
                    "coalesce(round((sum(t3p_conv)*3)/(sum(t2p_conv)*2 + sum(t3p_conv) * 3 + sum(tl_conv))*100, 2), 0.00)) as p_tl_puntos, " +
                    "coalesce(round((sum(t2p_conv)*2 + sum(t3p_conv)*3 + sum(tl_conv))/(sum(t2p_int + t3p_int) + 0.44*sum(tl_int) - sum(reb_of) + " +
                    "sum(turnovers)), 2), 0.00) as pointsbyposs," +
                    "round((sum(t2p_conv)*2 + sum(t3p_conv) * 3 + sum(tl_conv))/sum(games), 2) as total_puntos_pp, sum(reb_def) as rd, " +
                    "round(sum(reb_def)/sum(games), 2) as reb_def_pp, sum(reb_of) as ro, round(sum(reb_of)/sum(games), 2) as reb_of_pp, " +
                    "sum(reb_def + reb_of) as tot_reb, round(sum(reb_def + reb_of)/sum(games), 2) as total_rebs_pp, sum(assists) as assists, " + 
                    "sum(assists)/sum(games) as assists_pp, sum(steals) as steals, round(sum(steals)/sum(games), 2) as steals_pp, sum(turnovers) as tov, " + 
                    "round(sum(turnovers)/sum(games), 2) as turnovers_pp, coalesce(round(sum(assists)/sum(turnovers), 2), sum(assists)) as astov, " +
                    "sum(block_shots) as block_shots, round(sum(block_shots)/sum(games), 2) as block_shots_pp, sum(fouls_cm) as fouls_cm, " + 
                    "round(sum(fouls_cm)/sum(games), 2) as fouls_cm_pp, sum(fouls_rv) as fouls_rv, round(sum(fouls_rv)/sum(games), 2) as fouls_rv_pp, " + 
                    "sum(efficience) as efficience, round(sum(efficience)/sum(games), 2) as efficience_pp from " + 
                    "tbl003_player p, tbl006_player_team pt, tbl010_player_std_stats pss, tbl012_competition c, tbl015_seasons s where " + 
                    "p.id = ###id_player### and p.id = pt.id_player and pt.id = pss.id_player_team and pss.id_competition = c.id and " +
                    "c.id_season = s.id and s.id = ###id_season### group by pss.id_player_team"; */
                    let query = "select pss.*, pas.assists_x_turnovers as astov, pss.reb_def as rd, pss.reb_of as ro, pss.total_rebs as tot_reb, pss.turnovers as tov " +
                    "from tbl038_player_season_standard_stats pss, tbl039_player_season_advanced_stats pas where pss.id_player_team = ###id_player_team### and " +
                    "pss.id_player_team = pas.id_player_team";
                    query = query.replace("###id_player_team###", args.id_player_team);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            player_adv_stats: {
                type: GraphQLList(PlayerAdvStats),
                description: "Advanced stats of a player in a season",
                args: {
                    id_player_team: {
                        type: GraphQLInt
                    },
                },
                resolve(root, args){
/*                     let query = "select pss. minutes, pas.* from tbl003_player p, tbl006_player_team pt, tbl005_team_club tc, tbl039_player_season_advanced_stats pas, " + 
                    "tbl038_player_season_standard_stats pss where p.id = ###id_player### and p.id = pt.id_player and pt.id_team_club = tc.id and " +
                    "tc.id_season = ###id_season### and pt.id = pas.id_player_team and pas.id_season = ###id_season### and pas.id_player_team = pss.id_player_team"; */
                    let query = "select pss.minutes, pas.* from tbl039_player_season_advanced_stats pas, tbl038_player_season_standard_stats pss where " +
                    "pas.id_player_team = ###id_player_team### and pas.id_player_team = pss.id_player_team";
                    query = query.replace("###id_player_team###", args.id_player_team);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            players_adv_stats: {
                type: GraphQLList(PlayerAdvStats),
                description: "List of advanced stats of a all players in a season",
                args: {
                    id_season: {
                        type: GraphQLInt
                    },
                    groups: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = null;
                    if (typeof args.groups === "undefined"){
                        query = "select concat(p.name, ' (', tc.abrev, ') ') as name_player, pss.minutes, pas.* from tbl003_player p, tbl006_player_team pt, " + 
                        "tbl005_team_club tc, tbl039_player_season_advanced_stats pas, tbl038_player_season_standard_stats pss where " +
                        "pas.id_season = ###id_season### and pas.id_player_team = pss.id_player_team and pas.id_team_club = tc.id and " +
                        "pas.id_player_team = pt.id and pt.id_player = p.id";
                        query = query.replace("###id_season###", args.id_season);    
                    }else{
                        query = "select concat(p.name, ' (', tc.abrev, ') ') as name_player, pss.minutes, pas.* from tbl003_player p, tbl006_player_team pt, " +
                        "tbl005_team_club tc, tbl039_player_season_advanced_stats pas, tbl038_player_season_standard_stats pss where pas.id_season = ###id_season### and  " +
                        "pas.id_player_team = pss.id_player_team and pas.id_team_club = tc.id and pas.id_player_team = pt.id and pt.id_player = p.id and " +
                        "pss.games >= round((select count(*) from tbl004_jornada j, tbl012_competition c where j.id_competition = c.id and c.id_season and c.id_season = ###id_season###)/###groups###*0.55, 2)";
                        query = query.replace(/###id_season###/g, args.id_season);    
                        query = query.replace(/###groups###/g, args.groups);
                    }
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            players_advstats_by_team: {
                type: GraphQLList(PlayerAdvStats),
                description: "Advanced stats from players of a team",
                args: {
                    id_team_club: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select pas.*, p.name as name_player from tbl039_player_season_advanced_stats pas, tbl006_player_team pt, tbl003_player p where " +
                    "pas.id_team_club = ###id_team_club### and pas.id_player_team = pt.id and pt.id_player = p.id";
                    query = query.replace("###id_team_club###", args.id_team_club);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            player_advstats_history: {
                type: GraphQLList(PlayerAdvStats),
                description: "Returns the advanced stats history of a player",
                args: {
                    id_player: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select s.description as season_name, pss.minutes, pas.* from tbl003_player p, " + 
                    "tbl006_player_team pt, tbl005_team_club tc, tbl015_seasons s, tbl039_player_season_advanced_stats pas,tbl038_player_season_standard_stats pss " + 
                    "where p.id = ###id_player### and pt.id_player = p.id and pt.id_team_club = tc.id and tc.id_season = s.id and " +
                    "pas.id_player_team = pt.id and pss.id_player_team = pas.id_player_team order by s.description desc";
                    query = query.replace("###id_player###", args.id_player);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            players_clubs: {
                type: GraphQLList(PlayersClubs),
                description: "List of players and clubs",
                resolve(root){
                    let query = "select 'p' as type, id, name from tbl003_player union select 'c' as type, id, name from tbl002_club order by type, name asc";
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            players_std_stats: {
                type: GraphQLList(PlayerStdStats),
                description: "List of standard stats of all players in a season",
                args: {
                    id_season: {
                        type: GraphQLInt
                    },
                    groups: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = null;
                    if (typeof args.groups === "undefined"){
                        query = "select concat(p.name, ' (', tc.abrev, ') ') as name_player, pss.*, pas.assists_x_turnovers as astov, " + 
                        "pss.reb_def as rd, pss.reb_of as ro, pss.total_rebs as tot_reb, pss.turnovers as tov from tbl038_player_season_standard_stats pss, " + 
                        "tbl006_player_team pt, tbl003_player p, tbl005_team_club tc, tbl039_player_season_advanced_stats pas where pss.id_season = ###id_season### and " +
                        "pss.id_player_team = pt.id and pt.id_player = p.id and pt.id_team_club = tc.id and pss.id_player_team = pas.id_player_team";
                        query = query.replace("###id_season###", args.id_season);    
                    }else{
                        query = "select concat(p.name, ' (', tc.abrev, ') ') as name_player, pss.*, pas.assists_x_turnovers as astov, pss.reb_def as rd, " +
                        "pss.reb_of as ro, pss.total_rebs as tot_reb, pss.turnovers as tov from tbl038_player_season_standard_stats pss, " + 
                        "tbl006_player_team pt, tbl003_player p, tbl005_team_club tc, tbl039_player_season_advanced_stats pas where pss.id_season = ###id_season### and " +
                        "pss.id_player_team = pt.id and pt.id_player = p.id and pt.id_team_club = tc.id and pss.id_player_team = pas.id_player_team and " +
                        "pss.games >= round((select count(*) from tbl004_jornada j, tbl012_competition c where j.id_competition = c.id and c.id_season and " + 
                        "c.id_season = ###id_season###)/###groups###*0.55, 2)";
                        query = query.replace(/###id_season###/g, args.id_season);
                        query = query.replace(/###groups###/g, args.groups);
                    }
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            players_stdstats_by_team: {
                type: GraphQLList(PlayerStdStats),
                description: "Standard stats from players of a team",
                args: {
                    id_team_club: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select pt.id as id_player, p.name as name_player, pss.*, pss.reb_def as rd, pss.reb_of as ro, pss.total_rebs as tot_reb, " +
                    "pss.turnovers as tov, coalesce(round(pss.assists/pss.turnovers, 2), pss.assists) as astov from tbl038_player_season_standard_stats pss, " + 
                    "tbl006_player_team pt, tbl003_player p where pss.id_team_club = ###id_team_club### and pss.id_player_team = pt.id and pt.id_player = p.id";
                    query = query.replace("###id_team_club###", args.id_team_club);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            player_stdstats_history: {
                type: GraphQLList(PlayerStdStats),
                description: "Returns the history of the standard stats of a player",
                args: {
                    id_player: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select concat(s.description, ' / ', tc.name) as season_name, pss.*, pas.assists_x_turnovers as astov, pss.reb_def as rd, " + 
                    "pss.reb_of as ro, pss.total_rebs as tot_reb, pss.turnovers as tov from tbl038_player_season_standard_stats pss, " + 
                    "tbl003_player p, tbl006_player_team pt, tbl005_team_club tc, tbl015_seasons s, tbl039_player_season_advanced_stats pas where " +
                    "p.id = ###id_player### and p.id = pt.id_player and pt.id_team_club = tc.id and tc.id_season = s.id and pss.id_player_team = pt.id and " +
                    "pss.id_player_team = pas.id_player_team order by s.description desc";
                    query = query.replace("###id_player###", args.id_player);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            quarters_by_game: {
                type: GraphQLList(Quarters),
                description: "Return a list with the quarters played in a game",
                args: {
                    id_game: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select q.id_game, tc1.name as home_team, tc2.name as away_team, q.id_quarter, q.home_score, q.away_score, " +
                    "q.date_insert from tbl016_quarters q, tbl007_game g1, tbl007_game g2, tbl005_team_club tc1, tbl005_team_club tc2 where " +
                    "q.id_game = ###id_game### and q.id_game = g1.id and q.id_game = g2.id and g1.id_team_home = tc1.id and g2.id_team_away = tc2.id";
                    query = query.replace("###id_game###", args.id_game);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            tas_by_comp: {
                type: GraphQLList(TCAdvStats),
                description: "List of team advanced stats by competition",
                args: {
                    id_competition: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select tas.id_team_club, tas.id_competition, tas.etc, tas.p_reb_def, tas.p_reb_of, tas.p_turnovers, " + 
                    "tas.ratio_tl as ratio_ft, tas.possessions, tas.possessions_x_minute, tas.assists_x_turnovers, tas.steals_x_turnovers, tas.ts, tas.rival_p_etc, " +
                    "tas.rival_p_turnovers, tas.rival_ratio_ft, tas.ortg, tas.drtg, tas.nrtg, tas.date_update, tss.games " + 
                    "from tbl028_tc_adv_stats tas, tbl027_tc_std_stats tss where " +
                    "tas.id_competition = ###id_competition### and tss.id_team_club = tas.id_team_club and tss.id_competition = tas.id_competition";
                    query = query.replace("###id_competition###", args.id_competition);
                    //console.log("\n\nquery: " + query + "\n\n\n");
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            team_advstats_by_season: {
                type: GraphQLList(TCAdvStats),
                description: "Advanced stats of a team in a whole season",
                args: {
                    id_club: {
                        type: GraphQLInt
                    },
                    id_season: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select tc.id_club, tss.games, tss.pointsbyposs as puntos_x_possession, round(tas.possessions/tss.games, 2) as pbg, tas.* " +
                    "from tbl037_team_season_advanced_stats tas, tbl005_team_club tc, tbl035_team_season_standard_stats tss where " +
                    "tc.id_club = ###id_club### and tc.id_season = ###id_season### and tc.id = tas.id_team_club and tas.id_team_club = tss.id_team_club";
                    query = query.replace(/###id_club###/g, args.id_club);
                    query = query.replace(/###id_season###/g, args.id_season);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            team_advstats_history: {
                type: GraphQLList(TCAdvStats),
                description: "History of advanced stats from a team/club",
                args: {
                    id_club: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select s.description as season_name, tc.id_club, tss.games, round(tss.total_puntos/tas.possessions, 2) as puntos_x_possession, " +
                    "round(tas.possessions/tss.games, 2) as pbg, tas.* from tbl005_team_club tc, tbl037_team_season_advanced_stats tas, tbl015_seasons s, " + 
                    "tbl035_team_season_standard_stats tss where tc.id_club = ###id_club### and tc.id = tas.id_team_club and s.id = tc.id_season and " +
                    "tss.id_team_club = tas.id_team_club order by s.description desc";                    
                    query = query.replace(/###id_club###/g, args.id_club);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            team_game_log: {
                type: GraphQLList(GameLog),
                description: "List with standard stats of each game played by a team in a season",
                args: {
                    id_club: {
                        type: GraphQLInt
                    },
                    id_season: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select gd.id_game, gd.date_game, gd.home_team_url, gd.home_abrev, gd.away_team_url, gd.away_abrev, gd.points, " +
                    "tss.minutes as mp, (tss.t2p_conv + tss.t3p_conv) as fgm, (tss.t2p_int + t3p_int) as fga, " + 
                    "coalesce(round((tss.t2p_conv + tss.t3p_conv)/(tss.t2p_int + tss.t3p_int)*100, 2), 0.00) as fgp, " +
                    "tss.t2p_conv, tss.t2p_int, coalesce(round(tss.t2p_conv/tss.t2p_int*100, 2), 0.00) as t2pp, " +
                    "tss.t3p_conv, tss.t3p_int, coalesce(round(tss.t3p_conv/tss.t3p_int*100, 2), 0.00) as t3pp, " +
                    "tss.tl_conv, tss.tl_int, coalesce(round(tss.tl_conv/tss.tl_int*100, 2), 0.00) as ftp, " +
                    "tss.reb_def, tss.reb_of, tss.reb_def + tss.reb_of as tot_reb, tss.assists, tss.turnovers, tss.steals, tss.block_shots, " +
                    "tss.fouls_cm, tss.fouls_rv, tss.efficience from tbl008_team_std_stats tss, (select g.id_team_club, g.id_game, g.date_game, tc1.url_name as home_team_url, " + 
                    "tc1.abrev as home_abrev, tc2.url_name as away_team_url, tc2.abrev as away_abrev, g.points from tbl005_team_club tc1, tbl005_team_club tc2, " + 
                    "(select tc.id as id_team_club, g.id as id_game, g.date_game, g.id_team_home, g.id_team_away, " + 
                    "(case when g.id_team_home = tc.id then home_score when g.id_team_away = tc.id then away_score end) as points " +
                    "from tbl002_club c, tbl005_team_club tc, tbl007_game g where c.id = ###id_club### and tc.id_club = c.id and " +
                    "tc.id_season = ###id_season### and (g.id_team_away = tc.id or g.id_team_home = tc.id) order by g.date_game asc) g where " +
                    "tc1.id = g.id_team_home and tc2.id = g.id_team_away) gd where gd.id_team_club = tss.id_team_club and gd.id_game = tss.id_game";
                    query = query.replace("###id_club###", args.id_club);
                    query = query.replace("###id_season###", args.id_season);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            teams_by_group: {
                type: new GraphQLList(TeamClub),
                description: "List of teams which belongs to a group",
                args: {
                    id_group: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select g.id as id_group, tc.* from tbl005_team_club tc, tbl033_groups g, tbl034_team_group tg where " +
                    "g.id = ###id_group### and g.id = tg.id_group and tg.id_team_club = tc.id";
                    query = query.replace(/###id_group###/g, args.id_group);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            teams_groups: {
                type: new GraphQLList(TeamClub),
                description: "List of teams of a season with their id_group",
                args: {
                    id_season: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select g.id as id_group, tc.* from tbl005_team_club tc, tbl033_groups g, tbl034_team_group tg where " +
                    "tc.id_season = ###id_season### and g.id_season = ###id_season### and tg.id_team_club = tc.id and tg.id_group = g.id";
                    query = query.replace(/###id_season###/g, args.id_season);
                    return FEBConnection.db.query(
                        query,
                        { raw: true, type: FEBConnection.db.QueryTypes.SELECT }
                    );
                }
            },
            team_margins: {
                type: new GraphQLList(TMargin),
                description: "Team margins for a whole season",
                args:{
                    id_club: {
                        type: GraphQLInt
                    },
                    id_season: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select c.id as id_club, tc.id as id_team_club, sum(case when g.id_team_home = tc.id then g.home_score " + 
                    "when g.id_team_away = tc.id then g.away_score end) as points, sum(case when g.id_team_home <> tc.id then g.home_score " +
                    "when g.id_team_away <> tc.id then g.away_score end) as opp_points, sum(case when g.id_team_home = tc.id then g.home_score " +
                    "when g.id_team_away = tc.id then g.away_score end) - sum(case when g.id_team_home <> tc.id then g.home_score " +
                    "when g.id_team_away <> tc.id then g.away_score end) as margin, count(*) as games, round(sum(case " +
                    "when g.id_team_home <> tc.id then g.home_score when g.id_team_away <> tc.id then g.away_score end)/count(*), 2) as opp_points_pg, " + 
                    "round((sum(case when g.id_team_home = tc.id then g.home_score when g.id_team_away = tc.id then g.away_score end) - sum(case " +
                    "when g.id_team_home <> tc.id then g.home_score when g.id_team_away <> tc.id then g.away_score end))/count(*), 2) as margin_pg " +
                    "from tbl007_game g, tbl002_club c, tbl005_team_club tc where c.id = ###id_club### and tc.id_club = c.id and " +
                    "tc.id_season = ###id_season### and (tc.id = g.id_team_home or tc.id = g.id_team_away) group by tc.id";
                    query = query.replace("###id_club###", args.id_club);
                    query = query.replace("###id_season###", args.id_season);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            team_opp_advstats_by_season:{
                type: GraphQLList(TCAdvStats),
                description: "Advanced stats from all the opponents of a team",
                args: {
                    id_club: {
                        type: GraphQLInt
                    },
                    id_season: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select c.id as id_club, tss.games, round(oss.total_puntos/oas.possessions, 2) as puntos_x_possession, round(oas.possessions/tss.games, 2) as pbg, oas.* " +
                    "from tbl043_opps_season_advanced_stats oas, tbl002_club c, tbl005_team_club tc, tbl035_team_season_standard_stats tss, tbl036_opps_season_standard_stats oss  where " +
                    "c.id = ###id_club### and tc.id_club = c.id and tc.id_season = ###id_season### and tc.id = oas.id_team_club and " +
                    "oas.id_team_club = tss.id_team_club and oas.id_team_club = oss.id_team_club";
                    query = query.replace(/###id_club###/g, args.id_club);
                    query = query.replace(/###id_season###/g, args.id_season);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            team_opp_stdstats_by_season:{
                type: GraphQLList(TeamCompStats),
                description: "Standard stats from all the opponents of a team",
                args: {
                    id_club: {
                        type: GraphQLInt
                    },
                    id_season: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select tc.id_club, oss.* from tbl005_team_club tc, tbl036_opps_season_standard_stats oss where tc.id_club = ###id_club### and " +
                    "tc.id_season = ###id_season### and tc.id = oss.id_team_club";                    
                    query = query.replace("###id_club###", args.id_club);
                    query = query.replace("###id_season###", args.id_season);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            team_stdstats_by_season: {
                type: GraphQLList(TeamCompStats),
                description: "Standard stats from a team for a whole season",
                args: {
                    id_club: {
                        type: GraphQLInt
                    },
                    id_season: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select tc.id_club, tss.* from tbl035_team_season_standard_stats tss, tbl005_team_club tc where tc.id_club = ###id_club### and " +
                    "tc.id_season = ###id_season### and tc.id = tss.id_team_club";
                    query = query.replace("###id_club###", args.id_club);
                    query = query.replace("###id_season###", args.id_season);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );                    
                }
            },
            team_stdstats_history: {
                type: GraphQLList(TeamCompStats),
                description: "Standard stats history from a club",
                args: {
                    id_club: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select s.description as season_name, tc.id_club, coalesce(round(tss.assists/tss.turnovers, 2), tss.assists) as astov, tss.* from " +
                    "tbl005_team_club tc, tbl035_team_season_standard_stats tss, tbl015_seasons s where tc.id_club = ###id_club### and " +
                    "tc.id = tss.id_team_club and s.id = tc.id_season order by s.description desc";
                    query = query.replace("###id_club###", args.id_club);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            team_comp_stats: {
                type: GraphQLList(TeamCompStats),
                description: "Media de estadísticas estdard de un equipo en una determinada competición",
                args: {
                    id_team_club: {
                        type: GraphQLInt
                    },
                    id_competition: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select tc.id_club, tcs.id_team_club, tc.name, tcs.id_competition, s.description, tcs.games, tcs.minutes, tcs.t2p_conv, " +
                    "round(tcs.t2p_conv/tcs.games, 2) as t2p_conv_pp, tcs.t2p_int, round(tcs.t2p_int/tcs.games, 2) as t2p_int_pp, round(tcs.t2p_conv/tcs.t2p_int*100, 2) as t2p_percentage, " +
                    "tcs.t3p_conv, round(tcs.t3p_conv/tcs.games, 2) as t3p_conv_pp, tcs.t3p_int, round(tcs.t3p_int/tcs.games, 2) as t3p_int_pp, round(tcs.t3p_conv/tcs.t3p_int*100, 2) as t3p_percentage, " +
                    "(tcs.t2p_conv + tcs.t3p_conv) as tc_conv, round((tcs.t2p_conv + tcs.t3p_conv)/tcs.games, 2) as tc_conv_pp, (tcs.t2p_int + tcs.t3p_int) as tc_int, " +
                    "round((tcs.t2p_int + tcs.t3p_int)/tcs.games, 2) as tc_int_pp, round(((tcs.t2p_conv + tcs.t3p_conv)/(tcs.t2p_int + tcs.t3p_int)*100), 2) as tc_percentage, " +
                    "tcs.tl_conv, round(tcs.tl_conv/tcs.games, 2) as tl_conv_pp, tcs.tl_int, round(tcs.tl_int/tcs.games, 2) as tl_int_pp, round(tcs.tl_conv/tcs.tl_int*100, 2) as tl_percentage, " +
                    "tcs.t2p_conv*2 + tcs.t3p_conv*3 + tcs.tl_conv as total_puntos, round((tcs.t2p_conv*2 + tcs.t3p_conv*3 + tcs.tl_conv)/tcs.games, 2) as total_puntos_pp, " +
                    "round(tcs.tl_conv/(tcs.t2p_conv*2 + tcs.t3p_conv*3 + tcs.tl_conv)*100, 2) as p_tl_puntos, " +
                    "round(tcs.t2p_conv*2/(tcs.t2p_conv*2 + tcs.t3p_conv*3 + tcs.tl_conv)*100, 2) as p_t2p_puntos, " +
                    "round(tcs.t3p_conv*3/(tcs.t2p_conv*2 + tcs.t3p_conv*3 + tcs.tl_conv)*100, 2) as p_t3p_puntos, " +
                    "coalesce(round((tcs.t2p_conv*2 + tcs.t3p_conv * 3 + tcs.tl_conv)/(tcs.t2p_int + tcs.t3p_int + tcs.tl_int), 2), 0.00) ppa, " +
                    "coalesce(round((tcs.t2p_conv*2 + tcs.t3p_conv*3 + tcs.tl_conv)/((tcs.t2p_int + tcs.t3p_int) + 0.44*tcs.tl_int - tcs.reb_of + tcs.turnovers), 2), 0.00) as pointsbyposs, " +
                    "tcs.reb_def, round(tcs.reb_def/tcs.games, 2) as reb_def_pp, tcs.reb_of, round(tcs.reb_of/tcs.games, 2) as reb_of_pp, (tcs.reb_def + tcs.reb_of) as total_rebs, " +
                    "round((tcs.reb_def + tcs.reb_of)/tcs.games, 2) as total_rebs_pp, tcs.assists, round(tcs.assists/tcs.games, 2) as assists_pp, tcs.steals, " +
                    "round(tcs.steals/tcs.games, 2) as steals_pp, tcs.turnovers, round(tcs.turnovers/tcs.games, 2) as turnovers_pp, " +
                    "coalesce(round(tcs.assists/tcs.turnovers, 2), tcs.assists) as astov, tcs.block_shots, round(tcs.block_shots/tcs.games, 2) as block_shots_pp, " +
                    "tcs.fouls_cm, round(tcs.fouls_cm/tcs.games, 2) as fouls_cm_pp, tcs.fouls_rv, round(tcs.fouls_rv/tcs.games, 2) as fouls_rv_pp, tcs.efficience, " +
                    "round(tcs.efficience/tcs.games, 2) as efficience_pp from tbl027_tc_std_stats tcs, tbl005_team_club tc, tbl015_seasons s where " +
                    "tcs.id_team_club = ###id_team_club### and tcs.id_competition = ###id_competition### and tcs.id_team_club = tc.id and " +
                    "tc.id_season = s.id";                    
                    query = query.replace(/###id_team_club###/g, args.id_team_club);
                    query = query.replace(/###id_competition###/g, args.id_competition);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            team_season_std_stats: {
                type: GraphQLList(TeamCompStats),
                description: "Media de estadísticas estdard de un equipo en una determinada competición",
                args: {
                    id_team_club: {
                        type: GraphQLInt
                    },
                },
                resolve(root, args){
                    let query = "select * from tbl035_team_season_standard_stats where id_team_club = ###id_team_club###";                    
                    query = query.replace("###id_team_club###", args.id_team_club);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            team_tcas: {
                type: GraphQLList(TCAdvStats),
                description: "Estadísticas avanzadas de un equipo durante una temporada. Un equipo hace referencia a una temporada. En una temporada, podemos jugar varias competicions",
                args: {
                    id_team_club: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select * from tbl037_team_season_advanced_stats where id_team_club = ###id_team_club###";
                    query = query.replace(/###id_team_club###/g, args.id_team_club);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            team_adv_stats_by_comp: {
                type: GraphQLList(TCAdvStats),
                description: "Estadísticas avanzadas de un equipo para una determinada competición",
                args: {
                    id_team_club: {
                        type: GraphQLInt
                    },
                    id_competition: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select tas.id_team_club, tas.id_competition, tas.etc, tas.p_reb_def, tas.p_reb_of, tas.p_turnovers, " + 
                    "tas.ratio_tl as ratio_ft, tas.possessions, tas.possessions_x_minute, tas.assists_x_turnovers, " +
                    "tas.steals_x_turnovers, tas.ts, tas.rival_p_etc, tas.rival_p_turnovers, tas.rival_ratio_ft, tas.ortg, tas.drtg, tas.nrtg, tas.date_update, " + 
                    "tss.games from tbl028_tc_adv_stats tas, (select t.id_team_club, t.games from tbl027_tc_std_stats t where " + 
                    "t.id_team_club = ###id_team_club### and t.id_competition = ###id_competition###) tss where tas.id_team_club = ###id_team_club### and " +
                    "tas.id_team_club = tss.id_team_club and tas.id_competition = ###id_competition###";
                    query = query.replace(/###id_team_club###/g, args.id_team_club);
                    query = query.replace(/###id_competition###/g, args.id_competition);
                    return FEBConnection.db.query(
                        query,
                        { raw: true, type: FEBConnection.db.QueryTypes.SELECT }
                    );
                }
            },
            team_tcss: {
                type: GraphQLList(TCStdStats),
                description: "Estadísticas estandard de un equipo en una competición",
                args: {
                    id_team_club: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select t1.id_team_club, round(sum(t1.victories)/count(*), 0) as victories, sum(t1.games) as games, sum(t1.t2p_conv) as t2p_conv, " +
                    "sum(t1.t2p_int) as t2p_int, sum(t1.t3p_conv) as t3p_conv, sum(t1.t3p_int) as t3p_int, " +
                    "sum(t1.tl_conv) as tl_conv, sum(t1.tl_int) as tl_int, sum(t1.reb_def) as reb_def, sum(t1.reb_of) as reb_of, " +
                    "sum(t1.assists) as assists, sum(t1.steals) as steals, sum(t1.turnovers) as turnovers, os.against_total_points_pp from " +
                    "(select total_puntos_pp as against_total_points_pp from tbl036_opps_season_standard_stats os where os.id_team_club = ###id_team_club###) os, " +
                    "(select (home_wins.total + away_wins.total) as victories, tcss.* from tbl027_tc_std_stats tcss, " +
                    "(select g.id_team_home as id_team_club, count(*) as total from tbl007_game g, tbl004_jornada j, tbl012_competition c where " +
                    "c.id = j.id_competition and j.id = g.id_jornada and g.id_team_home = ###id_team_club### and g.home_score > g.away_score) home_wins, " +
                    "(select g.id_team_away as id_team_club, count(*) as total from tbl007_game g, tbl004_jornada j, tbl012_competition c where " +
                    "c.id = j.id_competition and j.id = g.id_jornada and g.id_team_away = ###id_team_club### and g.home_score < g.away_score) away_wins " +
                    "where tcss.id_team_club = ###id_team_club###) t1 group by t1.id_team_club";
                    query = query.replace(/###id_team_club###/g, args.id_team_club);
                    //console.log("QUERY: " + query);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );                
                }
            },
            team_wins: {
                type: GraphQLList(TWins),
                description: "Wins and percentage of wins of a team",
                args: {
                    id_club: {
                        type: GraphQLID
                    },
                    id_season: {
                        type: GraphQLID
                    }
                },
                resolve(root, args){
                    let query = "select t2.id_club, t2.id_team_club, t2.wins, t2.defeats, round(t2.wins/(t2.wins + t2.defeats)*100, 2) as p_wins from " + 
                    "(select t.id_club, t.id_team_club, sum(t.wins) as wins, sum(t.defeats) as defeats from (select c.id as id_club, tc.id as id_team_club, " +
                    "(case when (g.id_team_home = tc.id and g.home_score > g.away_score) or (g.id_team_away = tc.id and g.home_score < g.away_score) then 1 " +
                    "when (g.id_team_home = tc.id and g.home_score < g.away_score) or (g.id_team_away = tc.id and g.home_score > g.away_score) then 0 " +
                    "end) as wins, (case " +
                    "when (g.id_team_home = tc.id and g.home_score < g.away_score) or (g.id_team_away = tc.id and g.home_score > g.away_score) then 1 " +
                    "when (g.id_team_home = tc.id and g.home_score > g.away_score) or (g.id_team_away = tc.id and g.home_score < g.away_score) then 0 " +
                    "end) as defeats from tbl007_game g, tbl002_club c, tbl005_team_club tc where c.id = ###id_club### and tc.id_club = c.id and " +
                    "tc.id_season = ###id_season### and (tc.id = g.id_team_home or tc.id = g.id_team_away)) t group by t.id_team_club) t2";
                    query = query.replace("###id_club###", args.id_club);
                    query = query.replace("###id_season###", args.id_season);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            teamclub: {
                type: GraphQLList(TeamClub),
                description: "TeamClub a partir del id",
                args: {
                    id: {
                        type: GraphQLID
                    }
                },                
                resolve(root, args){
                    return FEBConnection.db.models.tbl005_team_club.findAll({where: args});
                }
            },
            team_by_club_season: {
                type: GraphQLList(TeamClub),
                description:"Returns the team with id_season and id_club like parameters",
                args: {
                    id_season: {
                        type: GraphQLInt
                    },
                    id_club: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    return FEBConnection.db.models.tbl005_team_club.findAll({where: args});
                }
            },
            teams_actual_season: {
                type: GraphQLList(TeamClub),
                description: "List of teams of actual season of a league",
                args: {
                    id_league: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select tc.* from tbl005_team_club tc, " +
                    "(select id from tbl015_seasons s where id_league = ###param1### order by s.id_season_feb desc limit 1) s where " +
                    "tc.id_season = s.id order by tc.name asc";
                    query = query.replace("###param1###", args.id_league);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );

                }
            },
            teams_advstats_by_season: {
                type: GraphQLList(TCAdvStats),
                description: "List Advanced stats of all the teams in a whole season",
                args: {
                    id_season: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select tc.id_club, tc.name, tss.games, tss.pointsbyposs as puntos_x_possession, round(tas.possessions/tss.games, 2) as pbg, " + 
                    "tas.* from tbl037_team_season_advanced_stats tas, tbl005_team_club tc, tbl035_team_season_standard_stats tss where " + 
                    "tc.id_season = ###id_season### and tc.id = tas.id_team_club and tas.id_team_club = tss.id_team_club";
                    query = query.replace(/###id_season###/g, args.id_season);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },            
            teams_by_season: {
                type: GraphQLList(TeamClub),
                description: "List of the teams for a season. There is a season for each competition",
                args: {
                    id_season:{
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    return FEBConnection.db.models.tbl005_team_club.findAll({
                        where: args,
                        order: [
                            ["name", "ASC"]
                        ]
                    });
                }
            },
            teams_margins: {
                type: GraphQLList(TMargin),
                description: "List of margins from a season for all the teams",
                args: {
                    id_season: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select c.id as id_club, tc.id as id_team_club, sum(case when g.id_team_home = tc.id then g.home_score " +
                    "when g.id_team_away = tc.id then g.away_score end) as points, sum(case when g.id_team_home <> tc.id then g.home_score " +
                    "when g.id_team_away <> tc.id then g.away_score end) as opp_points, sum(case when g.id_team_home = tc.id then g.home_score " +
                    "when g.id_team_away = tc.id then g.away_score end) - sum(case when g.id_team_home <> tc.id then g.home_score " +
                    "when g.id_team_away <> tc.id then g.away_score end) as margin, count(*) as games, round(sum(case " +
                    "when g.id_team_home <> tc.id then g.home_score when g.id_team_away <> tc.id then g.away_score end)/count(*), 2) as opp_points_pg, " + 
                    "round((sum(case when g.id_team_home = tc.id then g.home_score when g.id_team_away = tc.id then g.away_score end) - sum(case " +
                    "when g.id_team_home <> tc.id then g.home_score when g.id_team_away <> tc.id then g.away_score end))/count(*), 2) as margin_pg " +
                    "from tbl007_game g, tbl002_club c, tbl005_team_club tc where tc.id_club = c.id and tc.id_season = ###id_season### and " +
                    "(tc.id = g.id_team_home or tc.id = g.id_team_away) group by tc.id";
                    query = query.replace("###id_season###", args.id_season);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            teams_p_total_reb_by_season: {
                type: GraphQLList(TPercentageTRTS),
                description: "List of percentage total rebound and ts for each team in a same season",
                args:{
                    id_season:{
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select tc.id as id_team, tc.name, tss.id_team_club, tss.minutes, tss.total_rebs, oss.total_rebs as opp_total_rebs, " +
                    "round(tss.total_rebs/(tss.total_rebs + oss.total_rebs)*100, 2) as p_total_rebs, tas.ts from tbl035_team_season_standard_stats tss, " +
                    "tbl036_opps_season_standard_stats oss, tbl037_team_season_advanced_stats tas, tbl005_team_club tc where tss.id_season = ###id_season### and " +
                    "tss.id_team_club = tas.id_team_club and tss.id_team_club = tc.id and tss.id_team_club = oss.id_team_club";
                    query = query.replace(/###id_season###/g, args.id_season);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );                    
                }
            },
            teams_stdstats_by_season: {
                type: GraphQLList(TeamCompStats),
                description: "List of standards stats from a season for all the teams",
                args: {
                    id_season: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select tc.id_club, tc.name, coalesce(round(tss.assists/tss.turnovers, 2), tss.assists) as astov, " + 
                    "tss.* from tbl035_team_season_standard_stats tss, tbl005_team_club tc where tc.id_season = ###id_season### and " + 
                    "tc.id = tss.id_team_club";
                    query = query.replace("###id_season###", args.id_season);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            teams_wins: {
                type: GraphQLList(TWins),
                description: "Wins and percentage of wins of a team",
                args: {
                    id_season: {
                        type: GraphQLID
                    }
                },
                resolve(root, args){
                    let query = "select t2.id_club, t2.id_team_club, t2.wins, t2.defeats, round(t2.wins/(t2.wins + t2.defeats)*100, 2) as p_wins from " + 
                    "(select t.id_club, t.id_team_club, sum(t.wins) as wins, sum(t.defeats) as defeats from (select c.id as id_club, tc.id as id_team_club, " +
                    "(case when (g.id_team_home = tc.id and g.home_score > g.away_score) or (g.id_team_away = tc.id and g.home_score < g.away_score) then 1 " +
                    "when (g.id_team_home = tc.id and g.home_score < g.away_score) or (g.id_team_away = tc.id and g.home_score > g.away_score) then 0 " +
                    "end) as wins, (case " +
                    "when (g.id_team_home = tc.id and g.home_score < g.away_score) or (g.id_team_away = tc.id and g.home_score > g.away_score) then 1 " +
                    "when (g.id_team_home = tc.id and g.home_score > g.away_score) or (g.id_team_away = tc.id and g.home_score < g.away_score) then 0 " +
                    "end) as defeats from tbl007_game g, tbl002_club c, tbl005_team_club tc where tc.id_club = c.id and " +
                    "tc.id_season = ###id_season### and (tc.id = g.id_team_home or tc.id = g.id_team_away)) t group by t.id_team_club) t2";
                    query = query.replace("###id_club###", args.id_club);
                    query = query.replace("###id_season###", args.id_season);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },            
            tg_adv_stats: {
                type: GraphQLList(TGAdvStats),
                description:"Returns a list of game's advanced stats for a team",
                args: {
                    id_team_club: {
                        type: GraphQLInt
                    },
                    id_competition: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    return FEBConnection.db.models.tbl009_team_adv_stats.findAll({where: args});
                }
            },
            seasons_by_club: {
                type: GraphQLList(Seasons),
                description: "List of seasons played by a club",
                args: {
                    id_club: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select s.* from tbl005_team_club tc, tbl015_seasons s where tc.id_club = ###id_club### and tc.id_season = s.id " +
                    "order by s.id_season_feb desc";
                    query = query.replace("###id_club###", args.id_club);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }
            },
            season_data: {
                type: GraphQLList(Seasons),
                description: "Data of a season defined by its id",
                args: {
                    id: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    let query = "select l.name, s.* from tbl015_seasons s, tbl001_league l where s.id = ###id_season### and s.id_league = l.id";
                    query = query.replace("###id_season###", args.id);
                    return FEBConnection.db.query(
                        query,
                        {raw: true, type: FEBConnection.db.QueryTypes.SELECT}
                    );
                }                
            },
            seasons: {
                type: GraphQLList(Seasons),
                description: "List of seasons played",
                args: {
                    id_league: {
                        type: GraphQLInt
                    }
                },
                resolve(root, args){
                    return FEBConnection.db.models.tbl015_seasons.findAll({
                        where: args,
                        order: [
                            ["id_season_feb", "DESC"]
                        ]
                    });
                }                
            },
            test: {
                type: GraphQLList(Seasons),
                resolve(root){
                    return (
                        [
                            {id: 1, id_league: 1, id_season_feb: 2018, description: "Temporada 2017-2018"},
                            {id: 2, id_league: 1, id_season_feb: 2019, description: "Temporada 2019-2020"},
                        ]
                    );
                }
            }
        };
    }

});

const SchemaFEB = new GraphQLSchema({
    query: QueryFEB
});

module.exports.SchemaFEB =  SchemaFEB;