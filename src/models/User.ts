import { sequelize } from "../db/db"
import { DataTypes } from "sequelize"
import { Loan } from "./Loan"

export const User = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

User.hasMany(Loan, { foreignKey: "userId" })
Loan.belongsTo(User, { foreignKey: "userId" })