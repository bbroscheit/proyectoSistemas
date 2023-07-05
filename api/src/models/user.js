const { DataTypes } = require ('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        username:{
            type: DataTypes.STRING,
            defaultValue: ' Name Undefined',
            allowNull: false
        }, 
        firstname:{
            type: DataTypes.STRING,
            defaultValue: ' firstName Undefined',
            allowNull: false
        },
        lastname:{
            type: DataTypes.STRING,
            defaultValue: ' LastName Undefined',
            allowNull: false
        },
        isdelete:{
            type: DataTypes.BOOLEAN,
            defaultValue : false
        },
    })
}