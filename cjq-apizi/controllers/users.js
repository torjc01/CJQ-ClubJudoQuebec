exports.getUsers = async(req, res) => {
    console.log(`AAA GET /users - Lists all users`); 
    res.status(200).send(`GET /users - Lists all users`); 
}

exports.getUserById = async(req, res) => {
    let id = req.params.id; 
    console.log(`AAA GET /users/:id - get a specific user ${id}`); 
    res.status(200).send(`GET /users/:id - get a specific user ${id}`); 
}

exports.createUser = async(req, res) => {
    console.log(`AAA POST /users - creates a new user`); 
    res.status(201).send(`POST /users - creates a new user`); 
}

exports.patchUser = async(req, res) => {
    let id = req.params.id; 
    console.log(`AAA PATCH /users/:id - update the data for a specific user ${id}`); 
    res.status(200).send(`PATCH /users/:id - update the data for a specific user ${id}`); 
}

exports.deleteUser = async(req, res) => {
    let id = req.params.id; 
    console.log(`AAA DELETE /users/:id - update the data for a specific user ${id}`); 
    res.status(200).send(`DELETE /users/:id - update the data for a specific user ${id}`); 
}