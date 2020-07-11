const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");


// for sending email through contact section
router.post('/send', function(req, res){

    const output = `
        <p>You have a message from ibrahimayoob.com</p>
        <h3>Contact Detail</h3>
        <ul>
            <li>Name: ${req.body.name} </li>
            <li>Email: ${req.body.email} </li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.live.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        requiresAuth: true,
        domains: ["hotmail.com", "outlook.com"],
        auth: {
            user: process.env.CONTACT_FORM_EMAIL, // generated ethereal user
            pass: process.env.CONTACT_FORM_PASSWORD // generated ethereal password
        },
        tls:{
            rejectUnauthorized: false //remove in production
        }
    });

    // send mail with defined transport object
    transporter.sendMail({
        from: '<masjidsunnahchi@hotmail.com>', // sender address
        to: "ibrayo1128@gmail.com", // list of receivers
        subject: "Message From Online Portfolio", // Subject line
        text: "Hello world?", // plain text body
        html: output// html body
    }, (err, data) => {
        if (err) {
            res.json({ msg: "err" });
        } else {
            res.json({ msg: "suc" });
        }
    });
    
});

module.exports = router;