-- ###
-- Filename: CJQ-DML.sql
-- Fichier de DDL "Data manipulation language" pour la base de données de 
-- l'application du Club de Judo de Québec. 
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

--  Insertion de valeurs dans la table MODALITE
INSERT INTO MODALITE(nomModalite) VALUES ('Poussin');
INSERT INTO MODALITE(nomModalite) VALUES ('Juvenile');
INSERT INTO MODALITE(nomModalite) VALUES ('Junior');
INSERT INTO MODALITE(nomModalite) VALUES ('Senior');
INSERT INTO MODALITE(nomModalite) VALUES ('Compétition');
INSERT INTO MODALITE(nomModalite) VALUES ('Kata');

--  Insertion de valeurs dans la table HORAIRE
INSERT INTO HORAIRE(heureDebut, heureFin, nomHoraire) VALUES ('090000', '110000', 'Matin'); 
INSERT INTO HORAIRE(heureDebut, heureFin, nomHoraire) VALUES ('120000', '130000', 'Midi'); 
INSERT INTO HORAIRE(heureDebut, heureFin, nomHoraire) VALUES ('140000', '160000', 'Après-midi'); 
INSERT INTO HORAIRE(heureDebut, heureFin, nomHoraire) VALUES ('190000', '210000', 'Soir'); 

