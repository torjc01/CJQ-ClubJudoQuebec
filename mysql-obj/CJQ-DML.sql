-- ###
-- Filename: CJQ-DML.sql
-- Fichier de DDL "Data manipulation language" pour faire le seeding de la 
-- base de données de l'application du Club de Judo de Québec. 
-- Le DML fait le traitement initial de la base de donnés, comme la charge
-- registres qui seront la base des tables de support pour le "kickstart" 
-- de la BD. 
-- Author: Julio-Cesar Torres <juliozohar@gmail.com> (@juliozohar)
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
USE CJQ;

--  Insertion de valeurs dans la table MODALITE
INSERT INTO MODALITE(nomModalite) VALUES ('Poussin');
INSERT INTO MODALITE(nomModalite) VALUES ('Juvenile');
INSERT INTO MODALITE(nomModalite) VALUES ('Junior');
INSERT INTO MODALITE(nomModalite) VALUES ('Senior');
INSERT INTO MODALITE(nomModalite) VALUES ('Competition');
INSERT INTO MODALITE(nomModalite) VALUES ('Kata');
COMMIT; 

--  Insertion de valeurs dans la table HORAIRE
INSERT INTO HORAIRE(heureDebut, heureFin, nomHoraire) VALUES ('090000', '110000', 'Matin'); 
INSERT INTO HORAIRE(heureDebut, heureFin, nomHoraire) VALUES ('120000', '130000', 'Midi'); 
INSERT INTO HORAIRE(heureDebut, heureFin, nomHoraire) VALUES ('140000', '160000', 'Apres-midi'); 
INSERT INTO HORAIRE(heureDebut, heureFin, nomHoraire) VALUES ('190000', '210000', 'Soir'); 
COMMIT; 

--  Insertion de valeurs dans la table MEMBRE
INSERT INTO MEMBRE(nom, prenom, dateNaissance, sexe, occupation, adresse, ville, codePostal, province, 
                   telephoneResidence, telephoneCellulaire, courriel, grade, datePromotionGrade, nomPersonneUrgence,
                   telephoneResidenceUrgence, telephoneCellulaireUrgence, dateMiseAJour )
VALUES
    ('Torres dos Santos', 'Julio Cesar', '1976-11-08', 'M', 'Analyste de systèmes', '3029, rue Raudot', 'Québec', 'G1C1W8', 'QC',
     '5813077882', '5813077882', 'juliozohar@gmail.com', 'noire', '2015-07-08', 'Edjara Rodrigues Morais', '5813089368', '5813089368', 
    '2021-06-07'); 

COMMIT; 

--  Insertion de valeurs dans la table ENTRAINEUR
INSERT INTO ENTRAINEUR(nom, prenom, registreFederation, gradeDan, bio)
    VALUES 
    ('Miúra', "Takaôki", 'IJF-23423423-CA', 5, "Premier entraîneur du dojo.");
INSERT INTO ENTRAINEUR(nom, prenom, registreFederation, gradeDan, bio)
    VALUES 
    ('Ozawa', "Keiji", 'IJF-8764654429-CA', 7, "Deuxième entraîneur du dojo.");
COMMIT; 

-- Insertion de valeurs dans la table COURS
INSERT INTO COURS(codeHoraire, codeModalite, codeEntraineur, salleDojo)
    VALUES (1, 1, 1, 'Dojo Kyoto'); 
INSERT INTO COURS(codeHoraire, codeModalite, codeEntraineur, salleDojo)
    VALUES (4, 5, 2, 'Dojo Tokyo'); 
INSERT INTO COURS(codeHoraire, codeModalite, codeEntraineur, salleDojo)
    VALUES (2, 3, 1, 'Dojo Tokyo'); 
COMMIT; 

--  Insertion de valeurs dans la table INSCRIPTION
INSERT INTO INSCRIPTION (codeMembre, codeCours, dateInscription, dateDebut)
    VALUES (1, 1, (SELECT * FROM V_DATE), (SELECT * FROM V_DATE)); 
COMMIT;

--  Insertion de valeurs dans la table CONTACT
INSERT INTO CONTACT (nom, prenom, courriel, telephone, messageContact, dateReceptionMessage, statusMessage, tokenReponse, codeMembre)
    VALUES ('Blanchet', 'Gerard', 'gblanchet@gmail.com', '4183439832', "J'aimerais avoir de l'info sur le cours de judo pour adultes...", "20210530", 
            'R', 'asdahjk4298323jhksada9sd8u7234hjd23==', NULL); 
INSERT INTO CONTACT (nom, prenom, courriel, telephone, messageContact, dateReceptionMessage, statusMessage, tokenReponse, codeMembre)
    VALUES ('Torres dos Santos', 'Julio Cesar', 'juliozohar@gmail.com', '4183439832', 
            "Internet, Web, and mobile applications that provide security, but also anonymity of users, are gaining increasing interest and importance. Examples of such new applications are various innovative payment systems, digital notaries, electronic voting, sharing of sensitive documents, electronic auctions, medical applications, and many others. The common characteristic of these applications is that they all require anonymity of users and their transactions. In addition to their anonymity, user identifiers, data, and transactions handled by those applications also require standard security services, such as identification, authentication, and authorization of users, data confidentiality, data integrity, sender’s/receiver’s authenticity, and non-repudiation of transactions. Providing these security services in combination with anonymity is especially challenging, because all of them require explicit user identification and authentication.",    
            "20210605", 'R', 'hjkrtasdahjk4298323jda9sd8u7234hjd23==', NULL); 
INSERT INTO CONTACT (nom, prenom, courriel, telephone, messageContact, dateReceptionMessage, statusMessage, tokenReponse, codeMembre)
    VALUES ('Perez', 'Ana', 'aperesr@gmail.com', '5561398323', 
            "Internet, Web, and mobile applications that provide security, but also anonymity of users, are gaining increasing interest and importance. Examples of such new applications are various innovative payment systems, digital notaries, electronic voting, sharing of sensitive documents, electronic auctions, medical applications, and many others. The common characteristic of these applications is that they all require anonymity of users and their transactions. In addition to their anonymity, user identifiers, data, and transactions handled by those applications also require standard security services, such as identification, authentication, and authorization of users, data confidentiality, data integrity, sender’s/receiver’s authenticity, and non-repudiation of transactions. Providing these security services in combination with anonymity is especially challenging, because all of them require explicit user identification and authentication.",    
            "20210605", 'R', 'hjkrtasdahjk4298323jda9sd8u7234hjd23==', NULL); 

COMMIT; 

-- Insertion de valeurs dans la table ROLE 
INSERT INTO ROLES(nomRole) VALUES ('Public'); 
INSERT INTO ROLES(nomRole) VALUES ('User');
INSERT INTO ROLES(nomRole) VALUES ('Moderateur');
INSERT INTO ROLES(nomRole) VALUES ('Admin');
INSERT INTO ROLES(nomRole) VALUES ('SuperUser');

COMMIT;

-- Insertion de valeurs dans la table USER
INSERT INTO USER(username, codeMembre, motPasse, statusUser, niveauPermission) VALUES ('torjc01', 1, 'sefiwhwef8wjb23923rub23794f', 'A', 'sysadm');

-- Insertion de valeurs dans la table USER_ROLE
INSERT INTO USER_ROLE (codeUser, codeRole) VALUES (1, 5); 
INSERT INTO USER_ROLE (codeUser, codeRole) VALUES (1, 4); 
INSERT INTO USER_ROLE (codeUser, codeRole) VALUES (1, 3); 


-- Display data created
SELECT * from MODALITE; 
SELECT * from HORAIRE;
SELECT * from MEMBRE;
SELECT * FROM ENTRAINEUR;
SELECT * FROM COURS; 
SELECT * FROM INSCRIPTION;
SELECT * FROM CONTACT; 
SELECT * FROM USER; 
SELECT * FROM ROLES; 
SELECT * FROM USER_ROLE; 
SELECT * FROM V_DATE; 
SELECT * FROM V_NOW;
SELECT * FROM V_COURS_EVENEMENT; 