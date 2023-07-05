const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('pc', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey: true,
            allowNull:false,
        },
        name:{
            type: DataTypes.STRING,
            defaultValue: " Name undefined ",
            allowNull:false,
        },
        vso:{
            type: DataTypes.STRING,
            defaultValue: " Sistem Undefined ",
            allowNull: false,
        },
        rammemory:{
            type: DataTypes.STRING,
            defaultValue: " Memory undefined ",
            allowNull: false,
        },
        harddiskmemory:{
            type: DataTypes.STRING,
            defaultValue: " Hard Disk Memory undefined ",
            allowNull:false,
        },
        harddisktype:{
            type: DataTypes.STRING,
            defaultValue: " Disk Type undefined ",
            allowNull: false,
        },
        processor:{
            type: DataTypes.STRING,
            defaultValue: " Processor undefined ",
            allowNull: false,
        },
        voffice:{
            type: DataTypes.STRING,
            defaultValue: " Office Version undefined ",
            allowNull: false,
        },
        vantivirus:{
            type: DataTypes.STRING,
            defaultValue: " Antivirus version undefined ",
            allowNull: false,
        },
        lastcheck:{
            type: DataTypes.DATEONLY,
            defaultValue: " 01-01-2000 ",
            allowNull: false,
        },
        isdelete:{
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    })
}