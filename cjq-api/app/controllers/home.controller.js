let { appName } = require('../config/config'); 

let getApp = async(req, res) => {
    res.status(200).send(`${appName}`);
}

module.exports = getApp;