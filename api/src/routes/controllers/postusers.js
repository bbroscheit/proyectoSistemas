const { User } = require('../../bd')
const { Sector } = require('../../bd')
const { Pc } = require('../../bd')

const postUsers = async( username, firstname, lastname, pc , sectorname) => {
    try {
        let newUser = await User.create({
            username : username,
            firstname: firstname,
            lastname: lastname
        })

        if(sectorname){
            let setSector = await Sector.findAll({
            sectorname : sectorname
        })
            newUser.addSector(setSector)
        }
        
        if(pc){
        let setPc = await Pc.findAll({
            name:pc
        })
        newUser.addPc(setPc)
        }
       

        return newUser

    } catch (e) {   
        console.log("error en postUsers",e.message)
    }
}

module.exports = postUsers