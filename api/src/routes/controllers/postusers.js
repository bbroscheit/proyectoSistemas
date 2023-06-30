const { User } = require('../../bd')
const { Sector } = require('../../bd')
const { Pc } = require('../../bd')

const postUsers = async( name, firstName, lastName, pc , sectorName) => {
    try {
        let newUser = await User.create({
            name : name,
            firstName: firstName,
            lastName: lastName
        })

        let setSector = await Sector.findAll({
            sectorName : sectorName
        })

        let setPc = await Pc.findAll({
            name:pc
        })

        newUser.addSector(setSector)
        newUser.addPc(setPc)

        return newUser

    } catch (e) {   
        console.log(e.message)
    }
}

module.exports = postUsers