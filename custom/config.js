var Frontend = require('../core/Frontend.js');

Frontend.setConstant('exampleForm', {
    formName: 'exampleForm',
    formLegend: 'Example Form',
    fields: [
        {
            name: 'id',
            label: 'id',
            value: null,
            placeholder: 'enter a text value',
            type: 'text',
            "class": 'hidden'
        },
        {
            name: 'field1',
            label: 'Field 1',
            value: null,
            placeholder: 'enter a text value',
            type: 'text'
        },
        {
            name: 'field2',
            label: 'Field 2',
            value: '',
            placeholder: 'enter a numerical value',
            type: 'number',
            "class": 'numeric'
        }
    ]
});