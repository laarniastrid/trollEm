angular.module('myApp')

.controller('navCtrl', function($scope) {

  $scope.aboutModal = false;
  $scope.contactModal = false;

  $scope.modalToggle = function(type) {
    if (type == 'about') {
      $scope.aboutModal = !$scope.aboutModal;
    } else if (type == 'contact') {
      $scope.contactModal = !$scope.contactModal;
    }
  };

  $scope.addPost = function(data) {
    // $.ajax({
    //   url: "http://formspree.io/laarni.astrid@gmail.com",
    //   method: "POST",
    //   data: {
    //     name: data.name,
    //     email: data.email,
    //     phone: data.phone,
    //     message: data.text,
    //   },
    //   dataType: "json"
    // });

    data.name = '';
    data.email = '';
    data.phone = '';
    data.text = '';

    

    $scope.modalToggle('contact');
  };

  // $scope.clearForm = function(formInfo) {
  //   console.log(formInfo);
  //   formInfo = '';
  // };

});  // end navCtrl
