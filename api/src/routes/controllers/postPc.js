const { Pc } = require ('../../bd')
const { Sector } = require ( '../../bd' )
const { User } = require ( '../../bd' )

const postPc = async ( name, vso, rammemory, harddiskmemory, harddisktype, processor, voffice, vantivirus, lastcheck, sectorname, username ) => {
    try {
        let newPc = await Pc.create({
            name:name,
            vso:vso,
            rammemory:rammemory,
            harddiskmemory:harddiskmemory,
            harddisktype:harddisktype,
            processor:processor,
            voffice:voffice,
            vantivirus:vantivirus,
            lastcheck:lastcheck
        })

        // if(sectorname){
        //     let setSector = await Sector.findOne({
        //         where: { sectorname : sectorname }
        //     })
        //      newPc.addSector ( setSector) 
        // }

        // if(username){
        //     let setUser = await User.findOne({
        //         where: { username : username }
        //     })
        //      newPc.addSector ( setUser) 
        // }
        
        return newPc

    } catch (e) {
        console.log( "Error en controller postPc", e.message )
    }
}

module.exports = postPc