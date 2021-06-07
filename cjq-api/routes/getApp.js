let { appName } = require('../helpers/config'); 

let getApp = async(req, res) => {
    res.status(200).send(`Fucking ${appName}`);
}

module.exports = getApp;