//crear rutas para crear , modificar y borrar un usuario
//crear rutas para traernos todos los usuarios y combinar con el sector y con la pc
const userRouter = require ('express').Router();
const getUser = require ('../routes/controllers/getUser.js');
const postUser = require ( '../routes/controllers/postUsers.js' );
const updateUser = require ('../routes/controllers/updateUser.js');
const deleteUser = require ('../routes/controllers/deleteUser.js');


userRouter.get('/users', async (req,res) => {
    try {
        let user = await getUser();
        res.status(200).send(user)
    } catch (e) {
        console.log("error en ruta", e.message)
    }
})

userRouter.post('/users', async (req, res) => {
    const {username, firstname, lastname, pc , sectorName} = req.body
    try {
        let newUser = await postUser(username, firstname, lastname, pc, sectorName)
        newUser? 
            res.status(200).json("sucess"):
            res.status(400).json("failed")

    } catch (e) {
        console.log("error en ruta postUser", e.message)
    }
})

userRouter.put('/users', async ( req, res ) => {
    const { id } = req.query
    const { username, firstname, lastname, sectorname, pc } = req.body

    try {
        let setUser = await updateUser( id, username, firstname, lastname, sectorname, pc )
        setUser ? res.status( 200 ).json( "sucess" ) : res.status( 400 ).json( "failed" )  
    } catch (e) {
        console.log( "error en ruta updateUser" , e.message )
    }
})

userRouter.delete('/users', async ( req, res ) => {
    const { id } = req.query

    try {
        let deletedUser = await deleteUser( id )
        res.status( 200 ).json( deletedUser ) 
    } catch (e) {
        console.log( "error en ruta deleteUser", e.message)
    }
})

module.exports = userRouter