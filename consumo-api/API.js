"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
axios_1.default.get('https://mystoreapi.com/catalog/categories')
    .then(function (respuesta) {
    console.log(respuesta.data);
})
    .catch(function (error) {
    console.log('Error en ejecución: ', error);
});
