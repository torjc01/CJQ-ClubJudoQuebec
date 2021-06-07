-- ###
-- Filename: CJQ-DDL.sql
-- Fichier de DDL "Data definition language" pour la base de données de 
-- l'application du Club de Judo de Québec
-- Author: Julio Cesar Torres <juliozohar@gmail.com> (@juliozohar)
-- Date: 2021-06-03
-- 
--  Copyright 2021 Kryptogarten LLC
-- 
--  Licensed under the Apache License, Version 2.0 (the "License");
--  you may not use this file except in compliance with the License.
--  You may obtain a copy of the License at
-- 
--    http://www.apache.org/licenses/LICENSE-2.0
-- 
--  Unless required by applicable law or agreed to in writing, software
--  distributed under the License is distributed on an "AS IS" BASIS,
--  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
--  See the License for the specific language governing permissions and
--  limitations under the License.
-- ###

-- Dartabase creation
DROP DATABASE IF EXISTS CJQ; 
CREATE DATABASE CJQ CHARACTER SET utf8 COLLATE utf8_general_ci;
USE CJQ; 

-- Modalite creation 
CREATE TABLE MODALITE(
    codeModalite    INT(2)      NOT NULL AUTO_INCREMENT, 
    nomModalite     VARCHAR(16) NOT NULL, 

    PRIMARY KEY(codeModalite),
    INDEX(nomModalite)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4; 

-- Horaire creation
CREATE TABLE HORAIRE(
    codeHoraire INT(2)      NOT NULL AUTO_INCREMENT, 
    heureDebut  TIME        NOT NULL, 
    heureFin    TIME        NOT NULL, 
    nomHoraire  VARCHAR(16) NOT NULL, 

    PRIMARY KEY(codeHoraire), 
    INDEX(nomHoraire)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Entraineur creation
CREATE TABLE ENTRAINEUR(
    codeEntraineur INT(2) NOT NULL AUTO_INCREMENT, 
    nom VARCHAR(32) NOT NULL, 
    prenom VARCHAR(32) NOT NULL, 
    registreFederation VARCHAR(32) NOT NULL, 
    gradeDan INT(1), 

    PRIMARY KEY(codeEntraineur), 
    INDEX(nom, prenom)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Cours creation
CREATE TABLE COURS(
    codeCours INT(2) NOT NULL AUTO_INCREMENT, 
    codeHoraire INT(2) NOT NULL, 
    codeModalite INT(2) NOT NULL, 
    codeEntraineur INT(2) NOT NULL, 

    PRIMARY KEY (codeCours),
    INDEX(codeCours, codeHoraire), 
    FOREIGN KEY(codeHoraire)
        REFERENCES HORAIRE(codeHoraire), 
    FOREIGN KEY(codeModalite)
        REFERENCES MODALITE(codeModalite), 
    FOREIGN KEY(codeEntraineur)
        REFERENCES ENTRAINEUR(codeEntraineur)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Membre creation 
CREATE TABLE MEMBRE(
    codeMembre INT NOT NULL AUTO_INCREMENT, 
    nom VARCHAR(32) NOT NULL, 
    prenom VARCHAR(32) NOT NULL, 
    dateNaissance DATE NOT NULL, 
    sexe CHAR(1) NOT NULL, 
    occupation VARCHAR(32),
    addresse VARCHAR(32) NOT NULL, 
    ville VARCHAR(32) NOT NULL, 
    codePostal VARCHAR(6) NOT NULL, 
    province VARCHAR(32) NOT NULL, 
    telephoneResidence VARCHAR(10),
    telephoneCellulaire VARCHAR(10),
    courriel VARCHAR(64),
    grade VARCHAR(7) NOT NULL, 
    datePromotionGrade DATE NOT NULL, 
    nomPersonneUrgence VARCHAR(64) NOT NULL, 
    telephoneResidenceUrgence VARCHAR(10) NOT NULL, 
    telephoneCellulaireUrgence VARCHAR(10) NOT NULL, 
    dateMiseAJour DATE NOT NULL, 

    PRIMARY KEY(codeMembre), 
    INDEX(nom, prenom)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Inscription creation
CREATE TABLE INSCRIPTION( 
    codeInscription INT NOT NULL AUTO_INCREMENT, 
    dateInscription DATE NOT NULL,
    dateDebut DATE NOT NULL, 
    codeCours INT(2) NOT NULL, 
    codeMembre INT NOT NULL, 

    PRIMARY KEY(codeInscription), 
    INDEX(dateInscription), 
    FOREIGN KEY(codeCours)
        REFERENCES COURS(codeCours), 
    FOREIGN KEY (codeMembre)
        REFERENCES MEMBRE(codeMembre)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=1000;
