const fetch = require('node-fetch');

fetch('https://mystoreapi.com/catalog/categories')
    .then(respuesta => respuesta.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error: ',error));
//api con js