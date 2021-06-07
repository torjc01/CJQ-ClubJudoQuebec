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

// Creation du serveur express et de l'application
let express     = require('express'); 
let cors        = require('cors'); 
//let ngrok       = require('ngrok'); 
let swaggerUi   = require('swagger-ui-express'); 
let errorHelper = require('./helpers/errorHelpers'); 

let { appName, hostname, port, swaggerFile } 
                = require('./helpers/config');

let app         = express(); 
let router      = express.Router(); 
                  require('dotenv').config(); 

const swaggerDoc = require(swaggerFile);

// Routes 
const getApp        = require('./routes/getApp');
const getContact    =  require('./routes/getContact');
const getContacts   =  require('./routes/getContacts');

console.log('*'.repeat(80)); 
console.log("0: > ", getApp); 
console.log("1: > ", getContacts); 
console.log("2: > ", getContact); 
console.log('*'.repeat(80)); 

app.use(express.json());                                                // Configure middleware de lecture de json

app.use(cors());                                                        // Configure middleware pour CORS

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));     // Configure swagger pour la documentation de l'API

app.use('/api', router);                                                // Configure router pour que toutes les routes soient prefixées par /api/v1

router.route('/')
    .get(getApp);

router.route('/contacts')
    .get(getContacts); 

router.route('/contacts/:id')
    .get(getContact);


// Créer serveur pour écouter la PORT 
let server = app.listen(port, function(){
    console.log(`${appName} exécute sur un Nodejs server ${hostname}:${port}/api`);
    console.log(`Les documentations de l'API exécutent sur ${hostname}:${port}/api-docs`);
});