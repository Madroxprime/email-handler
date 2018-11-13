const nodemailer = require('nodemailer');

let transporter;

module.exports = function(settings){
    if(!transporter){
        transporter = nodemailer.createTransport(settings);
    }
    return transporter;
};