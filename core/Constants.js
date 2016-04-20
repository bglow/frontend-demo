_ = require('lodash');

var Constants = function () {

    var self = this;
    var constants = {};

    self.set = function (key, value) {
        if(constants[key]) throw "Cannot overwrite constant with key " + key + ". The constant is already defined!";
        constants[key] = value;
    };

    self.get = function (key) {
        return _.cloneDeep(constants[key]);
    };

};

Constants.prototype = {
    constructor: Constants
};

module.exports = Constants;