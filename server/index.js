const express = require('express');
const nodemailer = require('nodemailer')
require('dotenv').config()
const app = express();

app.use(express.json())

const {EMAIL, EMAIL_PASSWORD} = process.env


app.post('/api/send', (req, res, next) => {
    console.log(req.body)
    const {name, email, title, message} = req.body
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: EMAIL,
            pass: EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: `${EMAIL}`,
        to: `${email}`,
        subject: `${title} by ${name}`,
        text: `${message}`,
        replyTo: ''
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
            console.error('there was an error ', err)
        } else {
            console.log('here is the email ', info)
        }
    })
});

const port = 4000;

app.listen(port, ()=> console.log(`Listening on port ${port}`))