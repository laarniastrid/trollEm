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


});  // end navCtrl

/*
<div class="modal" ng-if="showModal">
  <div class="modal-overlay" ng-click="modalToggle()"></div>
  <div class="modal-content">
    <i class="fa fa-times" ng-click="modalToggle()"></i>
    <div class="modal-content-wrapper">
      <!-- <div>modal heading</div> -->
      <!-- <div>modal stuff</div> -->
      <h2>Send new message!<h2>
      <form ng-submit="sendMessage(action) && modalToggle()" class="modal-form">
        <textarea placeholder="message" ng-model="action.message" required></textarea>
        <!-- <input type="date" value="new Data()" /> -->
        <button type="submit">Send Message</button>
      </form>
    </div>
  </div>
</div>
*/
