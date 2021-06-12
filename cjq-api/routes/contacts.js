
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
    let nom = req.body.nom; 
    let prenom = req.body.prenom;
    await maio(nom, prenom);
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

async function maio(nom, prenom){
    let testAccount = await nodemailer.createTestAccount(); 
    let transporter = nodemailer.createTransport({
        port: 25, // process.env.MAILDEV_HOST,
        host: 'maildev', // process.env.MAILDEV_PORT, 
        ignoreTLS: true
    });

    let time = new Date(); 
    let info = await transporter.sendMail({
        from: '"Julio Cesar" <juliozohar@gmail.com>', 
        to: "bar@gmail.com, baz@gmail.com", 
        subject: "Hiya from me", 
        text: `
            <p>
            Hello ${prenom} ${nom}! 
            Welcome! You're almost ready to connect to Club de Judo de Quebec Member Support. Just click the link below to confirm your email and create a support ticket.
            </p><p>
            Note: You will also be redirected to the login page, but this is optional.</p>
            ${time}
        `,
        html: `
            <p>
            Hello ${prenom} ${nom}! 
            Welcome! You're almost ready to connect to Club de Judo de Quebec Member Support. Just click the link below to confirm your email and create a support ticket.
            </p>
            <p>Note: You will also be redirected to the login page, but this is optional.</p>
            ${time}
        `
    });

    console.log("Message sent: %s", info.messageId); 
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
maio().catch(console.error);