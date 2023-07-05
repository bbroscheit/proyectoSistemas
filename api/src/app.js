const express = require( 'express' );
const cookieParser = require ( 'cookie-parser' );
const bodyParser = require ( 'body-parser' );
const morgan = require ( 'morgan' );
let cors = require ( 'cors' );
require( './bd.js' );

//cargamos las rutas
const sectorRouter = require('./routes/sectorRouter.js');
const userRouter = require('./routes/userRouter.js');
const pcRouter = require('./routes/pcRouter.js');

const server = express();
server.name = 'API';

server.use ( bodyParser.urlencoded( {extended:true, limit: '50mb'} ) );
server.use ( bodyParser.json( {limit: '50mb'} ));
server.use ( cookieParser() );
server.use ( morgan( 'dev' ) );
server.use ( ( req, res, next ) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

server.use ( express.json() );
server.use ( cors() );

// llamamos a los diferentes Routers
server.use ( '/', sectorRouter )
server.use ( '/', userRouter )
server.use ( '/', pcRouter );

server.use ( ( err, req, res, next ) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.log( err );
    res.status( status ).send( message );
})

module.exports = server;
