const { User } = require('../../bd')
const { Sector } = require('../../bd')
const { Pc } = require('../../bd')

const getUsers = async () => {
    try {
        let users = await User.findAll({
           where: { isdelete : false}
        })
        return users
    } catch (e) {
        console.log(e.message)
    }

}

module.exports = getUsers