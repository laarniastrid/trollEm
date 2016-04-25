var Mail = require('../models/mailSchema.js'),
    nodemailer = require('nodemailer');
    transporter = nodemailer.createTransport(process.env.TROLL_KEY);


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
