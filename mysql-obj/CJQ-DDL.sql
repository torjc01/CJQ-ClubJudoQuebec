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

DROP DATABASE IF EXISTS CJQ; 
CREATE DATABASE CJQ CHARACTER SET utf8 COLLATE utf8_general_ci;

USE CJQ; 

CREATE TABLE authors(
    id int(11) NOT NULL AUTO_INCREMENT, 
    name varchar(50),
    city varchar(50), 
    PRIMARY KEY(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=5; 