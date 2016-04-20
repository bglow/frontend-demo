Frontend Demo
=============

This is a simple app for testing front end javascript. You can serve static json files, and define mapping functions to simulate how
to handle data coming from the server should be transformed to the frontend model layer.

__Install__

```
cd bin 
./install
```

__Build__

```
cd bin
./build
```

__Server__

```
cd bin
./serve
```

Then open your browser to localhost:8080/custom.html

## How to use for testing customizations

__Css__

Css is compiled using the node sass preprocessor.
The current custom.html loads the distribution custom.css. While running the server you can modify the sass partials under custom/css and then import them into custom/main.scss, then rebuild and your new styles will be available on custom.html.

__js__

The current custom.html loads the distribution js and anything else loaded in custom/main.js. This gives you the global object `Frontend`. Frontend has a method, `getResource(resourceName,[mapper])`, returning a promise which can be used to simulate a json api. For example
  
```
Frontend.getResource('example.json', 'exampleMapper')
.then(function (result) {
    console.log(result); 
});
```

The example will retrieve the file 'example.json' from the resources directory, run the result through the 'exampleMapper' (defined in custom/maps.js), and then log the mapped result. The mapper function can be set with `Frontend.addMapper(mapperName, mapperFn)`. For example

```
Frontend.addMapper('exampleMapper', function (items) {
    return _.map(items, function (item) {
        return item.name;
    });
});
```

You can also use Frontend to store constants. This is useful for configuration. For example I might store the static configuration for a renderable form as a constant

```
Frontend.setConstant('exampleForm', {
    formName: 'exampleForm',
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
```



