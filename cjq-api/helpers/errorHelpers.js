/*
* Filename: errorHelpers.js
* Functions utilitaires pour aider le traitement d'erreur. 
* Author: Julio-Cesar Torres <juliozohar@gmail.com> (@juliozohar)
* Date: 2021-06-07
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
let logRepo = require('./logRepo');
let errorHelpers = {

    logErrorToConsole: function(err, req, res, next){
        console.error("Log entry: " + JSON.stringify(errorHelpers.errorBuilder(err))); 
        console.error("*".repeat(80)); 
        next(err);
    },

    logErrorsToFile: function(err, req, res, next){
        let errorObject = errorHelpers.errorBuilder(err); 
        errorObject.requestInfo = {
            "hostname": req.hostname, 
            "path": req.path, 
            "app": req.app
        }
        logRepo.write(errorObject, function(data){
            console.log(data); 
        }, function(err){
            console.log(err);
        });
        next(err);
    }, 
    clientErrorHandler: function(err, req, res, next){
        if(req.xhr){
            res.status(500).json({
                "status": 500,
                "statusText": "Internal Server Error", 
                "message": "XMLHttpRequest error",
                "error": {
                    "errno": 0, 
                    "call" : "XMLHttpRequest call",
                    "code": "INTERNAL_SERVER_ERRROR", 
                    "message": "XMLHttpRequest error",
                }
            });
        } else {
            next(err); 
        }
    }, 

    errorHandler: function(err, req, res, next){
        res.status(500).json(errorHelpers.errorBuilder(err));
    },

    // Builds the error messages that are going to be sent
    errorBuilder: function(err){
        return{
            "status": 500,
            "statusText": "Internal Server Error", 
            "message": err.message,
            "error": {
                "errno": err.errno, 
                "call" : err.syscall,
                "code": "INTERNAL_SERVER_ERRROR", 
                "message": err.message
            }
        }
    }
}

module.exports = errorHelpers;