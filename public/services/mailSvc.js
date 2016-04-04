angular.module('myApp')

.service('mailSvc', function($http) {

  /* ---------- mailSvc vars ---------- */
  var email = 'epictrollem@gmail.com';
  var subject = 'You\'ve been trolled!!';
  var temp = {};

  /* ---------- setters/constructors ---------- */
  this.setMailOptions = function(to, text, username) {
    temp.from = email;
    temp.to = to;
    temp.subject = subject;
    temp.text = text;
    // temp.html = '<h1>Surprise!!</h1><p><style="font-size: 25px">' + username + '</style> has trolled you with the message:</p><p>' + temp.text + '</p>';
    temp.html = '<h1>Surprise!! ' + temp.text + '</h1><p>~ from the troll: <strong>' + username + '</strong></p>';
  };


  /* ---------- getters ---------- */
  this.getMailOptions = function() { // mail object to send to post
    // console.log(temp);
    return temp;
  };


  /* ---------- manipulators ---------- */
  this.sendMail = function(input) {
    return $http.post('/api/messages', input);
  };


});  // end mailSvc
