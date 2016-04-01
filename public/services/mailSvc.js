angular.module('myApp')

.service('mailSvc', function($http) {

  /* ---------- mailSvc vars ---------- */
  var email = 'epictrollem@gmail.com';
  var subject = 'You\'ve been trolled!!';
  var temp = {};

  /* ---------- setters ---------- */
  this.setMailOptions = function(to, text, username) {
    temp.from = email;
    temp.to = to;
    temp.subject = subject;
    temp.text = text;
    temp.html = '<h2>Surprise!!</h2><p><strong>' + username + '</strong> has trolled you:</p><p>' + temp.text + '</p>';
  };


  /* ---------- getters ---------- */
  this.getMailOptions = function() { // mail object to send to post
    // console.log(temp);
    return temp;
  };


  /* ---------- constructors ---------- */
  this.sendMail = function(input) {
    return $http.post('/api/messages', input);
  };


});  // end mailSvc
