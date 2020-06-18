const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload({ useTempFiles: true }));
//app.use(fileUpload());

app.put('/upload', function(req, res) {
    if (!req.files) {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'no se ha seleccionado ningun archivo'
            }
        });
    }
    let archivo = req.files.archivo;
    archivo.mv('uploads/filename.jpg', (err) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            message: 'imagen subida correctamente'
        });
    })
});
module.exports = app;