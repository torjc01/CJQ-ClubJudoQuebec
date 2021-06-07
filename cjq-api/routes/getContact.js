
let getContact = async(req, res) => {
    let id = req.params.id; 
    console.log("contacts/parametros");
    res.status(200).send(`Single contact ${id}`); 
}
module.exports = getContact; 
