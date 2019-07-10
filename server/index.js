const express = require('express');
const nodemailer = require('nodemailer')
require('dotenv').config()
const app = express();

app.use(express.json())

const {EMAIL, EMAIL_PASSWORD} = process.env

app.post('/api/send', (req, res, next) => {
    const {name, email, title, message} = req.body
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {

        }
    })
})