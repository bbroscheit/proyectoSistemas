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
        vSO:{
            type: DataTypes.STRING,
            defaultValue: " Sistem Undefined ",
            allowNull: false,
        },
        ramMemory:{
            type: DataTypes.STRING,
            defaultValue: " Memory undefined ",
            allowNull: false,
        },
        hardDiskMemory:{
            type: DataTypes.STRING,
            defaultValue: " Hard Disk Memory undefined ",
            allowNull:false,
        },
        hardDiskType:{
            type: DataTypes.STRING,
            defaultValue: " Disk Type undefined ",
            allowNull: false,
        },
        processor:{
            type: DataTypes.STRING,
            defaultValue: " Processor undefined ",
            allowNull: false,
        },
        vOffice:{
            type: DataTypes.STRING,
            defaultValue: " Office Version undefined ",
            allowNull: false,
        },
        vAntivirus:{
            type: DataTypes.STRING,
            defaultValue: " Antivirus version undefined ",
            allowNull: false,
        },
        lastCheck:{
            type: DataTypes.DATEONLY,
            defaultValue: " 01-01-2000 ",
            allowNull: false,
        },
        isDelete:{
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    })
}