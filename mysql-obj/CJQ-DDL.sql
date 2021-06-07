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
CREATE DATABASE CJQ CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE CJQ; 

-- Modalite creation 
CREATE TABLE MODALITE(
    codeModalite    INT         NOT NULL AUTO_INCREMENT, 
    nomModalite     CHAR(16)    NOT NULL, 

    PRIMARY KEY(codeModalite),
    INDEX(nomModalite)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4; 

-- Horaire creation
CREATE TABLE HORAIRE(
    codeHoraire INT         NOT NULL AUTO_INCREMENT, 
    heureDebut  TIME        NOT NULL, 
    heureFin    TIME        NOT NULL, 
    nomHoraire  CHAR(16)    NOT NULL, 

    PRIMARY KEY(codeHoraire), 
    INDEX(nomHoraire)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Entraineur creation
CREATE TABLE ENTRAINEUR(
    codeEntraineur INT NOT NULL AUTO_INCREMENT, 
    nom CHAR(32) NOT NULL, 
    prenom CHAR(32) NOT NULL, 
    registreFederation CHAR(32) NOT NULL, 
    gradeDan INT, 

    PRIMARY KEY(codeEntraineur), 
    INDEX(nom, prenom)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Cours creation
CREATE TABLE COURS(
    codeCours       INT NOT NULL AUTO_INCREMENT, 
    codeHoraire     INT NOT NULL, 
    codeModalite    INT NOT NULL, 
    codeEntraineur  INT NOT NULL, 

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
    codeMembre                  INT NOT NULL AUTO_INCREMENT, 
    nom                         CHAR(32) NOT NULL, 
    prenom                      CHAR(32) NOT NULL, 
    dateNaissance               DATE NOT NULL, 
    sexe                        CHAR(1) NOT NULL, 
    occupation                  CHAR(32),
    adresse                     CHAR(32) NOT NULL, 
    ville                       CHAR(32) NOT NULL, 
    codePostal                  CHAR(6) NOT NULL, 
    province                    CHAR(32) NOT NULL, 
    telephoneResidence          CHAR(10),
    telephoneCellulaire         CHAR(10),
    courriel                    CHAR(64),
    grade                       CHAR(8) NOT NULL, 
    datePromotionGrade          DATE NOT NULL, 
    nomPersonneUrgence          CHAR(64) NOT NULL, 
    telephoneResidenceUrgence   CHAR(10), 
    telephoneCellulaireUrgence  CHAR(10), 
    dateMiseAJour               DATE NOT NULL, 

    PRIMARY KEY(codeMembre), 
    INDEX(nom, prenom)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Inscription creation
CREATE TABLE INSCRIPTION( 
    codeInscription INT NOT NULL AUTO_INCREMENT, 
    codeMembre      INT NOT NULL, 
    codeCours       INT NOT NULL, 
    dateInscription DATE NOT NULL,
    dateDebut       DATE NOT NULL, 
    

    PRIMARY KEY(codeInscription), 
    INDEX(codeCours),
    INDEX(codeMembre),
    FOREIGN KEY(codeCours)
        REFERENCES COURS(codeCours), 
    FOREIGN KEY (codeMembre)
        REFERENCES MEMBRE(codeMembre)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=1000;

-- Contact creation 
CREATE TABLE CONTACT(
    codeSeqContact INT NOT NULL AUTO_INCREMENT, 
    nom CHAR(32) NOT NULL, 
    prenom CHAR(32) NOT NULL, 
    courriel CHAR(64) NOT NULL,
    telephone CHAR(10) NOT NULL,  -- format code area + numero, sans espaces ni symboles
    messageContact VARCHAR(2048), 
    indicateurEtatMessage CHAR(1), 
    tokenReponse CHAR(64), 
    codeMembre INT, 

    PRIMARY KEY(codeSeqContact), 
    INDEX(indicateurEtatMessage),
    INDEX(codeMembre),
    FOREIGN KEY(codeMembre)
        REFERENCES MEMBRE(codeMembre)

)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;