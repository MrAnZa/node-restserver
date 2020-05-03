const express = require('express');

const { verificaToken } = require('../middlewares/autenticacion');

let app = express();

let Producto = require('../models/producto');

//Obtener todos los Productos
app.get('/productos', (req, res) => {
        //traer todos los productos
        //populate: usuario categoria
        //paginado
    })
    //Obtener un producto por id
app.get('/productos/:id', (req, res) => {
        //populate: usuario categoria
        //paginado
    })
    //Crear un nuevo producto
app.post('/productos', verificaToken, (req, res) => {
    let body = req.body;
    let producto = new Producto({
        nombre: body.nombre,
        precioUni: body.precioUni,
        descripcion: body.descripcion,
        disponible: body.disponible,
        categoria: body.categoria,
        usuario: req.usuario._id
    });
    producto.save((err, productoDB) => {
        //grabar el usuario
        //grabar una categoria
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!productoDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.status(201).json({
            ok: true,
            producto: productoDB
        })
    })
});
//Actualizar un producto
app.put('/productos/:id', (req, res) => {
    //grabar el usuario
    //grabar una categoria
    let id = req.params.id;
    let body = req.body;
    Producto.findById(id, (err, productoDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!productoDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'el ID no Existe'
                }
            });
        }

        productoDB.nombre = body.nombre;
        productoDB.precioUni = body.precioUni;
        productoDB.categoria = body.categoria;
        productoDB.disponible = body.disponible;
        productoDB.descripcion = body.descripcion;

        productoDB.save((err, productoGuardado) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                producto: productoGuardado
            });
        });
    });

});
//Borrar un producto (Borrado Logico)
app.delete('/productos/:id', (req, res) => {
    //grabar el usuario
    //grabar una categoria
})
module.exports = app;