angular.module('myApp')

.service('modals', function($rootScope, $q) {

  var modal = {
    deferred: null,
    params: null
  };

  return({
    open: open,
    params: params,
    proceedTo: proceedTo,
    reject: reject,
    resolve: resolve
  });

  /* public methods */
  function open(type, params, pipResponse) {
    var previousDeferred = modal.deferred;

    // setup the new modal instance properties
    modal.deferred = $q.defer();
    modal.params = params;

    // pipe new window
    if (previousDeferred && pipResponse) {
      modal.deferred.promise
      .then(previousDeferred.resolve, previousDeferred.reject);
    } else if (previousDeferred) {  // not going to pipe. so immediatly reject current window
      previousDeferred.reject();
    }

    $rootScope.$emit('modals.open', type);

    return(modal.deferred.promise);
  }

  function params() {
    return(modal.params || {});
  }

  function proceedTo(type, params) {
    return(open(type,params, true));
  }

  function reject(reason) {
    if (!modal.deferred) {
      return;
    }

    modal.deferred.reject(reason);
    modal.deferred = modal.params = null;

    $rootScope.$emit('modals.close');
  }

});  // end modals
