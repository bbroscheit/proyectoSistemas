//crear rutas para crear , modificar y borrar un sector
//crear rutas para traernos todos los sectores , traer los usuario por sector, traer las pc por sector
const sectorRouter = require ('express').Router();
const getSector = require ('../routes/controllers/getSector');
const postSector = require ('../routes/controllers/postSector');
const updateSector = require ('../routes/controllers/updateSector');
const deleteSector = require ('../routes/controllers/deleteSector');

sectorRouter.get('/', async (req, res) => {
    try {
        let sector = await getSector();
        res.status(200).send(sector)
    } catch (e) {
        console.log(e)
    }
})

sectorRouter.post('/', async ( req, res) => {
    const { sectorName, isDelete = false } = req.body;
    
    try {
        let newSector = await postSector(sectorName, isDelete);
        
        newSector? 
            res.status(200).json("success"):
            res.status(400).json("error")
    } catch (e) {
        console.log(e)
    }
})

sectorRouter.put('/', async ( req, res) => {
    const { id } = req.query;
    const { name } = req.body;
    
    try {
        let setSector = await updateSector( id, name);
        setSector?
            res.status(200).json("success"):
            res.status(400).json("error");
    } catch (e) {
        console.log(e)
    }
})

sectorRouter.delete('/', async ( req, res) => {
    const { id } = req.query;
    
    try {
        let sector = await deleteSector( id );
        res.status(200).send(sector);
    } catch (e) {
        console.log(e)
    }
})


module.exports = sectorRouter