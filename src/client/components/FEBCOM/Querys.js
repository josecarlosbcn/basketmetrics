const BOXSCORE = "{\n" +
    "boxscore(id_game: ###id_game###, id_team_club: ###id_team_club###){\n" + 
    "id_game\n" + 
    "id_player_team\n" +
    "team_name\n" +
    "name\n" +
    "numero\n" +
    "minutes\n" +
    "points\n" +
    "t2p_conv\n" +
    "t2p_int\n" +
    "t2pp\n" +
    "t3p_conv\n" +
    "t3p_int\n" +
    "t3pp\n" +
    "tc_conv\n" +
    "tc_int\n" +
    "tcp\n" +
    "tl_conv\n" +
    "tl_int\n" +
    "tlp\n" +
    "reb_def\n" +
    "reb_of\n" +
    "total_rebounds\n" +
    "assists\n" +
    "steals\n" +
    "turnovers\n" +
    "block_shots\n" +
    "fouls_cm\n" +
    "fouls_rv\n" +
    "efficience\n" +
    "}\n" +
"}\n";

const COMPETITIONS  = "{\n" +
    "competitions_by_season(id_season: ###id_season###){\n" +
    "id\n" +
    "id_competition_feb\n" +
    "id_league\n" +
    "id_season\n" +
    "name\n" +
    "}\n" +
"}";

const COMPETITIONS_BY_TEAM = "{\n" +
    "competitions_by_team(id_team: ###id_team###){\n" +
    "id\n" +
    "id_competition_feb\n" +
    "id_league\n" +
    "id_season\n" +
    "name\n" +
    "}\n" +
"}";

const CLUB_SEASON = "{\n" +
    "club_season(id_club: ###id_club###){\n" +
    "id\n" +
    "description\n" +
    "name\n" +
    "leagueName\n" +
    "}\n" +  
"}";

const GAME_DATA = "{\n" +
    "game_data (id_game: ###id_game###){\n" +
    "id\n" +
    "id_team_home\n" +
    "home_team\n" + 
    "abrev_home\n" +
    "home_url_name\n" +
    "home_score\n" +
    "id_team_away\n" +
    "away_team\n" +
    "abrev_away\n" +
    "away_url_name\n" +
    "away_score\n" +
    "place\n" +
    "date_game\n" +
    "}\n" +
"}";

const GAME_ADV_STATS = "{\n" +
    "game_adv_stats(id_game: ###id_game###){\n" +
    "id_game\n" +
    "id_team_club\n" +
    "id_competition\n" + 
    "etc\n" +
    "p_reb_def\n" +
    "p_reb_of\n" +
    "p_turnovers\n" + 
    "ratio_ft\n" + 
    "possessions\n" +
    "possessions_x_minute\n" +
    "assists_x_turnovers\n" + 
    "steals_x_turnovers\n" + 
    "rival_p_etc\n" + 
    "rival_p_turnovers\n" + 
    "ts\n" +
    "rival_ratio_ft\n" + 
    "ortg\n" +
    "drtg\n" +
    "nrtg\n" +
    "date_insert\n" +
    "}\n" +
"}";

const GAME_LOG = "{\n" +
    "game_log(id_player_team: ###id_player_team###){\n" +
    "id_game\n" + 
    "date_game\n" +
    "home_team_url\n" + 
    "home_abrev\n" +
    "away_team_url\n" +
    "away_abrev\n" + 
    "mp\n" + 
    "points\n" +
    "fgm\n" + 
    "fga\n" +
    "fgp\n" +
    "t2p_conv\n" +
    "t2p_int\n" + 
    "t2pp\n" +
    "t3p_conv\n" +
    "t3p_int\n" + 
    "t3pp\n" +
    "tl_conv\n" +
    "tl_int\n" + 
    "ftp\n" + 
    "reb_def\n" +
    "reb_of\n" +
    "tot_reb\n" + 
    "assists\n" + 
    "turnovers\n" + 
    "steals\n" + 
    "block_shots\n" + 
    "fouls_cm\n" + 
    "efficience\n" +
    "}\n" +
"}";

const GAME_STATS_BY_TEAM = "{\n"
    + "game_stats_by_team(id_team_club: ###id_team_club###, id_competition: ###id_competition###){\n"
    + "id\n"
    + "date_game\n"
    + "id_team_home\n"
    + "home_team\n"
    + "home_url_name\n"
    + "home_abrev_name\n"
    + "home_score\n"
    + "id_team_away\n"
    + "away_team\n"
    + "away_url_name\n"
    + "away_abrev_name\n"
    + "away_score\n"
    + "id_team_club\n"
    + "id_competition\n"
    + "minutes\n"
    + "t2p_conv\n"
    + "t2p_int\n"
    + "t2p_percentage\n"
    + "t3p_conv\n"
    + "t3p_int\n"
    + "t3p_percentage\n"
    + "tc_conv\n"
    + "tc_int\n"
    + "tc_percentage\n"
    + "tl_conv\n"
    + "tl_int\n"
    + "tl_percentage\n"
    + "reb_def\n"
    + "reb_of\n"
    + "assists\n"
    + "steals\n"
    + "turnovers\n"
    + "block_shots\n"
    + "fouls_cm\n"
    + "fouls_rv\n"
    + "efficience\n"
    + "}\n"
+ "}";

const GROUPS = "{\n" +
    "groups(id_season: ###id_season###, id_league: ###id_league###){\n" +
    "id\n" +
    "group_name\n" +
    "id_league\n" +
    "id_season\n" + 
    "date_insert\n" +
    "}\n" +
"}";

const QUERY_PLAYERS = "{\n" 
    + "players(id: ###param1###){\n"
    + "     id\n"    
    + "     name\n"    
    + "     name_url\n"
    + "     language\n"
    + "     twitter\n"
    + "     height\n"
    + "     birthday\n"
    + "     date_insert\n"  
    + "}\n"
+ "}";
const HOMELF1_NEXT_GAMES = "{\n "
    + "list_nextgamedaylf1{\n "
    + "     id\n"
    + "     id_competition\n"
    + "     competition\n"
    + "     id_home_team\n"
    + "     home_team\n"
    + "     home_url_name\n"
    + "     id_away_team\n"
    + "     away_team\n"
    + "     away_url_name\n"
    + "     date\n"
    + "     played\n"
    + "     jornada\n"
    + "}\n"
+ "}";

const HOMELF2_NEXT_GAMES = "{\n "
    + "list_nextgamedaylf2{\n "
    + "     id\n"
    + "     id_competition\n"
    + "     competition\n"
    + "     id_home_team\n"
    + "     home_team\n"
    + "     home_url_name\n"
    + "     id_away_team\n"
    + "     away_team\n"
    + "     away_url_name\n"
    + "     date\n"
    + "     played\n"
    + "     jornada\n"
    + "}\n"
+ "}";

const LEAGUE_STATS = "{\n"
    + "league_stats(id_season: ###id_season###){\n" 
    + "t2p_percentage\n"
    + "t3p_percentage\n"
    + "tl_percentage\n"
    + "pbg\n"
    + "tpbg\n"
    + "pbp\n"
    + "mbp\n"
    + "etc\n"
    + "ts\n"
    + "p_reb_def\n"
    + "p_reb_of\n"
    + "p_tot_reb\n"
    + "p_assists\n"
    + "assists_ratio\n"
    + "p_steals\n"
    + "}\n"
+ "}";

const TEAMS_ACTUAL_SEASON = "{\n"
    + "teams_actual_season(id_league: ###param1###){\n"
    + "id\n"
    + "id_club\n"
    + "name\n"
    + "abrev\n"
    + "url_name\n"
    + "}\n"
+ "}";

const PLAYER_ADVANCED_STATS = "{\n" +
    "player_advanced_stats(id_game: ###id_game###){\n" +
    "id_team_club\n" +
    "team_name\n" +
    "numero\n" +
    "name_player\n" +
    "id_player_team\n" +
    "id_game\n" +
    "id_competition\n" +
    "dre\n" +
    "game_score\n" +
    "per\n" +
    "etc\n" +
    "ts\n" +
    "usg\n" +
    "p_reb_def\n" +
    "p_reb_of\n" +
    "p_tot_reb\n" +
    "p_assists\n" +
    "assists_x_turnovers\n" +
    "assists_ratio\n" +
    "p_steals\n" +
    "ortg\n" +
    "drtg\n" +
    "nrtg\n" +
    "date_insert\n" +
    "}\n" +
"}";

const PLAYER_ADVSTATS_HISTORY = "{\n"
    + "player_advstats_history(id_player: ###id_player###){\n"
    + "id_player_team\n"
    + "season_name\n"    
    + "games\n"
    + "dre\n" 
    + "game_score\n" 
    + "per\n" 
    + "etc\n" 
    + "ts\n" 
    + "usg\n" 
    + "p_reb_def\n" 
    + "p_reb_of\n" 
    + "p_tot_reb\n" 
    + "p_assists\n" 
    + "assists_x_turnovers\n" 
    + "assists_ratio\n" 
    + "p_steals\n" 
    + "ortg\n" 
    + "drtg\n" 
    + "nrtg\n" 
    + "}\n" 
+ "}"

const PLAYER_SEASON = "{\n" +
    "player_season(id_player: ###id_player###){\n" +
    "id_player_team\n" +
    "id_season\n" +
    "description\n" +
    "team\n" +
    "league\n" +
    "}\n" +
"}";

const PLAYER_STD_STATS = "{\n"
    + "player_std_stats(id_player_team: ###id_player_team###){\n"
    + "id_player\n"
    + "games\n"
    + "minutes\n"
    + "mpp\n"
    + "t2p_conv\n"
    + "t2p_conv_pp\n"
    + "t2p_int\n"
    + "t2p_int_pp\n"
    + "t2p_percentage\n"
    + "t3p_conv\n"
    + "t3p_conv_pp\n"
    + "t3p_int\n"
    + "t3p_int_pp\n"
    + "t3p_percentage\n"
    + "tc_conv\n"
    + "tc_conv_pp\n"
    + "tc_int\n"
    + "tc_int_pp\n"
    + "tc_percentage\n"
    + "tl_conv\n"
    + "tl_int\n"
    + "tl_percentage\n"
    + "tl_conv_pp\n"
    + "tl_int_pp\n"
    + "total_puntos\n"
    + "total_puntos_pp\n"
    + "p_t2p_puntos\n"
    + "p_t3p_puntos\n"
    + "p_tl_puntos\n"
    + "ppa\n"
    + "pointsbyposs\n"
    + "rd\n"
    + "reb_def_pp\n"
    + "ro\n"
    + "reb_of_pp\n"
    + "tot_reb\n"
    + "total_rebs_pp\n"
    + "assists\n"
    + "assists_pp\n"
    + "steals\n"
    + "steals_pp\n"
    + "tov\n"
    + "turnovers_pp\n"
    + "astov\n"
    + "block_shots\n"
    + "block_shots_pp\n"
    + "fouls_cm\n"
    + "fouls_cm_pp\n"
    + "fouls_rv\n"
    + "fouls_rv_pp\n"
    + "efficience\n"
    + "efficience_pp\n"
    + "}\n"
+ "}";

const PLAYERS_CLUBS = "{\n"
    + "players_clubs{\n"
    + "type\n"
    + "id\n"
    + "name\n"
    + "}\n"
+ "}";

const PLAYER_SEASON_ADV_STATS = "{\n"
    + "player_adv_stats(id_player_team: ###id_player_team###){\n"
    + "id_player\n"
    + "games\n"
    + "dre\n"
    + "game_score\n"
    + "etc\n"
    + "ts\n"
    + "usg\n"
    + "p_reb_def\n"
    + "p_reb_of\n"
    + "p_tot_reb\n"
    + "p_assists\n"
    + "assists_x_turnovers\n"
    + "assists_ratio\n"
    + "p_steals\n"
    + "ortg\n"
    + "drtg\n"
    + "nrtg\n"
    + "}\n"
+ "}";

const PLAYER_STDSTATS_HISTORY = "{\n"
    + "player_stdstats_history(id_player: ###id_player###){\n"
    + "id_player_team\n"
    + "season_name\n"
    + "id_player\n"
    + "games\n"
    + "minutes\n"
    + "mpp\n"
    + "t2p_conv\n"
    + "t2p_conv_pp\n"
    + "t2p_int\n"
    + "t2p_int_pp\n"
    + "t2p_percentage\n"
    + "t3p_conv\n"
    + "t3p_conv_pp\n"
    + "t3p_int\n"
    + "t3p_int_pp\n"
    + "t3p_percentage\n"
    + "tc_conv\n"
    + "tc_conv_pp\n"
    + "tc_int\n"
    + "tc_int_pp\n"
    + "tc_percentage\n"
    + "tl_conv\n"
    + "tl_int\n"
    + "tl_percentage\n"
    + "tl_conv_pp\n"
    + "tl_int_pp\n"
    + "total_puntos\n"
    + "total_puntos_pp\n"
    + "p_t2p_puntos\n"
    + "p_t3p_puntos\n"
    + "p_tl_puntos\n"
    + "ppa\n"
    + "pointsbyposs\n"
    + "rd\n"
    + "reb_def_pp\n"
    + "ro\n"
    + "reb_of_pp\n"
    + "tot_reb\n"
    + "total_rebs_pp\n"
    + "assists\n"
    + "assists_pp\n"
    + "steals\n"
    + "steals_pp\n"
    + "tov\n"
    + "turnovers_pp\n"
    + "astov\n"
    + "block_shots\n"
    + "block_shots_pp\n"
    + "fouls_cm\n"
    + "fouls_cm_pp\n"
    + "fouls_rv\n"
    + "fouls_rv_pp\n"
    + "efficience\n"
    + "efficience_pp\n"
    + "}\n"
+ "}"

const PLAYERS_SEASON_ADV_STATS = "{\n"
    + "players_adv_stats(id_season: ###id_season###){\n"
    + "id_player\n"
    + "name_player\n"
    + "games\n"
    + "dre\n"
    + "game_score\n"
    + "etc\n"
    + "ts\n"
    + "usg\n"
    + "p_reb_def\n"
    + "p_reb_of\n"
    + "p_tot_reb\n"
    + "p_assists\n"
    + "assists_x_turnovers\n"
    + "assists_ratio\n"
    + "p_steals\n"
    + "ortg\n"
    + "drtg\n"
    + "nrtg\n"
    + "}\n"
+ "}";

const PLAYERS_SEASON_ADV_STATS_2 = "{\n"
    + "players_adv_stats(id_season: ###id_season###, groups: ###groups###){\n"
    + "id_player\n"
    + "name_player\n"
    + "games\n"
    + "dre\n"
    + "game_score\n"
    + "etc\n"
    + "ts\n"
    + "usg\n"
    + "p_reb_def\n"
    + "p_reb_of\n"
    + "p_tot_reb\n"
    + "p_assists\n"
    + "assists_x_turnovers\n"
    + "assists_ratio\n"
    + "p_steals\n"
    + "ortg\n"
    + "drtg\n"
    + "nrtg\n"
    + "}\n"
+ "}";

const PLAYERS_STD_STATS = "{\n"
    + "players_std_stats(id_season: ###id_season###){\n"
    + "id_player\n"
    + "id_player_team\n"
    + "name_player\n"
    + "games\n"
    + "minutes\n"
    + "mpp\n"
    + "t2p_conv\n"
    + "t2p_conv_pp\n"
    + "t2p_int\n"
    + "t2p_int_pp\n"
    + "t2p_percentage\n"
    + "t3p_conv\n"
    + "t3p_conv_pp\n"
    + "t3p_int\n"
    + "t3p_int_pp\n"
    + "t3p_percentage\n"
    + "tc_conv\n"
    + "tc_conv_pp\n"
    + "tc_int\n"
    + "tc_int_pp\n"
    + "tc_percentage\n"
    + "tl_conv\n"
    + "tl_int\n"
    + "tl_percentage\n"
    + "tl_conv_pp\n"
    + "tl_int_pp\n"
    + "total_puntos\n"
    + "total_puntos_pp\n"
    + "p_t2p_puntos\n"
    + "p_t3p_puntos\n"
    + "p_tl_puntos\n"
    + "ppa\n"
    + "pointsbyposs\n"
    + "rd\n"
    + "reb_def_pp\n"
    + "ro\n"
    + "reb_of_pp\n"
    + "tot_reb\n"
    + "total_rebs_pp\n"
    + "assists\n"
    + "assists_pp\n"
    + "steals\n"
    + "steals_pp\n"
    + "tov\n"
    + "turnovers_pp\n"
    + "astov\n"
    + "block_shots\n"
    + "block_shots_pp\n"
    + "fouls_cm\n"
    + "fouls_cm_pp\n"
    + "fouls_rv\n"
    + "fouls_rv_pp\n"
    + "efficience\n"
    + "efficience_pp\n"
    + "}\n"
  + "}";

  const PLAYERS_STD_STATS_2 = "{\n"
  + "players_std_stats(id_season: ###id_season###, groups: ###groups###){\n"
  + "id_player\n"
  + "id_player_team\n"
  + "name_player\n"
  + "games\n"
  + "minutes\n"
  + "mpp\n"
  + "t2p_conv\n"
  + "t2p_conv_pp\n"
  + "t2p_int\n"
  + "t2p_int_pp\n"
  + "t2p_percentage\n"
  + "t3p_conv\n"
  + "t3p_conv_pp\n"
  + "t3p_int\n"
  + "t3p_int_pp\n"
  + "t3p_percentage\n"
  + "tc_conv\n"
  + "tc_conv_pp\n"
  + "tc_int\n"
  + "tc_int_pp\n"
  + "tc_percentage\n"
  + "tl_conv\n"
  + "tl_int\n"
  + "tl_percentage\n"
  + "tl_conv_pp\n"
  + "tl_int_pp\n"
  + "total_puntos\n"
  + "total_puntos_pp\n"
  + "p_t2p_puntos\n"
  + "p_t3p_puntos\n"
  + "p_tl_puntos\n"
  + "ppa\n"
  + "pointsbyposs\n"
  + "rd\n"
  + "reb_def_pp\n"
  + "ro\n"
  + "reb_of_pp\n"
  + "tot_reb\n"
  + "total_rebs_pp\n"
  + "assists\n"
  + "assists_pp\n"
  + "steals\n"
  + "steals_pp\n"
  + "tov\n"
  + "turnovers_pp\n"
  + "astov\n"
  + "block_shots\n"
  + "block_shots_pp\n"
  + "fouls_cm\n"
  + "fouls_cm_pp\n"
  + "fouls_rv\n"
  + "fouls_rv_pp\n"
  + "efficience\n"
  + "efficience_pp\n"
  + "}\n"
+ "}";

  const PLAYERS_ADVSTATS_BY_TEAM = "{\n"
  + "players_advstats_by_team(id_team_club: ###id_team_club###){\n"
  + "id_player_team\n"
  + "name_player\n"
  + "dre\n"
  + "game_score\n"
  + "per\n" 
  + "etc\n" 
  + "ts\n" 
  + "usg\n" 
  + "p_reb_def\n" 
  + "p_reb_of\n" 
  + "p_tot_reb\n" 
  + "p_assists\n" 
  + "assists_x_turnovers\n" 
  + "assists_ratio\n" 
  + "p_steals\n" 
  + "ortg\n" 
  + "drtg\n" 
  + "nrtg\n" 
  + "}\n" 
+ "}";  

const PLAYERS_STDSTATS_BY_TEAM = "{\n"
    + "players_stdstats_by_team(id_team_club: ###id_team_club###){\n"
    + "id_player_team\n"
    + "name_player\n"
    + "games\n"
    + "minutes\n"
    + "mpp\n"
    + "t2p_conv\n"
    + "t2p_conv_pp\n"
    + "t2p_int\n"
    + "t2p_int_pp\n"
    + "t2p_percentage\n"
    + "t3p_conv\n"
    + "t3p_conv_pp\n"
    + "t3p_int\n"
    + "t3p_int_pp\n"
    + "t3p_percentage\n"
    + "tc_conv\n"
    + "tc_conv_pp\n"
    + "tc_int\n"
    + "tc_int_pp\n"
    + "tc_percentage\n"
    + "tl_conv\n"
    + "tl_int\n"
    + "tl_percentage\n"
    + "tl_conv_pp\n"
    + "tl_int_pp\n"
    + "total_puntos\n"
    + "total_puntos_pp\n"
    + "p_t2p_puntos\n"
    + "p_t3p_puntos\n"
    + "p_tl_puntos\n"
    + "ppa\n"
    + "pointsbyposs\n"
    + "rd\n"
    + "reb_def_pp\n"
    + "ro\n"
    + "reb_of_pp\n"
    + "tot_reb\n"
    + "total_rebs_pp\n"
    + "assists\n"
    + "assists_pp\n"
    + "steals\n"
    + "steals_pp\n"
    + "tov\n"
    + "turnovers_pp\n"
    + "astov\n"
    + "block_shots\n"
    + "block_shots_pp\n"
    + "fouls_cm\n"
    + "fouls_cm_pp\n"
    + "fouls_rv\n"
    + "fouls_rv_pp\n"
    + "efficience\n"
    + "efficience_pp\n"
    + "}\n"
+ "}";

const PREVIA_NEXT_GAME_LF1 = "{\n "
    + "list_nextgamedaylf1(id: ###param1###){\n "
    + "     id\n"
    + "     id_competition\n"
    + "     id_home_team\n"
    + "     id_away_team\n"
    + "     jornada\n"
    + "}\n"
+ "}";

const PREVIA_NEXT_GAME_LF2 = "{\n "
    + "list_nextgamedaylf2(id: ###param1###){\n "
    + "     id\n"
    + "     id_competition\n"
    + "     id_home_team\n"
    + "     id_away_team\n"
    + "     jornada\n"
    + "}\n"
+ "}";

const PREVIA_TEAM = "{\n "
    + "teamclub(id: ###param1###){\n "
    + "     id\n"
    + "     id_league\n"
    + "     id_season\n"
    + "     id_club\n"
    + "     id_team_feb\n"
    + "     name\n"
    + "     abrev\n"
    + "}\n"
+ "}";

const PREVIA_TCSS = "{\n "
    + "team_tcss(id_team_club: ###id_team_club###){\n"
    + "id_team_club\n"
    + "games\n" 
    + "victories\n"
    + "t2p_conv\n"
    + "t2p_int\n"
    + "t3p_conv\n"
    + "t3p_int\n"
    + "tl_conv\n"
    + "tl_int\n"
    + "reb_def\n"
    + "reb_of\n"
    + "assists\n"
    + "steals\n"
    + "turnovers\n"
    + "against_total_points_pp\n"
    + "}\n"
+ "}";

const TEAM_PREVIA_ADV_STATS = "{\n "
    + "team_tcas(id_team_club: ###id_team_club###){\n"
    + "id_team_club\n"
    + "ts\n"
    + "p_reb_def\n"
    + "p_reb_of\n"
    + "etc\n"
    + "p_turnovers\n"
    + "ratio_ft\n"
    + "rival_p_etc\n"
    + "rival_p_turnovers\n"
    + "rival_ratio_ft\n"
    + "}\n"
+ "}";

const PREVIA_PLAYER = "{\n "
    + "player_previa(id_team_club: ###id_team_club###){\n"
    + "id\n"
    + "name\n"
    + "abrev\n"
    + "id_team_club\n"
    + "game_score\n"
    + "games\n"
    + "ts\n"
    + "t2p\n"
    + "t3p\n"
    + "tlp\n"
    + "points\n"
    + "reb_def\n"
    + "reb_of\n"
    + "assists\n"
    + "steals\n"
    + "turnovers\n"
    + "}\n"
+ "}";

const QUARTERS = "{\n" +
    "quarters_by_game(id_game: ###id_game###){\n" + 
    "id_game\n" + 
    "id_quarter\n" +
    "home_team\n" +
    "away_team\n" +
    "home_score\n" +
    "away_score\n" +
  "}\n" +
"}\n";

const RATIOS_N_POSSESSIONS = "{\n "
    + "team_adv_stats_by_comp(id_competition: ###id_competition###, id_team_club: ###id_team_club###){\n"
    + "id_team_club\n"
    + "possessions_x_minute\n"
    + "p_reb_def\n"
    + "p_reb_of\n"
    + "assists_x_turnovers\n"
    + "steals_x_turnovers\n"
    + "ortg\n"
    + "drtg\n"
    + "nrtg\n"
    + "}\n"
+ "}";

const TEAM_ADVSTATS_HISTORY = "{\n"
    + "team_advstats_history(id_club: ###id_club###){\n"
    + "id_team_club\n"
    + "season_name\n"
    + "games\n"
    + "etc\n"
    + "p_reb_def\n"
    + "p_reb_of\n"
    + "p_turnovers\n"
    + "ratio_ft\n"
    + "puntos_x_possession\n"
    + "possessions\n"
    + "pbg\n"
    + "possessions_x_minute\n"
    + "assists_x_turnovers\n"
    + "steals_x_turnovers\n"
    + "ts\n"
    + "rival_p_etc\n"
    + "rival_p_turnovers\n"
    + "rival_ratio_ft\n"
    + "ortg\n"
    + "drtg\n"
    + "nrtg\n"    
    + "}\n"
+ "}";

const TEAM_COMPETITION_STATS = "{\n"
    + "team_comp_stats(id_team_club: ###id_team_club###, id_competition: ###id_competition###){\n"
    + "id_team_club\n"
    + "games\n"
    + "t2p_conv\n"
    + "t2p_int\n"
    + "t2p_percentage\n"
    + "t2p_conv_pp\n"
    + "t2p_int_pp\n"
    + "t3p_conv\n"
    + "t3p_int\n"
    + "t3p_percentage\n"
    + "t3p_conv_pp\n"
    + "t3p_int_pp\n"
    + "tc_conv\n"
    + "tc_int\n"
    + "tc_percentage\n"
    + "tc_conv_pp\n"
    + "tc_int_pp\n"
    + "tl_conv\n"
    + "tl_int\n"
    + "tl_percentage\n"
    + "tl_conv_pp\n"
    + "tl_int_pp\n"
    + "total_puntos\n"
    + "total_puntos_pp\n"
    + "p_tl_puntos\n"
    + "p_t2p_puntos\n"
    + "p_t3p_puntos\n"    
    + "reb_def\n"
    + "reb_def_pp\n"
    + "reb_of\n"
    + "reb_of_pp\n"
    + "assists\n"
    + "assists_pp\n"
    + "steals\n"
    + "steals_pp\n"
    + "turnovers\n"
    + "turnovers_pp\n"
    + "block_shots\n"
    + "block_shots_pp\n"
    + "fouls_cm\n"
    + "fouls_cm_pp\n"
    + "fouls_rv\n"
    + "fouls_rv_pp\n"
    + "efficience\n"
    + "efficience_pp\n"
    + "}\n"
+ "}";

const TEAM_COMPETITION_ADVANCED_STATS = "{\n "
    + "team_adv_stats_by_comp(id_competition: ###id_competition###, id_team_club: ###id_team_club###){\n"
    + "id_team_club\n"
    + "id_competition\n"
    + "games\n"
    + "etc\n"
    + "p_reb_def\n"
    + "p_reb_of\n"
    + "p_turnovers\n"
    + "ratio_ft\n"
    + "possessions\n"
    + "possessions_x_minute\n"
    + "assists_x_turnovers\n"
    + "steals_x_turnovers\n"
    + "ts\n"
    + "rival_p_etc\n"
    + "rival_p_turnovers\n"
    + "rival_ratio_ft\n"
    + "ortg\n"
    + "drtg\n"
    + "nrtg\n"
    + "}\n"
+ "}";

const TEAM_GAME_ADVANCED_STATS = "{\n "
    + "tg_adv_stats(id_team_club:###id_team_club###, id_competition: ###id_competition###){\n"
    + "id_game\n"
    + "id_team_club\n"
    + "id_competition\n"
    + "etc\n"
    + "p_reb_def\n"
    + "p_reb_of\n"
    + "p_turnovers\n"
    + "ratio_ft\n"
    + "possessions\n"
    + "possessions_x_minute\n"
    + "assists_x_turnovers\n"
    + "steals_x_turnovers\n"
    + "ts\n"
    + "rival_p_etc\n"
    + "rival_p_turnovers\n"
    + "rival_ratio_ft\n"
    + "ortg\n"
    + "drtg\n"
    + "nrtg\n"
    + "date_insert\n"
    + "}\n"
+ "}";

const TEAM_GAME_LOG = "{\n" +
    "team_game_log(id_club: ###id_club###, id_season: ###id_season###){\n" +
    "id_game\n" + 
    "date_game\n" +
    "home_team_url\n" + 
    "home_abrev\n" +
    "away_team_url\n" +
    "away_abrev\n" + 
    "mp\n" + 
    "points\n" +
    "fgm\n" + 
    "fga\n" +
    "fgp\n" +
    "t2p_conv\n" +
    "t2p_int\n" + 
    "t2pp\n" +
    "t3p_conv\n" +
    "t3p_int\n" + 
    "t3pp\n" +
    "tl_conv\n" +
    "tl_int\n" + 
    "ftp\n" + 
    "reb_def\n" +
    "reb_of\n" +
    "tot_reb\n" + 
    "assists\n" + 
    "turnovers\n" + 
    "steals\n" + 
    "block_shots\n" + 
    "fouls_cm\n" + 
    "efficience\n" +
    "}\n" +
"}";

const TEAMS_GROUP = "{\n" +
    "teams_groups(id_season: ###id_season###){\n" +
    "id\n" +
    "id_group\n" +
    "id_league\n" +
    "id_season\n" +
    "id_club\n" +
    "id_team_feb\n" +
    "name\n" +
    "abrev\n" +
    "url_name\n" +
    "logo\n" +
    "r_name\n" +
    "}\n" +
"}";

const TEAMS_BY_GROUP = "{\n" +
    "teams_by_group(id_group: ###id_group###){\n" +
    "id\n" +
    "id_group\n" +
    "id_league\n" +
    "id_season\n" +
    "id_club\n" +
    "id_team_feb\n" +
    "name\n" +
    "abrev\n" +
    "url_name\n" +
    "logo\n" +
    "r_name\n" +
    "}\n" +
"}";

const TEAM_OPP_ADVSTATS_BY_SEASON = "{\n"
    + "team_opp_advstats_by_season(id_club: ###id_club###, id_season:###id_season###){\n"
    + "id_club\n"
    + "games\n"
    + "etc\n"
    + "p_reb_def\n"
    + "p_reb_of\n"
    + "p_turnovers\n"
    + "ratio_ft\n"
    + "puntos_x_possession\n"
    + "possessions\n"
    + "pbg\n"
    + "possessions_x_minute\n"
    + "assists_x_turnovers\n"
    + "steals_x_turnovers\n"
    + "ts\n"
    + "rival_p_etc\n"
    + "rival_p_turnovers\n"
    + "rival_ratio_ft\n"
    + "ortg\n"
    + "drtg\n"
    + "nrtg\n"    
    + "}\n"
+ "}";

const TEAM_OPP_STDSTATS_BY_SEASON = "{\n"  
    + "team_opp_stdstats_by_season(id_club: ###id_club###, id_season: ###id_season###){\n"
    + "id_club\n"
    + "games\n"
    + "minutes\n"
    + "t2p_conv\n"
    + "t2p_conv_pp\n"
    + "t2p_int\n"
    + "t2p_int_pp\n"
    + "t2p_percentage\n"
    + "t3p_conv\n"
    + "t3p_conv_pp\n"
    + "t3p_int\n"
    + "t3p_int_pp\n"
    + "t3p_percentage\n"
    + "tc_conv\n"
    + "tc_conv_pp\n"
    + "tc_int\n"
    + "tc_int_pp\n"
    + "tc_percentage\n"
    + "tl_conv\n"
    + "tl_conv_pp\n"
    + "tl_int\n"
    + "tl_int_pp\n"
    + "tl_percentage\n"
    + "total_puntos\n"
    + "total_puntos_pp\n"
    + "p_tl_puntos\n"
    + "p_t2p_puntos\n"
    + "p_t3p_puntos\n"
    + "ppa\n"
    + "reb_def\n"
    + "reb_def_pp\n"
    + "reb_of\n"
    + "reb_of_pp\n"
    + "total_rebs\n"
    + "total_rebs_pp\n"
    + "assists\n"
    + "assists_pp\n"
    + "steals\n"
    + "steals_pp\n"
    + "turnovers\n"
    + "turnovers_pp\n"
    + "block_shots\n"
    + "block_shots_pp\n"
    + "fouls_cm\n"
    + "fouls_cm_pp\n"
    + "fouls_rv\n"
    + "fouls_rv_pp\n"
    + "efficience\n"
    + "efficience_pp\n"    
    + "}\n"
+ "}"

const TEAM_SEASON_MARGINS = "{\n"
    + "team_margins(id_club: ###id_club###, id_season:###id_season###){\n"
    + "id_club\n"
    + "id_team_club\n"
    + "points\n"
    + "opp_points\n"
    + "margin\n"
    + "games\n"
    + "opp_points_pg\n"
    + "margin_pg\n"
    + "}\n"
+ "}";

const TEAM_PREVIA_STD_STATS = "{\n"
    + "team_season_std_stats(id_team_club: ###id_team_club###){\n"
    + "id_team_club\n"
    + "games\n"
    + "t2p_conv\n"
    + "t2p_int\n"
    + "t2p_percentage\n"
    + "t2p_conv_pp\n"
    + "t2p_int_pp\n"
    + "t3p_conv\n"
    + "t3p_int\n"
    + "t3p_percentage\n"
    + "t3p_conv_pp\n"
    + "t3p_int_pp\n"
    + "tc_conv\n"
    + "tc_int\n"
    + "tc_percentage\n"
    + "tc_conv_pp\n"
    + "tc_int_pp\n"
    + "tl_conv\n"
    + "tl_int\n"
    + "tl_percentage\n"
    + "tl_conv_pp\n"
    + "tl_int_pp\n"
    + "total_puntos\n"
    + "total_puntos_pp\n"
    + "p_tl_puntos\n"
    + "p_t2p_puntos\n"
    + "p_t3p_puntos\n"    
    + "reb_def\n"
    + "reb_def_pp\n"
    + "reb_of\n"
    + "reb_of_pp\n"
    + "assists\n"
    + "assists_pp\n"
    + "steals\n"
    + "steals_pp\n"
    + "turnovers\n"
    + "turnovers_pp\n"
    + "block_shots\n"
    + "block_shots_pp\n"
    + "fouls_cm\n"
    + "fouls_cm_pp\n"
    + "fouls_rv\n"
    + "fouls_rv_pp\n"
    + "efficience\n"
    + "efficience_pp\n"
    + "}\n"
+ "}";

const TEAM_SEASON_WINS = "{\n"
    + "team_wins(id_club: ###id_club###, id_season:###id_season###){\n"
    + "id_club\n"
    + "id_team_club\n"
    + "wins\n"
    + "defeats\n"
    + "p_wins\n"
    + "}\n"
+ "}";

const TEAM_STDSTATS_HISTORY = "{\n"
    + "team_stdstats_history(id_club: ###id_club###){\n"
    + "id_club\n"
    + "id_team_club\n"
    + "season_name\n"
    + "games\n"
    + "minutes\n"
    + "t2p_conv\n"
    + "t2p_conv_pp\n"
    + "t2p_int\n"
    + "t2p_int_pp\n"
    + "t2p_percentage\n"
    + "t3p_conv\n"
    + "t3p_conv_pp\n"
    + "t3p_int\n"
    + "t3p_int_pp\n"
    + "t3p_percentage\n"
    + "tc_conv\n"
    + "tc_conv_pp\n"
    + "tc_int\n"
    + "tc_int_pp\n"
    + "tc_percentage\n"
    + "tl_conv\n"
    + "tl_conv_pp\n"
    + "tl_int\n"
    + "tl_int_pp\n"
    + "tl_percentage\n"
    + "total_puntos\n"
    + "total_puntos_pp\n"
    + "pointsbyposs\n"
    + "p_tl_puntos\n"
    + "p_t2p_puntos\n"
    + "p_t3p_puntos\n"
    + "ppa\n"
    + "reb_def\n"
    + "reb_def_pp\n"
    + "reb_of\n"
    + "reb_of_pp\n"
    + "total_rebs\n"
    + "total_rebs_pp\n"
    + "assists\n"
    + "assists_pp\n"
    + "astov\n"
    + "steals\n"
    + "steals_pp\n"
    + "turnovers\n"
    + "turnovers_pp\n"
    + "block_shots\n"
    + "block_shots_pp\n"
    + "fouls_cm\n"
    + "fouls_cm_pp\n"
    + "fouls_rv\n"
    + "fouls_rv_pp\n"
    + "efficience\n"
    + "efficience_pp\n"    
    + "}\n"    
+ "}";

const TEAMS_ADVANCED_STATS_BY_COMPETITION = "{\n "
    + "tas_by_comp(id_competition: ###id_competition###){\n"
    + "id_team_club\n"
    + "id_competition\n"
    + "games\n"
    + "etc\n"
    + "p_reb_def\n"
    + "p_reb_of\n"
    + "p_turnovers\n"
    + "ratio_ft\n"
    + "possessions\n"
    + "possessions_x_minute\n"
    + "assists_x_turnovers\n"
    + "steals_x_turnovers\n"
    + "ts\n"
    + "rival_p_etc\n"
    + "rival_p_turnovers\n"
    + "rival_ratio_ft\n"
    + "ortg\n"
    + "drtg\n"
    + "nrtg\n"
    + "}\n"
+ "}";

const TEAM_SEASON_ADV_STATS = "{\n"
    + "team_advstats_by_season(id_club:###id_club###, id_season:###id_season###){\n"
    + "id_club\n"
    + "id_team_club\n"
    + "etc\n"
    + "p_reb_def\n"
    + "p_reb_of\n"
    + "p_turnovers\n"
    + "ratio_ft\n"
    + "puntos_x_possession\n"
    + "possessions\n"
    + "pbg\n"
    + "possessions_x_minute\n"
    + "assists_x_turnovers\n"
    + "steals_x_turnovers\n"
    + "ts\n"
    + "rival_p_etc\n"
    + "rival_p_turnovers\n"
    + "rival_ratio_ft\n"
    + "ortg\n"
    + "drtg\n"
    + "nrtg\n"
    + "}\n"
+ "}";

const TEAM_SEASON_STD_STATS = "{\n "
    + "team_stdstats_by_season(id_club:###id_club###, id_season: ###id_season###){\n"
    + "id_club\n"
    + "id_team_club\n"
    + "games\n"
    + "minutes\n"
    + "t2p_conv\n"
    + "t2p_conv_pp\n"
    + "t2p_int\n"
    + "t2p_int_pp\n"
    + "t2p_percentage\n"
    + "t3p_conv\n"
    + "t3p_conv_pp\n"
    + "t3p_int\n"
    + "t3p_int_pp\n"
    + "t3p_percentage\n"
    + "tc_conv\n"
    + "tc_conv_pp\n"
    + "tc_int\n"
    + "tc_int_pp\n"
    + "tc_percentage\n"
    + "tl_conv\n"
    + "tl_conv_pp\n"
    + "tl_int\n"
    + "tl_int_pp\n"
    + "tl_percentage\n"
    + "total_puntos\n"
    + "total_puntos_pp\n"
    + "p_tl_puntos\n"
    + "p_t2p_puntos\n"
    + "p_t3p_puntos\n"
    + "ppa\n"
    + "reb_def\n"
    + "reb_def_pp\n"
    + "reb_of\n"
    + "reb_of_pp\n"
    + "total_rebs\n"
    + "total_rebs_pp\n"
    + "assists\n"
    + "assists_pp\n"
    + "steals\n"
    + "steals_pp\n"
    + "turnovers\n"
    + "turnovers_pp\n"
    + "block_shots\n"
    + "block_shots_pp\n"
    + "fouls_cm\n"
    + "fouls_cm_pp\n"
    + "fouls_rv\n"
    + "fouls_rv_pp\n"
    + "efficience\n"
    + "efficience_pp\n"
    + "}\n"
+ "}";

const TEAMS_BY_SEASON = "{\n"
    + "teams_by_season(id_season: ###id_season###){\n"
    + "id\n"
    + "name\n"
    + "}\n"
+ "}";

const TEAMS_SEASON_ADV_STATS = "{\n"
    + "teams_advstats_by_season(id_season:###id_season###){\n"
    + "id_club\n"
    + "id_team_club\n"
    + "name\n"
    + "etc\n"
    + "p_reb_def\n"
    + "p_reb_of\n"
    + "p_turnovers\n"
    + "ratio_ft\n"
    + "puntos_x_possession\n"
    + "possessions\n"
    + "pbg\n"
    + "possessions_x_minute\n"
    + "assists_x_turnovers\n"
    + "steals_x_turnovers\n"
    + "ts\n"
    + "rival_p_etc\n"
    + "rival_p_turnovers\n"
    + "rival_ratio_ft\n"
    + "ortg\n"
    + "drtg\n"
    + "nrtg\n"
    + "}\n"
+ "}";

const TEAMS_SEASON_MARGINS = "{\n"
    + "teams_margins(id_season:###id_season###){\n"
    + "id_club\n"
    + "id_team_club\n"
    + "points\n"
    + "opp_points\n"
    + "margin\n"
    + "games\n"
    + "opp_points_pg\n"
    + "margin_pg\n"
    + "}\n"
+ "}";

const TEAMS_SEASON_STD_STATS = "{\n "
    + "teams_stdstats_by_season(id_season: ###id_season###){\n"
    + "id_club\n"
    + "id_team_club\n"
    + "name\n"
    + "games\n"
    + "minutes\n"
    + "t2p_conv\n"
    + "t2p_conv_pp\n"
    + "t2p_int\n"
    + "t2p_int_pp\n"
    + "t2p_percentage\n"
    + "t3p_conv\n"
    + "t3p_conv_pp\n"
    + "t3p_int\n"
    + "t3p_int_pp\n"
    + "t3p_percentage\n"
    + "tc_conv\n"
    + "tc_conv_pp\n"
    + "tc_int\n"
    + "tc_int_pp\n"
    + "tc_percentage\n"
    + "tl_conv\n"
    + "tl_conv_pp\n"
    + "tl_int\n"
    + "tl_int_pp\n"
    + "tl_percentage\n"
    + "total_puntos\n"
    + "total_puntos_pp\n"
    + "p_tl_puntos\n"
    + "p_t2p_puntos\n"
    + "p_t3p_puntos\n"
    + "ppa\n"
    + "pointsbyposs\n"
    + "reb_def\n"
    + "reb_def_pp\n"
    + "reb_of\n"
    + "reb_of_pp\n"
    + "total_rebs\n"
    + "total_rebs_pp\n"
    + "assists\n"
    + "assists_pp\n"
    + "steals\n"
    + "steals_pp\n"
    + "turnovers\n"
    + "turnovers_pp\n"
    + "astov\n"
    + "block_shots\n"
    + "block_shots_pp\n"
    + "fouls_cm\n"
    + "fouls_cm_pp\n"
    + "fouls_rv\n"
    + "fouls_rv_pp\n"
    + "efficience\n"
    + "efficience_pp\n"
    + "}\n"
+ "}";

const TEAMS_SEASON_WINS = "{\n"
    + "teams_wins(id_season:###id_season###){\n"
    + "id_club\n"
    + "id_team_club\n"
    + "wins\n"
    + "defeats\n"
    + "p_wins\n"
    + "}\n"
+ "}";

const TEAMS_PTOTREBTS_SEASON = "{\n"  
    + "teams_p_total_reb_by_season(id_season: ###id_season###){\n"
    + "id_team_club\n"
    + "name\n"
    + "minutes\n"
    + "total_rebs\n"
    + "opp_total_rebs\n"
    + "p_total_rebs\n"
    + "ts\n"
    + "}\n"
+ "}";

const RESULT_GAMEDAY_LF1 = "{\n"
    + "last_game_day(id_league: ###id_league###){\n"
    + "id_season\n"
    + "season\n"
    + "id_competition\n"
    + "competition\n"
    + "id_jornada\n"
    + "num_jornada\n"
    + "date\n"
    + "}\n"
+ "}";

const RESULT_COMPETITIONS = "{\n"
    + "list_competitions(id_league: ###id_league###, id_season: ###id_season###){\n"
    + "id\n"
    + "id_competition_feb\n"
    + "id_league\n"
    + "id_season\n"
    + "name\n"
    + "}\n"
+ "}";

const RESULT_LIST_GAMEDAY = "{\n"
    + "list_game_days(id_competition: ###id_competition###){\n"
    + "id_jornada\n"
    + "id_competition\n"
    + "num_jornada\n"
    + "}\n"
+ "}";

const RESULT_GAMES_LF1 = "{\n"
    + "lf1_games(id_jornada: ###id_jornada###){\n"
    + "id\n"
    + "date_game\n"
    + "home_team\n"
    + "abrev_home\n"
    + "home_url_name\n"
    + "home_score\n"
    + "away_score\n"
    + "away_team\n"
    + "abrev_away\n"
    + "away_url_name\n"
    + "}\n"
  + "}";

const SEASONS = "{\n"
    + "seasons(id_league: ###id_league###){\n"
    + "id\n"
    + "id_season_feb\n"
    + "description\n"
    + "}\n"
+ "}";

const SEASONS_BY_CLUB = "{\n"
    + "seasons_by_club(id_club: ###id_club###){\n"
    + "id\n"
    + "id_league\n"
    + "id_season_feb\n"
    + "description\n"
    + "}\n"
+ "}";

const SEASON_DATA = "{\n"  
    + "season_data(id: ###id###){\n"
    + "name\n"
    + "id\n"
    + "id_league\n"
    + "id_season_feb\n"
    + "description\n"
    + "}\n"
+ "}";

const TEAM_BY_CLUB_SEASON = "{\n "
    + "team_by_club_season(id_season: ###id_season###, id_club: ###id_club###){\n "
    + "     id\n"
    + "     id_league\n"
    + "     id_season\n"
    + "     id_club\n"
    + "     id_team_feb\n"
    + "     name\n"
    + "     abrev\n"
    + "}\n"
+ "}";

module.exports.BOXSCORE = BOXSCORE;
module.exports.COMPETITIONS = COMPETITIONS;
module.exports.COMPETITIONS_BY_TEAM = COMPETITIONS_BY_TEAM;
module.exports.CLUB_SEASON = CLUB_SEASON;
module.exports.GAME_ADV_STATS = GAME_ADV_STATS;
module.exports.GAME_DATA = GAME_DATA;
module.exports.GAME_LOG = GAME_LOG;
module.exports.GAME_STATS_BY_TEAM = GAME_STATS_BY_TEAM;
module.exports.GROUPS = GROUPS;
module.exports.HOMELF1_NEXT_GAMES = HOMELF1_NEXT_GAMES;
module.exports.HOMELF2_NEXT_GAMES = HOMELF2_NEXT_GAMES;
module.exports.LEAGUE_STATS = LEAGUE_STATS;
module.exports.PLAYER_ADVANCED_STATS = PLAYER_ADVANCED_STATS;
module.exports.PLAYER_ADVSTATS_HISTORY = PLAYER_ADVSTATS_HISTORY;
module.exports.PLAYER_SEASON = PLAYER_SEASON;
module.exports.PLAYER_STDSTATS_HISTORY = PLAYER_STDSTATS_HISTORY;
module.exports.PLAYER_STD_STATS = PLAYER_STD_STATS;
module.exports.PLAYERS_ADVSTATS_BY_TEAM = PLAYERS_ADVSTATS_BY_TEAM;
module.exports.PLAYERS_CLUBS = PLAYERS_CLUBS;
module.exports.PLAYERS_STD_STATS = PLAYERS_STD_STATS;
module.exports.PLAYERS_STD_STATS_2 = PLAYERS_STD_STATS_2;
module.exports.PLAYERS_STDSTATS_BY_TEAM = PLAYERS_STDSTATS_BY_TEAM;
module.exports.PLAYER_SEASON_ADV_STATS = PLAYER_SEASON_ADV_STATS;
module.exports.PLAYERS_SEASON_ADV_STATS = PLAYERS_SEASON_ADV_STATS;
module.exports.PLAYERS_SEASON_ADV_STATS_2 = PLAYERS_SEASON_ADV_STATS_2;
module.exports.PREVIA_NEXT_GAME_LF1 = PREVIA_NEXT_GAME_LF1;
module.exports.PREVIA_NEXT_GAME_LF2 = PREVIA_NEXT_GAME_LF2;
module.exports.TEAM_PREVIA_ADV_STATS = TEAM_PREVIA_ADV_STATS;
module.exports.PREVIA_TCSS = PREVIA_TCSS;
module.exports.PREVIA_TEAM = PREVIA_TEAM;
module.exports.PREVIA_PLAYER = PREVIA_PLAYER;
module.exports.QUARTERS = QUARTERS;
module.exports.QUERY_PLAYERS = QUERY_PLAYERS;
module.exports.RATIOS_N_POSSESSIONS = RATIOS_N_POSSESSIONS;
module.exports.RESULT_GAMEDAY_LF1 = RESULT_GAMEDAY_LF1;
module.exports.RESULT_COMPETITIONS = RESULT_COMPETITIONS;
module.exports.RESULT_LIST_GAMEDAY = RESULT_LIST_GAMEDAY;
module.exports.RESULT_GAMES_LF1 = RESULT_GAMES_LF1;
module.exports.SEASON_DATA = SEASON_DATA;
module.exports.SEASONS = SEASONS;
module.exports.SEASONS_BY_CLUB = SEASONS_BY_CLUB;
module.exports.TEAM_BY_CLUB_SEASON = TEAM_BY_CLUB_SEASON;
module.exports.TEAM_ADVSTATS_HISTORY = TEAM_ADVSTATS_HISTORY;
module.exports.TEAM_COMPETITION_ADVANCED_STATS = TEAM_COMPETITION_ADVANCED_STATS;
module.exports.TEAM_COMPETITION_STATS = TEAM_COMPETITION_STATS;
module.exports.TEAM_GAME_ADVANCED_STATS = TEAM_GAME_ADVANCED_STATS;
module.exports.TEAM_GAME_LOG = TEAM_GAME_LOG;
module.exports.TEAM_OPP_ADVSTATS_BY_SEASON = TEAM_OPP_ADVSTATS_BY_SEASON;
module.exports.TEAM_OPP_STDSTATS_BY_SEASON = TEAM_OPP_STDSTATS_BY_SEASON;
module.exports.TEAM_PREVIA_STD_STATS = TEAM_PREVIA_STD_STATS;
module.exports.TEAM_SEASON_MARGINS = TEAM_SEASON_MARGINS;
module.exports.TEAM_SEASON_ADV_STATS = TEAM_SEASON_ADV_STATS;
module.exports.TEAM_SEASON_STD_STATS = TEAM_SEASON_STD_STATS;
module.exports.TEAM_SEASON_WINS = TEAM_SEASON_WINS;
module.exports.TEAM_STDSTATS_HISTORY = TEAM_STDSTATS_HISTORY;
module.exports.TEAMS_ACTUAL_SEASON = TEAMS_ACTUAL_SEASON;
module.exports.TEAMS_ADVANCED_STATS_BY_COMPETITION = TEAMS_ADVANCED_STATS_BY_COMPETITION;
module.exports.TEAMS_BY_SEASON = TEAMS_BY_SEASON;
module.exports.TEAMS_GROUP = TEAMS_GROUP;
module.exports.TEAMS_BY_GROUP = TEAMS_BY_GROUP;
module.exports.TEAMS_SEASON_MARGINS = TEAMS_SEASON_MARGINS;
module.exports.TEAMS_SEASON_STD_STATS = TEAMS_SEASON_STD_STATS;
module.exports.TEAMS_SEASON_ADV_STATS = TEAMS_SEASON_ADV_STATS;
module.exports.TEAMS_SEASON_WINS = TEAMS_SEASON_WINS;
module.exports.TEAMS_PTOTREBTS_SEASON = TEAMS_PTOTREBTS_SEASON;