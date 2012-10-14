﻿﻿kg.templates.generateHeaderTemplate = function (options) {
    var b = new kg.utils.StringBuilder(),
        cols = options.columns,
        showFilter = options.showFilter;
    kg.utils.forEach(cols, function (col, i) {
        if (col.field === SELECTED_PROP) {
            b.append('<div class="kgSelectionCell kgHeaderCell col{0} kgNoSort">', col.index);
            b.append('  <input type="checkbox" ng-checked="toggleSelectAll()"/>');
            b.append('</div>');
        } else if (col.field === 'rowIndex' && showFilter) {
            b.append('<div class="kgHeaderCell col{0} kgNoSort">', col.index);
            b.append('      <div title="Filter Results" class="kgFilterBtn openBtn" ng-hide="filterVisible" ng-click="showFilter_Click()"></div>');
            b.append('      <div title="Close" class="kgFilterBtn closeBtn" ng-show="filterVisible" ng-click="showFilter_Click()"></div>');
            b.append('      <div title="Clear Filters" class="kgFilterBtn clearBtn" ng-show="filterVisible" ng-click="clearFilter_Click()"></div>');
            b.append('</div>');
        } else {
            b.append('<div class="kgHeaderCell col{0}" ng-style="{ width: colWidth }" ng-class="{ \'kgNoSort\': {1} }">{{field}}</div>', col.index, !col.allowSort);
        }
    });
    return b.toString();
};