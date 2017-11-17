angular.module('isolateForm', []).directive('isolateForm', [function () {
  return {
    restrict: 'A',
    require: '?form',
    link: function (scope, elm, attrs, ctrl) {
      if (!ctrl) {
        return;
      }

      // Get the parent of the form
      var parent = elm.parent().controller('form');
      // Remove parent link to the controller
      parent.$removeControl(ctrl);
    }
  };
}]);
