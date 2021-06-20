/*
* Filename: index.js
* Fichier principal de l'application REST/API du CJQ. 
* Author: Julio-Cesar Torres <juliozohar@gmail.com> (@juliozohar)
* Date: 2021-06-03
*
*   Copyright 2021 Kryptogarten LLC
*
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
*/

const express = require("express");
const bodyParser = require("body-parser");
let swaggerUi   = require('swagger-ui-express'); 
let cors        = require('cors'); 
//const swaggerDoc = require(swaggerFile);

let { appName, hostname, port, swaggerFile } 
                = require('./app/config/config');
const getApp    = require('./app/controllers/home.controller');

const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.json());                                                // Configure middleware de lecture de json

app.use(cors());                                                        // Configure middleware pour CORS

//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));     // Configure swagger pour la documentation de l'API

// simple route
app.get("/", (req, res) => {
  res.status(200).json("API Provider pour Club de Judo de Quebec");
});

require("./app/routes/customer.routes.js")(app);
require("./app/routes/contact.routes.js")(app);
require("./app/routes/user.routes.js")(app); 

// set port, listen for requests
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`${appName} exécute sur un Nodejs server ${hostname}:${port}/`);
  console.log(`Les documentations de l'API exécutent sur ${hostname}:${port}/api-docs`);
});
