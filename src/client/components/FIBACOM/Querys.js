const BOXSCORE_FIBA = "{\n" +
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

const CLUB_SEASON_FIBA = "{\n" +
    "club_season(id_club: ###id_club###){\n" +
    "id\n" +
    "description\n" +
    "name\n" +
    "leagueName\n" +
    "}\n" +  
"}";

const COMPETITIONS_BY_TEAM_FIBA = "{\n" +
    "competitions_by_team(id_team: ###id_team###){\n" +
    "id\n" +
    "id_league\n" +
    "id_season\n" +
    "name\n" +
    "}\n" +
"}";

const EUROCUP_NEXT_GAMES = "{\n " +
    "eurocup_nextgameday{\n " +
    "     id\n" +
    "     id_competition\n" +
    "     competition\n" +
    "     id_home_team\n" +
    "     home_team\n" +
    "     home_url_name\n" +
    "     id_away_team\n" +
    "     away_team\n" +
    "     away_url_name\n" +
    "     date\n" +
    "     played\n" +
    "     jornada\n" +
    "}\n" +
"}";

const EUROLEAGUE_NEXT_GAMES = "{\n " +
    "euroleague_nextgameday{\n " +
    "     id\n" +
    "     id_competition\n" +
    "     competition\n" +
    "     id_home_team\n" +
    "     home_team\n" +
    "     home_url_name\n" +
    "     id_away_team\n" +
    "     away_team\n" +
    "     away_url_name\n" +
    "     date\n" +
    "     played\n" +
    "     jornada\n" +
    "}\n" +
"}";

const GAME_ADV_STATS_FIBA = "{\n" +
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

const GAME_DATA_FIBA = "{\n" +
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

const GAME_LOG_FIBA = "{\n" +
    "game_log(id_player: ###id_player###, id_comps: ###id_comps###){\n" +
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

const GAME_STATS_BY_TEAM_FIBA = "{\n" +
    "game_stats_by_team(id_team_club: ###id_team_club###, id_competition: ###id_competition###){\n" +
    "id\n" +
    "date_game\n" +
    "id_team_home\n" +
    "home_team\n" +
    "home_url_name\n" +
    "home_abrev_name\n" +
    "home_score\n" +
    "id_team_away\n" +
    "away_team\n" +
    "away_url_name\n" +
    "away_abrev_name\n" +
    "away_score\n" +
    "id_team_club\n" +
    "id_competition\n" +
    "minutes\n" +
    "t2p_conv\n" +
    "t2p_int\n" +
    "t2p_percentage\n" +
    "t3p_conv\n" +
    "t3p_int\n" +
    "t3p_percentage\n" +
    "tc_conv\n" +
    "tc_int\n" +
    "tc_percentage\n" +
    "tl_conv\n" +
    "tl_int\n" +
    "tl_percentage\n" +
    "reb_def\n" +
    "reb_of\n" +
    "assists\n" +
    "steals\n" +
    "turnovers\n" +
    "block_shots\n" +
    "fouls_cm\n" +
    "fouls_rv\n" +
    "efficience\n" +
    "}\n" +
"}";

const GROUPS_FIBA = "{\n" +
    "groups(id_season: ###id_season###, id_league: ###id_league###){\n" +
    "id\n" +
    "group_name\n" +
    "id_league\n" +
    "id_season\n" + 
    "date_insert\n" +
    "}\n" +
"}";

const LEAGUE_STATS_FIBA = "{\n" +
    "league_stats(id_season: ###id_season###){\n" +
    "t2p_percentage\n" +
    "t3p_percentage\n" +
    "tl_percentage\n" +
    "pbg\n" +
    "tpbg\n" +
    "pbp\n" +
    "mbp\n" +
    "etc\n" +
    "ts\n" +
    "p_reb_def\n" +
    "p_reb_of\n" +
    "p_tot_reb\n" +
    "p_assists\n" +
    "assists_ratio\n" +
    "p_steals\n" +
    "}\n" +
"}";

const PLAYER_ADVANCED_STATS_FIBA = "{\n" +
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

const PLAYER_ADVSTATS_HISTORY_FIBA = "{\n" +
    "player_advstats_history(id_player: ###id_player###){\n" +
    "id_player_team\n" +
    "season_name\n" +
    "games\n" +
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
    "}\n" +
"}";

const PLAYER_COMPETITIONS_FIBA = "{\n" +
    "player_competitions(id_player: ###id_player###){\n" +
    "id\n" +
    "id_league\n" +
    "id_season\n" +
    "id_group\n" +
    "name\n" +
    "description\n" +
    "}\n" +
"}";

const PLAYER_SEASON_ADV_STATS_FIBA = "{\n" +
    "player_adv_stats(id_player: ###id_player###, id_comps: ###id_comps###){\n" +
    "id_player\n" +
    "games\n" +
    "dre\n" +
    "game_score\n" +
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
    "}\n" +
"}";

const PLAYER_STD_STATS_FIBA = "{\n" +
    "player_std_stats(id_player: ###id_player###, id_comps: ###id_comps###){\n" +
    "id_player\n" +
    "games\n" +
    "minutes\n" +
    "mpp\n" +
    "t2p_conv\n" +
    "t2p_conv_pp\n" +
    "t2p_int\n" +
    "t2p_int_pp\n" +
    "t2p_percentage\n" +
    "t3p_conv\n" +
    "t3p_conv_pp\n" +
    "t3p_int\n" +
    "t3p_int_pp\n" +
    "t3p_percentage\n" +
    "tc_conv\n" +
    "tc_conv_pp\n" +
    "tc_int\n" +
    "tc_int_pp\n" +
    "tc_percentage\n" +
    "tl_conv\n" +
    "tl_int\n" +
    "tl_percentage\n" +
    "tl_conv_pp\n" +
    "tl_int_pp\n" +
    "total_puntos\n" +
    "total_puntos_pp\n" +
    "p_t2p_puntos\n" +
    "p_t3p_puntos\n" +
    "p_tl_puntos\n" +
    "ppa\n" +
    "pointsbyposs\n" +
    "rd\n" +
    "reb_def_pp\n" +
    "ro\n" +
    "reb_of_pp\n" +
    "tot_reb\n" +
    "total_rebs_pp\n" +
    "assists\n" +
    "assists_pp\n" +
    "steals\n" +
    "steals_pp\n" +
    "tov\n" +
    "turnovers_pp\n" +
    "astov\n" +
    "block_shots\n" +
    "block_shots_pp\n" +
    "fouls_cm\n" +
    "fouls_cm_pp\n" +
    "fouls_rv\n" +
    "fouls_rv_pp\n" +
    "efficience\n" +
    "efficience_pp\n" +
    "}\n" +
"}";

const PLAYERS_ADVSTATS_BY_TEAM_FIBA = "{\n" +
    "players_advstats_by_team(id_team_club: ###id_team_club###){\n" +
    "id_player_team\n" +
    "name_player\n" +
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
    "}\n" +
"}";

const PLAYERS_CLUBS_FIBA = "{\n" +
    "players_clubs{\n" +
    "type\n" +
    "id\n" +
    "name\n" +
    "}\n" +
"}";

const PLAYERS_SEASON_ADV_STATS_FIBA = "{\n" +
    "players_adv_stats(id_season: ###id_season###){\n" +
    "id_player\n" +
    "name_player\n" +
    "games\n" +
    "dre\n" +
    "game_score\n" +
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
    "}\n" +
"}";

const PLAYERS_SEASON_ADV_STATS_FIBA_3 = "{\n" +
    "players_adv_stats(id_season: ###id_season###, groups: ###groups###){\n" +
    "id_player\n" +
    "name_player\n" +
    "games\n" +
    "dre\n" +
    "game_score\n" +
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
    "}\n" +
"}";

const PLAYERS_SEASON_ADV_STATS_FIBA_2 = "{\n" +
    "players_adv_stats_2(id_season: ###id_season###){\n" +
    "id_player\n" +
    "games\n" +
    "dre\n" +
    "game_score\n" +
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
    "}\n" +
"}";

const PLAYERS_STDSTATS_BY_TEAM_FIBA = "{\n" +
    "players_stdstats_by_team(id_team_club: ###id_team_club###){\n" +
    "id_player_team\n" +
    "name_player\n" +
    "games\n" +
    "minutes\n" +
    "mpp\n" +
    "t2p_conv\n" +
    "t2p_conv_pp\n" +
    "t2p_int\n" +
    "t2p_int_pp\n" +
    "t2p_percentage\n" +
    "t3p_conv\n" +
    "t3p_conv_pp\n" +
    "t3p_int\n" +
    "t3p_int_pp\n" +
    "t3p_percentage\n" +
    "tc_conv\n" +
    "tc_conv_pp\n" +
    "tc_int\n" +
    "tc_int_pp\n" +
    "tc_percentage\n" +
    "tl_conv\n" +
    "tl_int\n" +
    "tl_percentage\n" +
    "tl_conv_pp\n" +
    "tl_int_pp\n" +
    "total_puntos\n" +
    "total_puntos_pp\n" +
    "p_t2p_puntos\n" +
    "p_t3p_puntos\n" +
    "p_tl_puntos\n" +
    "ppa\n" +
    "pointsbyposs\n" +
    "rd\n" +
    "reb_def_pp\n" +
    "ro\n" +
    "reb_of_pp\n" +
    "tot_reb\n" +
    "total_rebs_pp\n" +
    "assists\n" +
    "assists_pp\n" +
    "steals\n" +
    "steals_pp\n" +
    "tov\n" +
    "turnovers_pp\n" +
    "astov\n" +
    "block_shots\n" +
    "block_shots_pp\n" +
    "fouls_cm\n" +
    "fouls_cm_pp\n" +
    "fouls_rv\n" +
    "fouls_rv_pp\n" +
    "efficience\n" +
    "efficience_pp\n" +
    "}\n" +
"}";

const PLAYER_STDSTATS_HISTORY_FIBA = "{\n" +
    "player_stdstats_history(id_player: ###id_player###){\n" +
    "id_player_team\n" +
    "season_name\n" +
    "id_player\n" +
    "games\n" +
    "minutes\n" +
    "mpp\n" +
    "t2p_conv\n" +
    "t2p_conv_pp\n" +
    "t2p_int\n" +
    "t2p_int_pp\n" +
    "t2p_percentage\n" +
    "t3p_conv\n" +
    "t3p_conv_pp\n" +
    "t3p_int\n" +
    "t3p_int_pp\n" +
    "t3p_percentage\n" +
    "tc_conv\n" +
    "tc_conv_pp\n" +
    "tc_int\n" +
    "tc_int_pp\n" +
    "tc_percentage\n" +
    "tl_conv\n" +
    "tl_int\n" +
    "tl_percentage\n" +
    "tl_conv_pp\n" +
    "tl_int_pp\n" +
    "total_puntos\n" +
    "total_puntos_pp\n" +
    "p_t2p_puntos\n" +
    "p_t3p_puntos\n" +
    "p_tl_puntos\n" +
    "ppa\n" +
    "pointsbyposs\n" +
    "rd\n" +
    "reb_def_pp\n" +
    "ro\n" +
    "reb_of_pp\n" +
    "tot_reb\n" +
    "total_rebs_pp\n" +
    "assists\n" +
    "assists_pp\n" +
    "steals\n" +
    "steals_pp\n" +
    "tov\n" +
    "turnovers_pp\n" +
    "astov\n" +
    "block_shots\n" +
    "block_shots_pp\n" +
    "fouls_cm\n" +
    "fouls_cm_pp\n" +
    "fouls_rv\n" +
    "fouls_rv_pp\n" +
    "efficience\n" +
    "efficience_pp\n" +
    "}\n" +
"}";

const PLAYERS_STD_STATS_FIBA = "{\n" +
    "players_std_stats(id_season: ###id_season###){\n" +
    "id_player\n" +
    "id_player_team\n" +
    "name_player\n" +
    "games\n" +
    "minutes\n" +
    "mpp\n" +
    "t2p_conv\n" +
    "t2p_conv_pp\n" +
    "t2p_int\n" +
    "t2p_int_pp\n" +
    "t2p_percentage\n" +
    "t3p_conv\n" +
    "t3p_conv_pp\n" +
    "t3p_int\n" +
    "t3p_int_pp\n" +
    "t3p_percentage\n" +
    "tc_conv\n" +
    "tc_conv_pp\n" +
    "tc_int\n" +
    "tc_int_pp\n" +
    "tc_percentage\n" +
    "tl_conv\n" +
    "tl_int\n" +
    "tl_percentage\n" +
    "tl_conv_pp\n" +
    "tl_int_pp\n" +
    "total_puntos\n" +
    "total_puntos_pp\n" +
    "p_t2p_puntos\n" +
    "p_t3p_puntos\n" +
    "p_tl_puntos\n" +
    "ppa\n" +
    "pointsbyposs\n" +
    "rd\n" +
    "reb_def_pp\n" +
    "ro\n" +
    "reb_of_pp\n" +
    "tot_reb\n" +
    "total_rebs_pp\n" +
    "assists\n" +
    "assists_pp\n" +
    "steals\n" +
    "steals_pp\n" +
    "tov\n" +
    "turnovers_pp\n" +
    "astov\n" +
    "block_shots\n" +
    "block_shots_pp\n" +
    "fouls_cm\n" +
    "fouls_cm_pp\n" +
    "fouls_rv\n" +
    "fouls_rv_pp\n" +
    "efficience\n" +
    "efficience_pp\n" +
    "}\n" +
"}";

const PLAYERS_STD_STATS_FIBA_3 = "{\n" +
    "players_std_stats(id_season: ###id_season###, groups: ###groups###){\n" +
    "id_player\n" +
    "id_player_team\n" +
    "name_player\n" +
    "games\n" +
    "minutes\n" +
    "mpp\n" +
    "t2p_conv\n" +
    "t2p_conv_pp\n" +
    "t2p_int\n" +
    "t2p_int_pp\n" +
    "t2p_percentage\n" +
    "t3p_conv\n" +
    "t3p_conv_pp\n" +
    "t3p_int\n" +
    "t3p_int_pp\n" +
    "t3p_percentage\n" +
    "tc_conv\n" +
    "tc_conv_pp\n" +
    "tc_int\n" +
    "tc_int_pp\n" +
    "tc_percentage\n" +
    "tl_conv\n" +
    "tl_int\n" +
    "tl_percentage\n" +
    "tl_conv_pp\n" +
    "tl_int_pp\n" +
    "total_puntos\n" +
    "total_puntos_pp\n" +
    "p_t2p_puntos\n" +
    "p_t3p_puntos\n" +
    "p_tl_puntos\n" +
    "ppa\n" +
    "pointsbyposs\n" +
    "rd\n" +
    "reb_def_pp\n" +
    "ro\n" +
    "reb_of_pp\n" +
    "tot_reb\n" +
    "total_rebs_pp\n" +
    "assists\n" +
    "assists_pp\n" +
    "steals\n" +
    "steals_pp\n" +
    "tov\n" +
    "turnovers_pp\n" +
    "astov\n" +
    "block_shots\n" +
    "block_shots_pp\n" +
    "fouls_cm\n" +
    "fouls_cm_pp\n" +
    "fouls_rv\n" +
    "fouls_rv_pp\n" +
    "efficience\n" +
    "efficience_pp\n" +
    "}\n" +
"}";

const PLAYERS_STD_STATS_FIBA_2 = "{\n" +
    "players_std_stats_2(id_season: ###id_season###){\n" +
    "id_player\n" +
    "id_player_team\n" +
    "name_player\n" +
    "games\n" +
    "minutes\n" +
    "mpp\n" +
    "t2p_conv\n" +
    "t2p_conv_pp\n" +
    "t2p_int\n" +
    "t2p_int_pp\n" +
    "t2p_percentage\n" +
    "t3p_conv\n" +
    "t3p_conv_pp\n" +
    "t3p_int\n" +
    "t3p_int_pp\n" +
    "t3p_percentage\n" +
    "tc_conv\n" +
    "tc_conv_pp\n" +
    "tc_int\n" +
    "tc_int_pp\n" +
    "tc_percentage\n" +
    "tl_conv\n" +
    "tl_int\n" +
    "tl_percentage\n" +
    "tl_conv_pp\n" +
    "tl_int_pp\n" +
    "total_puntos\n" +
    "total_puntos_pp\n" +
    "p_t2p_puntos\n" +
    "p_t3p_puntos\n" +
    "p_tl_puntos\n" +
    "ppa\n" +
    "pointsbyposs\n" +
    "rd\n" +
    "reb_def_pp\n" +
    "ro\n" +
    "reb_of_pp\n" +
    "tot_reb\n" +
    "total_rebs_pp\n" +
    "assists\n" +
    "assists_pp\n" +
    "steals\n" +
    "steals_pp\n" +
    "tov\n" +
    "turnovers_pp\n" +
    "astov\n" +
    "block_shots\n" +
    "block_shots_pp\n" +
    "fouls_cm\n" +
    "fouls_cm_pp\n" +
    "fouls_rv\n" +
    "fouls_rv_pp\n" +
    "efficience\n" +
    "efficience_pp\n" +
    "}\n" +
"}";

const PREVIA_NEXT_GAME_EUROCUP = "{\n " +
    "eurocup_nextgameday(id: ###param1###){\n " +
    "     id\n" +
    "     id_competition\n" +
    "     id_home_team\n" +
    "     id_away_team\n" +
    "     jornada\n" +
    "}\n" +
"}";

const PREVIA_NEXT_GAME_EUROLEAGUE = "{\n " +
    "euroleague_nextgameday(id: ###param1###){\n " +
    "     id\n" +
    "     id_competition\n" +
    "     id_home_team\n" +
    "     id_away_team\n" +
    "     jornada\n" +
    "}\n" +
"}";

const PREVIA_PLAYER = "{\n " +
    "player_previa(id_team_club: ###id_team_club###){\n" +
    "id\n" +
    "name\n" +
    "abrev\n" +
    "id_team_club\n" +
    "game_score\n" +
    "games\n" +
    "ts\n" +
    "t2p\n" +
    "t3p\n" +
    "tlp\n" +
    "points\n" +
    "reb_def\n" +
    "reb_of\n" +
    "assists\n" +
    "steals\n" +
    "turnovers\n" +
    "}\n" +
"}";

const PREVIA_TCSS = "{\n " +
    "team_tcss(id_team_club: ###id_team_club###){\n" +
    "id_team_club\n" +
    "games\n"  +
    "victories\n" +
    "t2p_conv\n" +
    "t2p_int\n" +
    "t3p_conv\n" +
    "t3p_int\n" +
    "tl_conv\n" +
    "tl_int\n" +
    "reb_def\n" +
    "reb_of\n" +
    "assists\n" +
    "steals\n" +
    "turnovers\n" +
    "against_total_points_pp\n" +
    "}\n" +
"}";

const PREVIA_TEAM_EUR = "{\n " +
    "teamclub(id: ###param1###){\n " +
    "     id\n" +
    "     id_league\n" +
    "     id_season\n" +
    "     id_club\n" +
    "     name\n" +
    "     abrev\n" +
    "}\n" +
"}";

const QUARTERS_FIBA = "{\n" +
    "quarters_by_game(id_game: ###id_game###){\n" + 
    "id_game\n" + 
    "id_quarter\n" +
    "home_team\n" +
    "away_team\n" +
    "home_score\n" +
    "away_score\n" +
  "}\n" +
"}\n";

const RATIOS_N_POSSESSIONS_FIBA = "{\n " +
    "team_adv_stats_by_comp(id_competition: ###id_competition###, id_team_club: ###id_team_club###){\n" +
    "id_team_club\n" +
    "possessions_x_minute\n" +
    "p_reb_def\n" +
    "p_reb_of\n" +
    "assists_x_turnovers\n" +
    "steals_x_turnovers\n" +
    "ortg\n" +
    "drtg\n" +
    "nrtg\n" +
    "}\n" +
"}";

const RESULT_COMPETITIONS_FIBA = "{\n" +
    "list_competitions(id_league: ###id_league###, id_season: ###id_season###){\n" +
    "id\n" +
    "id_competition_feb\n" +
    "id_league\n" +
    "id_season\n" +
    "name\n" +
    "}\n" +
"}";

const RESULT_GAMEDAY_FIBA = "{\n" +
    "last_game_day(id_league: ###id_league###){\n" +
    "id_season\n" +
    "season\n" +
    "id_competition\n" +
    "competition\n" +
    "id_jornada\n" +
    "num_jornada\n" +
    "date\n" +
    "}\n" +
"}";

const RESULT_GAMES_FIBA = "{\n" +
    "fiba_games(id_jornada: ###id_jornada###){\n" +
    "id\n" + 
    "date_game\n" +
    "home_team\n" +
    "abrev_home\n" +
    "home_url_name\n" +
    "home_score\n" +
    "away_score\n" +
    "away_team\n" +
    "abrev_away\n" +
    "away_url_name\n" +
    "}\n" +
  "}";

const RESULT_LIST_GAMEDAY_FIBA = "{\n" +
    "list_game_days(id_competition: ###id_competition###){\n" +
    "id_jornada\n" +
    "id_competition\n" +
    "num_jornada\n" +
    "}\n" +
"}";

const SEASONS_BY_CLUB_FIBA = "{\n" +
    "seasons_by_club(id_club: ###id_club###){\n" +
    "id\n" +
    "id_league\n" +
    "description\n" +
    "}\n" +
"}";

const SEASON_DATA_FIBA = "{\n" +
    "season_data(id: ###id###){\n" +
    "name\n" +
    "id\n" +
    "id_league\n" +
    "description\n" +
    "}\n" +
"}";

const SEASONS_FIBA = "{\n" +
    "seasons(id_league: ###id_league###){\n" +
    "id\n" +
    "description\n" +
    "}\n" +
"}";

const TEAM_ADVSTATS_HISTORY_FIBA = "{\n" +
    "team_advstats_history(id_club: ###id_club###){\n" +
    "id_team_club\n" +
    "season_name\n" +
    "games\n" +
    "etc\n" +
    "p_reb_def\n" +
    "p_reb_of\n" +
    "p_turnovers\n" +
    "ratio_ft\n" +
    "puntos_x_possession\n" +
    "possessions\n" +
    "pbg\n" +
    "possessions_x_minute\n" +
    "assists_x_turnovers\n" +
    "steals_x_turnovers\n" +
    "ts\n" +
    "rival_p_etc\n" +
    "rival_p_turnovers\n" +
    "rival_ratio_ft\n" +
    "ortg\n" +
    "drtg\n" +
    "nrtg\n" +  
    "}\n" +
"}";


const TEAM_BY_CLUB_SEASON_FIBA = "{\n " +
    "team_by_club_season(id_season: ###id_season###, id_club: ###id_club###){\n " +
    "     id\n" +
    "     id_league\n" +
    "     id_season\n" +
    "     id_club\n" +
    "     name\n" +
    "     abrev\n" +
    "}\n" +
"}";

const TEAM_COMPETITION_ADVANCED_STATS_FIBA = "{\n " +
    "team_adv_stats_by_comp(id_competition: ###id_competition###, id_team_club: ###id_team_club###){\n" +
    "id_team_club\n" +
    "id_competition\n" +
    "games\n" +
    "etc\n" +
    "p_reb_def\n" +
    "p_reb_of\n" +
    "p_turnovers\n" +
    "ratio_ft\n" +
    "possessions\n" +
    "possessions_x_minute\n" +
    "assists_x_turnovers\n" +
    "steals_x_turnovers\n" +
    "ts\n" +
    "rival_p_etc\n" +
    "rival_p_turnovers\n" +
    "rival_ratio_ft\n" +
    "ortg\n" +
    "drtg\n" +
    "nrtg\n" +
    "}\n" +
"}";

const TEAM_COMPETITION_STATS_FIBA = "{\n" +
    "team_comp_stats(id_team_club: ###id_team_club###, id_competition: ###id_competition###){\n" +
    "id_team_club\n" +
    "games\n" +
    "t2p_conv\n" +
    "t2p_int\n" +
    "t2p_percentage\n" +
    "t2p_conv_pp\n" +
    "t2p_int_pp\n" +
    "t3p_conv\n" +
    "t3p_int\n" +
    "t3p_percentage\n" +
    "t3p_conv_pp\n" +
    "t3p_int_pp\n" +
    "tc_conv\n" +
    "tc_int\n" +
    "tc_percentage\n" +
    "tc_conv_pp\n" +
    "tc_int_pp\n" +
    "tl_conv\n" +
    "tl_int\n" +
    "tl_percentage\n" +
    "tl_conv_pp\n" +
    "tl_int_pp\n" +
    "total_puntos\n" +
    "total_puntos_pp\n" +
    "p_tl_puntos\n" +
    "p_t2p_puntos\n" +
    "p_t3p_puntos\n" +  
    "reb_def\n" +
    "reb_def_pp\n" +
    "reb_of\n" +
    "reb_of_pp\n" +
    "assists\n" +
    "assists_pp\n" +
    "steals\n" +
    "steals_pp\n" +
    "turnovers\n" +
    "turnovers_pp\n" +
    "block_shots\n" +
    "block_shots_pp\n" +
    "fouls_cm\n" +
    "fouls_cm_pp\n" +
    "fouls_rv\n" +
    "fouls_rv_pp\n" +
    "efficience\n" +
    "efficience_pp\n" +
    "}\n" +
"}";

const TEAM_GAME_ADVANCED_STATS_FIBA = "{\n " +
    "tg_adv_stats(id_team_club:###id_team_club###, id_competition: ###id_competition###){\n" +
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
    "ts\n" +
    "rival_p_etc\n" +
    "rival_p_turnovers\n" +
    "rival_ratio_ft\n" +
    "ortg\n" +
    "drtg\n" +
    "nrtg\n" +
    "date_insert\n" +
    "}\n" +
"}";

const TEAM_GAME_LOG_FIBA = "{\n" +
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

const TEAM_OPP_ADVSTATS_BY_SEASON_FIBA = "{\n" +
    "team_opp_advstats_by_season(id_club: ###id_club###, id_season:###id_season###){\n" +
    "id_club\n" +
    "games\n" +
    "etc\n" +
    "p_reb_def\n" +
    "p_reb_of\n" +
    "p_turnovers\n" +
    "ratio_ft\n" +
    "puntos_x_possession\n" +
    "possessions\n" +
    "pbg\n" +
    "possessions_x_minute\n" +
    "assists_x_turnovers\n" +
    "steals_x_turnovers\n" +
    "ts\n" +
    "rival_p_etc\n" +
    "rival_p_turnovers\n" +
    "rival_ratio_ft\n" +
    "ortg\n" +
    "drtg\n" +
    "nrtg\n" +  
    "}\n" +
"}";

const TEAM_OPP_STDSTATS_BY_SEASON_FIBA = "{\n" +
    "team_opp_stdstats_by_season(id_club: ###id_club###, id_season: ###id_season###){\n" +
    "id_club\n" +
    "games\n" +
    "minutes\n" +
    "t2p_conv\n" +
    "t2p_conv_pp\n" +
    "t2p_int\n" +
    "t2p_int_pp\n" +
    "t2p_percentage\n" +
    "t3p_conv\n" +
    "t3p_conv_pp\n" +
    "t3p_int\n" +
    "t3p_int_pp\n" +
    "t3p_percentage\n" +
    "tc_conv\n" +
    "tc_conv_pp\n" +
    "tc_int\n" +
    "tc_int_pp\n" +
    "tc_percentage\n" +
    "tl_conv\n" +
    "tl_conv_pp\n" +
    "tl_int\n" +
    "tl_int_pp\n" +
    "tl_percentage\n" +
    "total_puntos\n" +
    "total_puntos_pp\n" +
    "p_tl_puntos\n" +
    "p_t2p_puntos\n" +
    "p_t3p_puntos\n" +
    "ppa\n" +
    "reb_def\n" +
    "reb_def_pp\n" +
    "reb_of\n" +
    "reb_of_pp\n" +
    "total_rebs\n" +
    "total_rebs_pp\n" +
    "assists\n" +
    "assists_pp\n" +
    "steals\n" +
    "steals_pp\n" +
    "turnovers\n" +
    "turnovers_pp\n" +
    "block_shots\n" +
    "block_shots_pp\n" +
    "fouls_cm\n" +
    "fouls_cm_pp\n" +
    "fouls_rv\n" +
    "fouls_rv_pp\n" +
    "efficience\n" +
    "efficience_pp\n" +
    "}\n" +
"}";

const TEAM_PREVIA_ADV_STATS = "{\n " +
    "team_tcas(id_team_club: ###id_team_club###){\n" +
    "id_team_club\n" +
    "ts\n" +
    "p_reb_def\n" +
    "p_reb_of\n" +
    "etc\n" +
    "p_turnovers\n" +
    "ratio_ft\n" +
    "rival_p_etc\n" +
    "rival_p_turnovers\n" +
    "rival_ratio_ft\n" +
    "}\n" +
"}";

const TEAM_PREVIA_STD_STATS = "{\n" +
    "team_season_std_stats(id_team_club: ###id_team_club###){\n" +
    "id_team_club\n" +
    "games\n" +
    "t2p_conv\n" +
    "t2p_int\n" +
    "t2p_percentage\n" +
    "t2p_conv_pp\n" +
    "t2p_int_pp\n" +
    "t3p_conv\n" +
    "t3p_int\n" +
    "t3p_percentage\n" +
    "t3p_conv_pp\n" +
    "t3p_int_pp\n" +
    "tc_conv\n" +
    "tc_int\n" +
    "tc_percentage\n" +
    "tc_conv_pp\n" +
    "tc_int_pp\n" +
    "tl_conv\n" +
    "tl_int\n" +
    "tl_percentage\n" +
    "tl_conv_pp\n" +
    "tl_int_pp\n" +
    "total_puntos\n" +
    "total_puntos_pp\n" +
    "p_tl_puntos\n" +
    "p_t2p_puntos\n" +
    "p_t3p_puntos\n" +  
    "reb_def\n" +
    "reb_def_pp\n" +
    "reb_of\n" +
    "reb_of_pp\n" +
    "assists\n" +
    "assists_pp\n" +
    "steals\n" +
    "steals_pp\n" +
    "turnovers\n" +
    "turnovers_pp\n" +
    "block_shots\n" +
    "block_shots_pp\n" +
    "fouls_cm\n" +
    "fouls_cm_pp\n" +
    "fouls_rv\n" +
    "fouls_rv_pp\n" +
    "efficience\n" +
    "efficience_pp\n" +
    "}\n" +
"}";

const TEAM_SEASON_ADV_STATS_FIBA = "{\n" +
    "team_advstats_by_season(id_club:###id_club###, id_season:###id_season###){\n" +
    "id_club\n" +
    "id_team_club\n" +
    "etc\n" +
    "p_reb_def\n" +
    "p_reb_of\n" +
    "p_turnovers\n" +
    "ratio_ft\n" +
    "puntos_x_possession\n" +
    "possessions\n" +
    "pbg\n" +
    "possessions_x_minute\n" +
    "assists_x_turnovers\n" +
    "steals_x_turnovers\n" +
    "ts\n" +
    "rival_p_etc\n" +
    "rival_p_turnovers\n" +
    "rival_ratio_ft\n" +
    "ortg\n" +
    "drtg\n" +
    "nrtg\n" +
    "}\n" +
"}";

const TEAM_SEASON_MARGINS_FIBA = "{\n" +
    "team_margins(id_club: ###id_club###, id_season:###id_season###){\n" +
    "id_club\n" +
    "id_team_club\n" +
    "points\n" +
    "opp_points\n" +
    "margin\n" +
    "games\n" +
    "opp_points_pg\n" +
    "margin_pg\n" +
    "}\n" +
"}";

const TEAM_SEASON_STD_STATS_FIBA = "{\n " +
    "team_stdstats_by_season(id_club:###id_club###, id_season: ###id_season###){\n" +
    "id_club\n" +
    "id_team_club\n" +
    "games\n" +
    "minutes\n" +
    "t2p_conv\n" +
    "t2p_conv_pp\n" +
    "t2p_int\n" +
    "t2p_int_pp\n" +
    "t2p_percentage\n" +
    "t3p_conv\n" +
    "t3p_conv_pp\n" +
    "t3p_int\n" +
    "t3p_int_pp\n" +
    "t3p_percentage\n" +
    "tc_conv\n" +
    "tc_conv_pp\n" +
    "tc_int\n" +
    "tc_int_pp\n" +
    "tc_percentage\n" +
    "tl_conv\n" +
    "tl_conv_pp\n" +
    "tl_int\n" +
    "tl_int_pp\n" +
    "tl_percentage\n" +
    "total_puntos\n" +
    "total_puntos_pp\n" +
    "p_tl_puntos\n" +
    "p_t2p_puntos\n" +
    "p_t3p_puntos\n" +
    "ppa\n" +
    "reb_def\n" +
    "reb_def_pp\n" +
    "reb_of\n" +
    "reb_of_pp\n" +
    "total_rebs\n" +
    "total_rebs_pp\n" +
    "assists\n" +
    "assists_pp\n" +
    "steals\n" +
    "steals_pp\n" +
    "turnovers\n" +
    "turnovers_pp\n" +
    "block_shots\n" +
    "block_shots_pp\n" +
    "fouls_cm\n" +
    "fouls_cm_pp\n" +
    "fouls_rv\n" +
    "fouls_rv_pp\n" +
    "efficience\n" +
    "efficience_pp\n" +
    "}\n" +
"}";

const TEAM_SEASON_WINS_FIBA = "{\n" +
    "team_wins(id_club: ###id_club###, id_season:###id_season###){\n" +
    "id_club\n" +
    "id_team_club\n" +
    "wins\n" +
    "defeats\n" +
    "p_wins\n" +
    "}\n" +
"}";

const TEAM_STDSTATS_HISTORY_FIBA = "{\n" +
    "team_stdstats_history(id_club: ###id_club###){\n" +
    "id_club\n" +
    "id_team_club\n" +
    "season_name\n" +
    "games\n" +
    "minutes\n" +
    "t2p_conv\n" +
    "t2p_conv_pp\n" +
    "t2p_int\n" +
    "t2p_int_pp\n" +
    "t2p_percentage\n" +
    "t3p_conv\n" +
    "t3p_conv_pp\n" +
    "t3p_int\n" +
    "t3p_int_pp\n" +
    "t3p_percentage\n" +
    "tc_conv\n" +
    "tc_conv_pp\n" +
    "tc_int\n" +
    "tc_int_pp\n" +
    "tc_percentage\n" +
    "tl_conv\n" +
    "tl_conv_pp\n" +
    "tl_int\n" +
    "tl_int_pp\n" +
    "tl_percentage\n" +
    "total_puntos\n" +
    "total_puntos_pp\n" +
    "pointsbyposs\n" +
    "p_tl_puntos\n" +
    "p_t2p_puntos\n" +
    "p_t3p_puntos\n" +
    "ppa\n" +
    "reb_def\n" +
    "reb_def_pp\n" +
    "reb_of\n" +
    "reb_of_pp\n" +
    "total_rebs\n" +
    "total_rebs_pp\n" +
    "assists\n" +
    "assists_pp\n" +
    "astov\n" +
    "steals\n" +
    "steals_pp\n" +
    "turnovers\n" +
    "turnovers_pp\n" +
    "block_shots\n" +
    "block_shots_pp\n" +
    "fouls_cm\n" +
    "fouls_cm_pp\n" +
    "fouls_rv\n" +
    "fouls_rv_pp\n" +
    "efficience\n" +
    "efficience_pp\n" +
    "}\n" +
"}";

const TEAMS_ADVANCED_STATS_BY_COMPETITION_FIBA = "{\n " +
    "tas_by_comp(id_competition: ###id_competition###){\n" +
    "id_team_club\n" +
    "id_competition\n" +
    "games\n" +
    "etc\n" +
    "p_reb_def\n" +
    "p_reb_of\n" +
    "p_turnovers\n" +
    "ratio_ft\n" +
    "possessions\n" +
    "possessions_x_minute\n" +
    "assists_x_turnovers\n" +
    "steals_x_turnovers\n" +
    "ts\n" +
    "rival_p_etc\n" +
    "rival_p_turnovers\n" +
    "rival_ratio_ft\n" +
    "ortg\n" +
    "drtg\n" +
    "nrtg\n" +
    "}\n" +
"}";

const TEAMS_BY_SEASON_FIBA = "{\n" +
    "teams_by_season(id_season: ###id_season###, id_league: ###id_league###){\n" +
    "id\n" +
    "name\n" +
    "}\n" +
"}";

const TEAMS_GROUP = "{\n" +
    "teams_groups(id_season: ###id_season###){\n" +
    "id\n" +
    "id_group\n" +
    "id_league\n" +
    "id_season\n" +
    "id_club\n" +
    "id_fiba\n" +
    "name\n" +
    "abrev\n" +
    "url_name\n" +
    "logo\n" +
    "r_name\n" +
    "}\n" +
"}";

const TEAMS_BY_GROUP_FIBA = "{\n" +
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

const TEAMS_PTOTREBTS_SEASON_FIBA = "{\n" +
    "teams_p_total_reb_by_season(id_season: ###id_season###){\n" +
    "id_team_club\n" +
    "name\n" +
    "minutes\n" +
    "total_rebs\n" +
    "opp_total_rebs\n" +
    "p_total_rebs\n" +
    "ts\n" +
    "}\n" +
"}";

const TEAMS_SEASON_ADV_STATS_FIBA = "{\n" +
    "teams_advstats_by_season(id_season:###id_season###){\n" +
    "id_club\n" +
    "id_team_club\n" +
    "name\n" +
    "etc\n" +
    "p_reb_def\n" +
    "p_reb_of\n" +
    "p_turnovers\n" +
    "ratio_ft\n" +
    "puntos_x_possession\n" +
    "possessions\n" +
    "pbg\n" +
    "possessions_x_minute\n" +
    "assists_x_turnovers\n" +
    "steals_x_turnovers\n" +
    "ts\n" +
    "rival_p_etc\n" +
    "rival_p_turnovers\n" +
    "rival_ratio_ft\n" +
    "ortg\n" +
    "drtg\n" +
    "nrtg\n" +
    "}\n" +
"}";

const TEAMS_SEASON_ADV_STATS_FIBA_2 = "{\n" +
    "teams_advstats_by_season_2(id_season:###id_season###){\n" +
    "id_club\n" +
    "id_team_club\n" +
    "name\n" +
    "etc\n" +
    "p_reb_def\n" +
    "p_reb_of\n" +
    "p_turnovers\n" +
    "ratio_ft\n" +
    "puntos_x_possession\n" +
    "possessions\n" +
    "pbg\n" +
    "possessions_x_minute\n" +
    "assists_x_turnovers\n" +
    "steals_x_turnovers\n" +
    "ts\n" +
    "rival_p_etc\n" +
    "rival_p_turnovers\n" +
    "rival_ratio_ft\n" +
    "ortg\n" +
    "drtg\n" +
    "nrtg\n" +
    "}\n" +
"}";

const TEAMS_SEASON_MARGINS_FIBA = "{\n" +
    "teams_margins(id_season:###id_season###){\n" +
    "id_club\n" +
    "id_team_club\n" +
    "points\n" +
    "opp_points\n" +
    "margin\n" +
    "games\n" +
    "opp_points_pg\n" +
    "margin_pg\n" +
    "}\n" +
"}";

const TEAMS_SEASON_STD_STATS_FIBA = "{\n " +
    "teams_stdstats_by_season(id_season: ###id_season###){\n" +
    "id_club\n" +
    "id_team_club\n" +
    "name\n" +
    "games\n" +
    "minutes\n" +
    "t2p_conv\n" +
    "t2p_conv_pp\n" +
    "t2p_int\n" +
    "t2p_int_pp\n" +
    "t2p_percentage\n" +
    "t3p_conv\n" +
    "t3p_conv_pp\n" +
    "t3p_int\n" +
    "t3p_int_pp\n" +
    "t3p_percentage\n" +
    "tc_conv\n" +
    "tc_conv_pp\n" +
    "tc_int\n" +
    "tc_int_pp\n" +
    "tc_percentage\n" +
    "tl_conv\n" +
    "tl_conv_pp\n" +
    "tl_int\n" +
    "tl_int_pp\n" +
    "tl_percentage\n" +
    "total_puntos\n" +
    "total_puntos_pp\n" +
    "p_tl_puntos\n" +
    "p_t2p_puntos\n" +
    "p_t3p_puntos\n" +
    "ppa\n" +
    "pointsbyposs\n" +
    "reb_def\n" +
    "reb_def_pp\n" +
    "reb_of\n" +
    "reb_of_pp\n" +
    "total_rebs\n" +
    "total_rebs_pp\n" +
    "assists\n" +
    "assists_pp\n" +
    "steals\n" +
    "steals_pp\n" +
    "turnovers\n" +
    "turnovers_pp\n" +
    "astov\n" +
    "block_shots\n" +
    "block_shots_pp\n" +
    "fouls_cm\n" +
    "fouls_cm_pp\n" +
    "fouls_rv\n" +
    "fouls_rv_pp\n" +
    "efficience\n" +
    "efficience_pp\n" +
    "}\n" +
"}";

const TEAMS_SEASON_STD_STATS_FIBA_2 = "{\n " +
    "teams_stdstats_by_season_2(id_season: ###id_season###){\n" +
    "id_club\n" +
    "id_team_club\n" +
    "name\n" +
    "games\n" +
    "minutes\n" +
    "t2p_conv\n" +
    "t2p_conv_pp\n" +
    "t2p_int\n" +
    "t2p_int_pp\n" +
    "t2p_percentage\n" +
    "t3p_conv\n" +
    "t3p_conv_pp\n" +
    "t3p_int\n" +
    "t3p_int_pp\n" +
    "t3p_percentage\n" +
    "tc_conv\n" +
    "tc_conv_pp\n" +
    "tc_int\n" +
    "tc_int_pp\n" +
    "tc_percentage\n" +
    "tl_conv\n" +
    "tl_conv_pp\n" +
    "tl_int\n" +
    "tl_int_pp\n" +
    "tl_percentage\n" +
    "total_puntos\n" +
    "total_puntos_pp\n" +
    "p_tl_puntos\n" +
    "p_t2p_puntos\n" +
    "p_t3p_puntos\n" +
    "ppa\n" +
    "pointsbyposs\n" +
    "reb_def\n" +
    "reb_def_pp\n" +
    "reb_of\n" +
    "reb_of_pp\n" +
    "total_rebs\n" +
    "total_rebs_pp\n" +
    "assists\n" +
    "assists_pp\n" +
    "steals\n" +
    "steals_pp\n" +
    "turnovers\n" +
    "turnovers_pp\n" +
    "astov\n" +
    "block_shots\n" +
    "block_shots_pp\n" +
    "fouls_cm\n" +
    "fouls_cm_pp\n" +
    "fouls_rv\n" +
    "fouls_rv_pp\n" +
    "efficience\n" +
    "efficience_pp\n" +
    "}\n" +
"}";

const TEAMS_SEASON_WINS_FIBA = "{\n" +
    "teams_wins(id_season:###id_season###){\n" +
    "id_club\n" +
    "id_team_club\n" +
    "wins\n" +
    "defeats\n" +
    "p_wins\n" +
    "}\n" +
"}";

module.exports.BOXSCORE_FIBA = BOXSCORE_FIBA;
module.exports.CLUB_SEASON_FIBA = CLUB_SEASON_FIBA;
module.exports.COMPETITIONS_BY_TEAM_FIBA = COMPETITIONS_BY_TEAM_FIBA;
module.exports.EUROCUP_NEXT_GAMES = EUROCUP_NEXT_GAMES;
module.exports.EUROLEAGUE_NEXT_GAMES = EUROLEAGUE_NEXT_GAMES;
module.exports.GAME_ADV_STATS_FIBA = GAME_ADV_STATS_FIBA;
module.exports.GAME_DATA_FIBA = GAME_DATA_FIBA;
module.exports.GAME_LOG_FIBA = GAME_LOG_FIBA;
module.exports.GAME_STATS_BY_TEAM_FIBA = GAME_STATS_BY_TEAM_FIBA;
module.exports.GROUPS_FIBA = GROUPS_FIBA;
module.exports.LEAGUE_STATS_FIBA = LEAGUE_STATS_FIBA;
module.exports.PLAYER_ADVANCED_STATS_FIBA = PLAYER_ADVANCED_STATS_FIBA;
module.exports.PLAYER_ADVSTATS_HISTORY_FIBA = PLAYER_ADVSTATS_HISTORY_FIBA;
module.exports.PLAYER_SEASON_ADV_STATS_FIBA = PLAYER_SEASON_ADV_STATS_FIBA;
module.exports.PLAYER_COMPETITIONS_FIBA = PLAYER_COMPETITIONS_FIBA;
module.exports.PLAYER_STDSTATS_HISTORY_FIBA = PLAYER_STDSTATS_HISTORY_FIBA;
module.exports.PLAYER_STD_STATS_FIBA = PLAYER_STD_STATS_FIBA;
module.exports.PLAYERS_ADVSTATS_BY_TEAM_FIBA = PLAYERS_ADVSTATS_BY_TEAM_FIBA;
module.exports.PLAYERS_CLUBS_FIBA = PLAYERS_CLUBS_FIBA;
module.exports.PLAYERS_SEASON_ADV_STATS_FIBA = PLAYERS_SEASON_ADV_STATS_FIBA;
module.exports.PLAYERS_SEASON_ADV_STATS_FIBA_2 = PLAYERS_SEASON_ADV_STATS_FIBA_2; 
module.exports.PLAYERS_SEASON_ADV_STATS_FIBA_3 = PLAYERS_SEASON_ADV_STATS_FIBA_3; 
module.exports.PLAYERS_STDSTATS_BY_TEAM_FIBA = PLAYERS_STDSTATS_BY_TEAM_FIBA;
module.exports.PLAYERS_STD_STATS_FIBA = PLAYERS_STD_STATS_FIBA;
module.exports.PLAYERS_STD_STATS_FIBA_2 = PLAYERS_STD_STATS_FIBA_2;
module.exports.PLAYERS_STD_STATS_FIBA_3 = PLAYERS_STD_STATS_FIBA_3;
module.exports.PREVIA_NEXT_GAME_EUROCUP = PREVIA_NEXT_GAME_EUROCUP;
module.exports.PREVIA_NEXT_GAME_EUROLEAGUE = PREVIA_NEXT_GAME_EUROLEAGUE;
module.exports.PREVIA_PLAYER = PREVIA_PLAYER;
module.exports.PREVIA_TCSS = PREVIA_TCSS;
module.exports.PREVIA_TEAM_EUR = PREVIA_TEAM_EUR;
module.exports.QUARTERS_FIBA = QUARTERS_FIBA;
module.exports.RATIOS_N_POSSESSIONS_FIBA = RATIOS_N_POSSESSIONS_FIBA;
module.exports.RESULT_COMPETITIONS_FIBA = RESULT_COMPETITIONS_FIBA;
module.exports.RESULT_GAMEDAY_FIBA = RESULT_GAMEDAY_FIBA;
module.exports.RESULT_GAMES_FIBA = RESULT_GAMES_FIBA;
module.exports.RESULT_LIST_GAMEDAY_FIBA = RESULT_LIST_GAMEDAY_FIBA;
module.exports.SEASON_DATA_FIBA = SEASON_DATA_FIBA;
module.exports.SEASONS_FIBA = SEASONS_FIBA;
module.exports.SEASONS_BY_CLUB_FIBA = SEASONS_BY_CLUB_FIBA;
module.exports.TEAM_ADVSTATS_HISTORY_FIBA = TEAM_ADVSTATS_HISTORY_FIBA;
module.exports.TEAM_BY_CLUB_SEASON_FIBA = TEAM_BY_CLUB_SEASON_FIBA;
module.exports.TEAM_COMPETITION_ADVANCED_STATS_FIBA = TEAM_COMPETITION_ADVANCED_STATS_FIBA;
module.exports.TEAM_COMPETITION_STATS_FIBA = TEAM_COMPETITION_STATS_FIBA;
module.exports.TEAM_GAME_ADVANCED_STATS_FIBA = TEAM_GAME_ADVANCED_STATS_FIBA;
module.exports.TEAM_GAME_LOG_FIBA = TEAM_GAME_LOG_FIBA;
module.exports.TEAM_OPP_ADVSTATS_BY_SEASON_FIBA = TEAM_OPP_ADVSTATS_BY_SEASON_FIBA;
module.exports.TEAM_OPP_STDSTATS_BY_SEASON_FIBA = TEAM_OPP_STDSTATS_BY_SEASON_FIBA;
module.exports.TEAM_PREVIA_ADV_STATS = TEAM_PREVIA_ADV_STATS;
module.exports.TEAM_PREVIA_STD_STATS = TEAM_PREVIA_STD_STATS;
module.exports.TEAM_SEASON_ADV_STATS_FIBA = TEAM_SEASON_ADV_STATS_FIBA;
module.exports.TEAM_SEASON_MARGINS_FIBA = TEAM_SEASON_MARGINS_FIBA;
module.exports.TEAM_SEASON_STD_STATS_FIBA = TEAM_SEASON_STD_STATS_FIBA;
module.exports.TEAM_SEASON_WINS_FIBA = TEAM_SEASON_WINS_FIBA;
module.exports.TEAM_STDSTATS_HISTORY_FIBA = TEAM_STDSTATS_HISTORY_FIBA;
module.exports.TEAMS_ADVANCED_STATS_BY_COMPETITION_FIBA = TEAMS_ADVANCED_STATS_BY_COMPETITION_FIBA;
module.exports.TEAMS_BY_SEASON_FIBA = TEAMS_BY_SEASON_FIBA;
module.exports.TEAMS_GROUP = TEAMS_GROUP;
module.exports.TEAMS_BY_GROUP_FIBA = TEAMS_BY_GROUP_FIBA;
module.exports.TEAMS_PTOTREBTS_SEASON_FIBA = TEAMS_PTOTREBTS_SEASON_FIBA;
module.exports.TEAMS_SEASON_ADV_STATS_FIBA = TEAMS_SEASON_ADV_STATS_FIBA;
module.exports.TEAMS_SEASON_MARGINS_FIBA = TEAMS_SEASON_MARGINS_FIBA;
module.exports.TEAMS_SEASON_STD_STATS_FIBA = TEAMS_SEASON_STD_STATS_FIBA;
module.exports.TEAMS_SEASON_WINS_FIBA = TEAMS_SEASON_WINS_FIBA;
module.exports.TEAMS_SEASON_STD_STATS_FIBA_2 = TEAMS_SEASON_STD_STATS_FIBA_2;
module.exports.TEAMS_SEASON_ADV_STATS_FIBA_2 = TEAMS_SEASON_ADV_STATS_FIBA_2;