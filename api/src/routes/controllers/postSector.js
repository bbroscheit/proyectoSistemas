const { Sector } = require('../../bd');

const postSector = async (name, isDelete) => {
    
    try {
        let newSector = await Sector.create({
            sectorName: name,
            isDelete: isDelete
        })

        return newSector
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = postSector;