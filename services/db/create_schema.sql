CREATE DATABASE IF NOT EXISTS zuju;

USE zuju;

-- Tournament Table
CREATE TABLE Tournament (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Team Table
CREATE TABLE Team (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Fixture Table
CREATE TABLE Fixture (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tournament_id INT,
    home_team_id INT,
    away_team_id INT,
    match_date DATE,
    match_score VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (tournament_id) REFERENCES Tournament(id),
    FOREIGN KEY (home_team_id) REFERENCES Team(id),
    FOREIGN KEY (away_team_id) REFERENCES Team(id)
);
