import { sequelize } from './pgConfig'
import { Sequelize, Model, DataTypes } from 'sequelize';

export const Violation = sequelize.define("violation", {
    ID: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdDt: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    }}, {
        tableName: "violation"
    }
);
(async () => {
    await sequelize.sync({ force: true });
    console.log("The data migrated succuessfully.")
  })();