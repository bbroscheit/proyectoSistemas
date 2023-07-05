const { DataTypes } = require ('sequelize');

module.exports = (sequelize) => {
    sequelize.define('sector', {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        sectorname:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'Nombre de sector no ingresado'
        },
        isdelete:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    })
}