const { Sector } = require( '../../bd');

const deleteSector = async (id) =>{
    try {
        const sector = await Sector.findByPk(id)
        await sector.update(
            { isdelete:true},
            { where:{ id:id }})

        return sector
    } catch (e) {
        console.log(e.message)
    }
   
}
 

module.exports = deleteSector