$ = require('jquery');

var Frontend = function () {

    var self = this;
    var mapper = new (require('./Mapper.js'));
    var constants = new (require('./Constants.js'));

    self.getResource = function (name, mapperName) {
        var deferred = $.Deferred();
        $.ajax({
            url:    'resources/' + name,
            method: 'GET'
        }).then(function (result) {
            if (mapperName) {
                deferred.resolve(mapper.map(result, mapperName));
            } else {
                deferred.resolve(result);
            }
        });
        return deferred;
    };

    self.setConstant = function (key, value) {
        constants.set(key, value);
    };

    self.getConstant = function (key) {
        return constants.get(key);
    };

    self.addMapper = function (name, fn) {
        mapper.addMapper(name, fn);
    };

};

Frontend.prototype = {
    constructor: Frontend,
};

module.exports = new Frontend();
