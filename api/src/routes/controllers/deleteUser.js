const { User } = require('../../bd')

const deleteUser = async (id) => {
    try {
        const user = await User.findByPk(id)
        await user.update(
            {isdelete : true},
            { where : { id : id }}
        )
    } catch (e) {
        console.log("error en deleteUser", e.message)
    }
}

module.exports = deleteUser