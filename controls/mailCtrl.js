var Mail = require('../schemas/mailSchema.js'),
    keys = require('../keys.js'),
    nodemailer = require('nodemailer');
    transporter = nodemailer.createTransport(keys.trollKey);


module.exports = {

  create: function(req, res, next) {
    var mail = new Mail(req.body); // should be getting an option with mail options
    mail.save(function(err, rData) {
      // return err ? res.status(500).send(err) : res.status(200).send(r);
      if (err) {
        res.status(500).send(err);
      } else {
        transporter.sendMail(rData, function(err, rSend) {
          if (err) {
            res.status(500).send(err);
            // console.log(err);
          } else {
            res.status(200).send(rData);
            // console.log(rSend);
          }
        });
      }
    });
  }
};
