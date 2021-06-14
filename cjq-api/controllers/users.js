exports.createUser = (req, res, next) => {
    res.json({message: "POST /users - creates a new user "});
    next();
}

exports.getUser = async (req, res) => {
    res.send({message: "GET /users - Lists all users "});
}

exports.getUserById= async(req, res) => {
    res.send({message: "GET /users/:id - get a specific user "});
}

exports.patchUser = (req, res, next) => {
    res.json({message: "PATCH /users/:id"});
}

exports.deleteUser = (req, res, next) => {
    res.json({message: "DELETE /users/:id"});
}