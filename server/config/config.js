// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
//  Vencimiento del Token
// ============================
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
process.env.CADUCIDAD_TOKEN = '48h';


// ============================
//  SEED de autenticación
// ============================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// ============================
//  Base de datos
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
    //urlDB = 'mongodb+srv://admin:admin@cluster0-az2xq.mongodb.net/cafe?retryWrites=true&w=majority';

} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;


process.env.CLIENT_ID = process.env.CLIENT_ID || '533576536934-c0sqr96qhg52chcocm7u9ed1svfj4p72.apps.googleusercontent.com';