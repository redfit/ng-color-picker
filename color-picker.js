angular.module('ngColorPicker', [])
.directive('ngColorPicker', function() {
    var defaultColors =  [
        '#e53935',
        '#d81b60',
        '#8e24aa',
        '#5e35b1',
        '#3949ab',
        '#1e88e5',
        '#039be5',
        '#00acc1',
        '#00897b',
        '#7cb342',
        '#c0ca33',
        '#fdd835',
        '#ffb300',
        '#fb8c00',
        '#f4511e',
        '#6d4c41',
        '#757575',
        '#546e7a'
    ];
    return {
        scope: {
            selected: '=',
            customizedColors: '=colors'
        },
        restrict: 'AE',
        template: '<ul><li ng-repeat="color in colors" ng-class="{selected: (color===selected)}" ng-click="pick(color)" ng-style="{\'background-color\':color};"></li></ul>',
        link: function (scope, element, attr) {
            scope.colors = scope.customizedColors || defaultColors;
            scope.selected = scope.selected || scope.colors[0];

            scope.pick = function (color) {
                scope.selected = color;
            };

        }
    };

});
