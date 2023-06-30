//crear rutas para crear , modificar y borrar un usuario
//crear rutas para traernos todos los usuarios y combinar con el sector y con la pc
const userRouter = require ('express').Router();
const getUser = require ('../routes/controllers/getUser');
const postUser = require ('../routes/controllers/postUser');


userRouter.get('/', async (req,res) => {
    try {
        let user = await getUser();
        res.status(200).send(user)
    } catch (e) {
        console.log("error en ruta", e.message)
    }
})

userRouter.post('/users', async (req, res) => {
    const {name, firstName, lastName, pc , sectorName} = req.body
    try {
        let newUser = await postUser(name, firstName, lastName, pc, sectorName)
        newUser? 
            res.status(200).json("sucess"):
            res.status(400).json("failed")

    } catch (e) {
        console.log("error en ruta", e.message)
    }
})
