import { Directive } from '@angular/core';

@Directive({
  selector: '[appPreloader]'
})
export class PreloaderDirective {

  constructor() {

    return {
      restrict: 'A',
      link: function ($scope, $elem, attrs) {

        $scope.loading = function () {
          return this.http.pendingRequests.length;
        };

        $scope.$watch($scope.loading, function (ajax) {
          if (ajax) {
            attrs.$set('style', 'display:block');
          } else {
            attrs.$set('style', 'display:none');
          }
          // I use "attrs.$set('style')" for no additional library dependency and no ngShow ... just <div preloader></div>
        });

      }
    };


  }
}
