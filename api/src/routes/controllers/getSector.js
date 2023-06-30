const { Sector } = require('../../bd');

const getSector = async() => {
    try {
        let sectores = await Sector.findAll({
            where: { isDelete: false},
    });

        return sectores;
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = getSector;