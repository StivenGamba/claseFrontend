import express from 'express';
 
import Sequelize from 'sequelize';
 
const app = express();
app.use(express.json());
 
const sequelize = new Sequelize('miBaseDeDatos', 'miUsuario', 'miContraseña', {
  host: 'localhost',
  dialect: 'postgres'
});
 
// Definir rutas aquí
app.get('/', (req, res) => res.send('Hola Mundo!'));
 
// Puerto de escucha del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));