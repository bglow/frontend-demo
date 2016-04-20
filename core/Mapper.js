_ = require('lodash');

var Mapper = function () {

    var self = this;
    var maps = {};

    self.addMapper = function (name, mapper) {
        if(maps[name]) throw "Could not add mapper. Mapper with name " + name + " already exists!";
        maps[name] = mapper;
    };

    self.map = function (data, mapperName) {
        if(!mapperName) throw "Could not map data. No mapper specified.";
        if(!maps[mapperName]) throw "Could not map data. Mapper with name " + name + " does not exist!";
        return maps[mapperName](data);
    };

};

Mapper.prototype = {
    constructor: Mapper
};

module.exports = Mapper;
