kg.templates.defaultHeaderCellTemplate = function (options) {
    var b = new kg.utils.StringBuilder();
    b.append('<div ng-click="sort" ng-class="{ \'kgSorted\': !noSortVisible }">');
    b.append('  <span>{{displayName}}</span>');
    b.append('  <div class="kgSortButtonDown" ng-show="(allowSort ? (noSortVisible || sortAscVisible) : allowSort)"></div>');
    b.append('  <div class="kgSortButtonUp" ng-show="(allowSort ? (noSortVisible || sortDescVisible) : allowSort)"></div>');
    b.append('</div>');
    if (!options.autogenerateColumns && options.enableColumnResize){
        b.append('<div class="kgHeaderGrip" ng-show="allowResize" ng-mouseDown="gripOnMouseDown()"></div>');
    }
    b.append('<div ng-show="_filterVisible">');
    b.append('  <input type="text" ng-model="column.filter" style="width: 80%" tabindex="1" />');
    b.append('</div>');
    return b.toString();
};