import axios from 'axios';

axios.get('https://mystoreapi.com/catalog/categories')
    .then(respuesta =>{
        console.log(respuesta.data);
    })
    .catch(error => {
        console.log('Error en ejecución: ',error);
    });
