const { Sector } = require('../../bd');

const postSector = async (name, isdelete) => {
    
    try {
        let newSector = await Sector.create({
            sectorname: name,
            isdelete: isdelete
        })

        return newSector
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = postSector;