
exports.getContacts = (req, res) => {
    console.log(`GET /users - Lists all contacts`); 
    res.status(200).send(`GET /contacts - Lists all contacts`); 
};

exports.getContactById = async(req, res) => {
    let id = req.params.id; 
    console.log(`GET /contacts/:id - get a specific contact ${id}`); 
    res.status(200).send(`GET /contacts/:id - get a specific contact ${id}`); 
}

exports.createContact = async(req, res) => {
    console.log(`POST /contacts - creates a new contact`); 
    /*let nom = req.body.nom; 
    let prenom = req.body.prenom;
    await maio(nom, prenom); */
    res.status(201).send(`POST /contact - creates a new contact`); 
}

exports.patchContact = async(req, res) => {
    let id = req.params.id; 
    console.log(`PATCH /contacts/:id - update the data for a specific contact ${id}`); 
    res.status(200).send(`PATCH /contacts/:id - update the data for a specific contact ${id}`); 
}

exports.deleteContact = async(req, res) => {
    let id = req.params.id; 
    console.log(`DELETE /contacts/:id - update the data for a specific contact ${id}`); 
    res.status(200).send(`DELETE /contacts/:id - update the data for a specific contact ${id}`); 
}


