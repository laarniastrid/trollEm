var Mail = require('../schemas/mailSchema.js'),
    // keys = require('../keys.js'),
    nodemailer = require('nodemailer');
    transporter = nodemailer.createTransport(process.env.TROLL_KEY);


module.exports = {
  create: function(req, res, next) {
    var mail = new Mail(req.body); // should be getting an option with mail options
    mail.save(function(err, rData) {
      if (err) {
        res.status(500).send(err);
      } else {
        transporter.sendMail(rData, function(err, rSend) {
          if (err) {
            res.status(500).send(err);
            // console.log(err);
          } else {
            res.status(200).send("message sent");
            // console.log(rSend);
          }
        });
      }
    });
  }
};
