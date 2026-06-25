
const express = require('express');
const mongoose = require('mongoose');
const clienteController = require('./controllers/cliente.controller');
// 1. IMPORTA el controlador de servicios aquí abajo:
const servicioController = require('./controllers/servicio.controller'); 

const app = express();
app.set('view engine', 'ejs')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

function conectar(){
    const URI = 'mongodb+srv://Diez:uVCpt0PuIh7obozi@diez3194107.exunevs.mongodb.net/prueba107';
    mongoose.connect(URI)
        .then(() => console.log(" Conectado a MongoDB Atlas con éxito"))
        .catch(err => console.error(" Error al conectar a MongoDB:", err));
}

conectar();


app.get('/clientes', clienteController.listar);
app.get('/clientes/:id', clienteController.ConsultarID);
app.post('/clientes', clienteController.registrar);
app.put('/clientes/:id', clienteController.actualizar);
app.delete('/clientes/:id', clienteController.eliminar);


app.get('/servicios', servicioController.listar);
app.get('/servicios/:id', servicioController.ConsultarID);
app.post('/servicios', servicioController.registrar);
app.put('/servicios/:id', servicioController.actualizar);
app.delete('/servicios/:id', servicioController.eliminar);

app.listen(9800, () => {
    console.log(" Servidor corriendo en http://localhost:9800");


});

