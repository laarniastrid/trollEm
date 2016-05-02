var Mail = require('../models/mailSchema.js'),
    nodemailer = require('nodemailer'),
    smtpTransport = require('nodemailer-smtp-transport'),
    // transporter = nodemailer.createTransport(process.env.TROLL_KEY);
    transporter = nodemailer.createTransport(smtpTransport({
      host: 'smtp.mail.yahoo.com',
      port: 465,
      auth: {
        user: process.env.EMAILER_NAME,
        pass: process.env.EMAILER_SECRET
      }
    }))


module.exports = {
  create: function(req, res, next) {
    var mail = new Mail(req.body);
    mail.save(function(err, rData) {
      if (err) {
        res.status(500).send(err);
      } else {
        transporter.sendMail(rData, function(err, rSend) {
          if (err) {
            res.status(500).send(err);
          } else {
            res.status(200).send("message sent");
          }
        });
      }
    });
  }
};
