(function() {
  'use strict';

  angular
    .module('testBitgray')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
