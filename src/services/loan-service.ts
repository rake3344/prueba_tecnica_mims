import { LoanInterface } from "../interfaces/loan-interface";
import { Loan } from "../models/Loan";
import { Op } from "sequelize";


export const loanBookToUserService = async (loan: LoanInterface) => {
    try {

        const newLoan = await Loan.create({
            userId: loan.userId,
            bookId: loan.bookId,
            returnDate: null
        })

        return newLoan
    } catch (error: any) {
        throw new Error(`Error loaning book: ${error.message}`);
    }
}

export const returnBookFromUserService = async (loan: LoanInterface) => {
    try {

        const loanExists = await Loan.findOne({
            where: {
                userId: loan.userId,
                bookId: loan.bookId,
                returnDate: {
                    [Op.not]: null
                }
            }
        })

        if (loanExists) {
            return "This book has already been returned"
        }

        const updateReturnDate = await Loan.update({
            returnDate: new Date().toISOString()
        }, {
            where: {
                userId: loan.userId,
                bookId: loan.bookId,
                returnDate: null
            }
        })

        return updateReturnDate
    } catch (error: any) {
        throw new Error(`Error returning book: ${error.message}`);
    }
}