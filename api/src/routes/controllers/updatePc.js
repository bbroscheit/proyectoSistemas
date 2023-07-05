const { Pc } = require( '../../bd' )
const { Sector } = require ( '../../bd' )
const { User } = require ( '../../bd' )

const updatePc = async ( id, name, vso, rammemory, harddiskmemory, harddisktype, processor, voffice, vantivirus, lastcheck, sectorname, username ) => {
    try {
        
    } catch (e) {
        console.log( "error en controller updatePc" , e.message )
    }
}

module.exports = updatePc