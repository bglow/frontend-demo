var Frontend = require ('../core/Frontend.js');

Frontend.addMapper('exampleMapper', function (items) {
    return _.map(items, function (item) {
        return item.name;
    });
});