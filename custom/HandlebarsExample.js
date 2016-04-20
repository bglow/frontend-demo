var Handlebars = require('Handlebars');
var Frontend = require('../core/Frontend.js');

var exampleFormRenderer = Handlebars.compile($('#custom-form').html());

var renderedFormHtml = exampleFormRenderer(Frontend.getConstant('exampleForm'));

$(".app").append(renderedFormHtml);

var exampleListRenderer = Handlebars.compile($('#custom-list').html());

Frontend.getResource('example.json','exampleMapper')
.then(function (names) {
    var renderedListHtml = exampleListRenderer({items: names});
    $(".app").append(renderedListHtml);
});