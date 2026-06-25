const modeloServicio = require('../models/servicio.model');


exports.listar = async (req, res) => {
  try {
    const servicios = await modeloServicio.find();
    res.json(servicios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.ConsultarID = async (req, res) => {
  try {
    const servicios = await modeloServicio.find({ "nombre": req.params.id });
    res.json(servicios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.registrar = async (req, res) => {
  try {
    let servicioNuevo = {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      duracionMinutos: req.body.duracionMinutos,
      precio: req.body.precio,
      categoria: req.body.categoria,
      activo: req.body.activo,
      imagen: req.body.imagen
    };
    
   
    const servicios = await modeloServicio.insertOne(servicioNuevo);
    res.json(servicios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.actualizar = async (req, res) => {
  try {
    let servicioNuevo = {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      duracionMinutos: req.body.duracionMinutos,
      precio: req.body.precio,
      categoria: req.body.categoria,
      activo: req.body.activo,
      imagen: req.body.imagen
    };

    const servicios = await modeloServicio.updateOne(
      { "nombre": req.params.id },
      { $set: servicioNuevo }
    );
    res.json(servicios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.eliminar = async (req, res) => {
  try {
    const servicios = await modeloServicio.deleteOne({ "nombre": req.params.id });
    res.json(servicios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};