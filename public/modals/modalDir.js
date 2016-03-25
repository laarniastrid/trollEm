angular.module('myApp')

.directive('bnModals', function($rootScope, modals) {

  return(link);

  function link(scope, ele, attr) {
    scope.subview = null;
    ele.on('click', function handleClickEvent(event) {
      if (ele[0] !== event.target) {
        return;
      }
      scope.$apply(modals.reject);
    });

    $rootScope.$on('modals.open', function handleModalOpenEvent(event, modalType) {
      scope.subview = modalType;
    });

    $rootScope.$on('mondals.close', function handModalCloseEvent(event) {
      scope.subview = null;
    });

  }

});  // end bnModals
