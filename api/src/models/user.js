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
        firstName:{
            type: DataTypes.STRING,
            defaultValue: ' firstName Undefined',
            allowNull: false
        },
        lastName:{
            type: DataTypes.STRING,
            defaultValue: ' LastName Undefined',
            allowNull: false
        },
        isDelete:{
            type: DataTypes.BOOLEAN,
            defaultValue : false
        },
    })
}