-- ###
-- Filename: CJQ-config.sql
-- Fichier de config de la base de données: créé un nouveau usager pour l'application, 
-- puis l'attribue des accès d'administrateur au site; 
-- crée un usager web, puis l'attribue des accès d'utilisateur regulier au site. 
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

-- Creation d'un nouveau usager, et attribution des accès d'admin à lui. 
DROP USER IF EXISTS 'cjqadmin'@'%'; 

CREATE USER 'cjqadmin'@'%' IDENTIFIED BY '123456'; 

GRANT ALL PRIVILEGES ON *.* TO 'cjqadmin'@'%'; 

FLUSH PRIVILEGES; 

SHOW GRANTS FOR 'cjqadmin'@'%'; 

-- Création d'un nouveau usager, et attribution des accès d'usager web. 
DROP USER IF EXISTS 'cjqweb'@'%'; 

CREATE USER 'cjqweb'@'%' IDENTIFIED BY '123456'; 

GRANT ALL PRIVILEGES ON *.* TO 'cjqweb'@'%'; 

FLUSH PRIVILEGES; 

SHOW GRANTS FOR 'cjqweb'@'%'; 


-- Fait display des usagers qui viennent d'être créés. 
select host, user from mysql.user; 

-- Suppression d'un usager de la BD. 
-- DROP USER 'olduser'@'localhost'; 
