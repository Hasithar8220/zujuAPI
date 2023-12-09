-- Tournaments
INSERT INTO Tournament (name) VALUES ('Premier League');
INSERT INTO Tournament (name) VALUES ('La Liga');

-- Teams
INSERT INTO Team (name) VALUES ('Manchester United');
INSERT INTO Team (name) VALUES ('Real Madrid');
INSERT INTO Team (name) VALUES ('Liverpool');
INSERT INTO Team (name) VALUES ('Barcelona');

-- Fixtures
INSERT INTO Fixture (tournament_id, home_team_id, away_team_id, match_date, match_score)
VALUES
  (1, 1, 2, '2023-01-15', '2-1'),
  (1, 3, 4, '2023-01-17', '0-0'),
  (2, 1, 3, '2023-01-20', '3-2');