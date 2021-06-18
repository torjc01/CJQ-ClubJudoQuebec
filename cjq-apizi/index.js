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

//const userController = require('./controllers/users');
//const getApp = require('./routes/getApp');

// Routes 
const getApp        = require('./controllers/getApp');
const { getUsers, getUserById, createUser, patchUser, deleteUser }  = require('./controllers/users');
const { getContacts, getContactById, createContact, patchContact, deleteContact} = require('./controllers/contacts');
console.log('*'.repeat(80)); 

app.use(express.json());                                                // Configure middleware de lecture de json

app.use(cors());                                                        // Configure middleware pour CORS

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));     // Configure swagger pour la documentation de l'API

app.use('/api', router);                                                // Configure router pour que toutes les routes soient prefixées par /api/v1

// Routing paths 


// ***** ROOT PAGE *****
router.route('/')
    .get(getApp); 


// ***** CONTACT *****
router.route('/contacts')
    .get(getContacts); 

router.route('/contacts/:id')
    .get(getContactById);

router.route('/contacts')
    .post(createContact);

router.route('/users/:id')
    .patch(patchContact);
    
router.route('/users/:id')
    .delete(deleteContact);

// ***** USER *****    

router.route('/users')
    .get(getUsers);

router.route('/users/:id')
    .get(getUserById);

router.route('/users')
    .post(createUser);

router.route('/users/:id')
    .patch(patchUser);
    
router.route('/users/:id')
    .delete(deleteUser);


// **********************************************************
// ***** Boilerplate for error treatment 
// **********************************************************
// Configure exception to the console
app.use(errorHelper.logErrorToConsole); 
// Configure exception to file
app.use(errorHelper.logErrorsToFile); 
// Configure client error handler 
app.use(errorHelper.clientErrorHandler); 
// Configure catch-all expception middleware last 
app.use(errorHelper.errorHandler);

// Créer serveur pour écouter la PORT 
let server = app.listen(port, function(){
    console.log(`${appName} exécute sur un Nodejs server ${hostname}:${port}/`);
    console.log(`Les documentations de l'API exécutent sur ${hostname}:${port}/api-docs`);
});