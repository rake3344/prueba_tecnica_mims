import { sequelize } from "../db/db"
import { DataTypes } from "sequelize"

export const Loan = sequelize.define("loans", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bookId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    loanDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    returnDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
})