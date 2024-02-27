import { sequelize } from "../db/db"
import { DataTypes } from "sequelize"
import { Loan } from "./Loan"

export const Book = sequelize.define("books", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    publicationYear: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

Book.hasMany(Loan, { foreignKey: "bookId" })
Loan.belongsTo(Book, { foreignKey: "bookId" })