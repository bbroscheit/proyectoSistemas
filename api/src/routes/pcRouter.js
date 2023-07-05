//crear rutas para crear , modificar y borrar una pc
//crear rutas para traernos todas las pc
const pcRouter = require ('express').Router();
const getPc = require ( '../routes/controllers/getPc' );
const postPc = require ( '../routes/controllers/postPc' )

pcRouter.get ('/pc', async ( req, res ) => {
    try {
        let getAllPc = await getPc();
        getAllPc ? res.status( 200 ).json( getAllPc ) : res.status( 400 ).json( "failed" )
    } catch ( e ) {
        console.log( "error en ruta getPc", e.message )
    }
})

pcRouter.post ('/pc', async ( req, res ) => {
    const { name, vSo, ramMemory, hardDiskMemory, hardDiskType, processor, vOffice, vAntivirus, lastCheck, sectorName, username } = req.body
    try {
        let newPc = await postPc( name, vSo, ramMemory, hardDiskMemory, hardDiskType, processor, vOffice, vAntivirus, lastCheck, sectorName, username)
        newPc ? res.status(200).send( "sucess" ) : res.status( 404 ).json( "failure" )
    } catch (e) {
        console.log( "error en ruta postPc",e.messages )
    }
})


module.exports = pcRouter



