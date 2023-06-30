const { DataTypes } = require ('sequelize');

module.exports = (sequelize) => {
    sequelize.define('sector', {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        sectorName:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'Nombre de sector no ingresado'
        },
        isDelete:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    })
}