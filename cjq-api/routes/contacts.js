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
    await maio();
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

const nodemailer = require('nodemailer'); 

async function maio(){
    let testAccount = await nodemailer.createTestAccount(); 
    let transporter = nodemailer.createTransport({
        port: 25
    });

    let info = await transporter.sendMail({
        from: '"Julio Cesar" <juliozohar@gmail.com>', 
        to: "bar@gmail.com, baz@gmail.com", 
        subject: "Hiya from me", 
        text: "Hiiiiiyyyyyaaaaa! ", 
        html: "<b>Hiiiiiyyyyyaaaaa! </b>"
    });

    console.log("Message sent: %s", info.messageId); 
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
maio().catch(console.error);