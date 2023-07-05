const { Pc } = require('../../bd')
const { Sector } = require ('../../bd')
const { User } = require ('../../bd')

const getPc = async () => {
    try{
        const allPc = await Pc.findAll({
            where:{isdelete : false}
        });
        return allPc
    }catch(e){
        console.log("error en controller getPc", getPc)
    }
} 

module.exports = getPc