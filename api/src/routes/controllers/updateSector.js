const { Sector } = require('../../bd');

const updateSector = async ( id, name ) => {
    
    try {
        const sector = await Sector.findByPk(id)
        await sector.update(
            { sectorName:name},
            { where:{ id:id }})

        return sector
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = updateSector