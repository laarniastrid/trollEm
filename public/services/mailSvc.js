angular.module('myApp')

.service('mailSvc', function($http) {

  /* ---------- mailSvc vars ---------- */
  this.from = 'epictrollem@gmail.com';
  this.subject = 'You\'ve been trolled!!';


  /* ---------- setters ---------- */
  this.setMailOptions = function(to, text, username) {
    this.to = to;
    this.text = text;
    this.html = '';
  };


  /* ---------- getters ---------- */
  this.getMailOptions = function() { // mail object to send to post
    return {
      from: this.from,
      to: this.to,
      subject: this.subject,
      text: this.text,
      html: this.html
    };
  };


  /* ---------- constructors ---------- */
  this.sendMail = function(input) {
    return $http.post('/api/messages', input);
  };


});  // end mailSvc
