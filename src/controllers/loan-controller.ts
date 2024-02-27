import { Response, Request } from "express";
import { LoanInterface } from "../interfaces/loan-interface";
import { loanBookToUserService, returnBookFromUserService } from "../services/loan-service";

export const loanBookToUserController = async (req: Request, res: Response) => {
    try {
        const { userId, bookId} = req.params;
        const loan: LoanInterface = {
            userId: Number(userId),
            bookId: Number(bookId)
        }

        const newLoan = await loanBookToUserService(loan);
        res.status(201).json(newLoan);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}


export const returnBookFromUserController = async (req: Request, res: Response) => {
    try {
        const { userId, bookId} = req.params;
        const loan: LoanInterface = {
            userId: Number(userId),
            bookId: Number(bookId)
        }

        const returnDate = await returnBookFromUserService(loan);
        if (returnDate[0] == 0) {
            return res.status(404).json({ message: "No loan found for this user and book" });
        } else if (returnDate == "This book has already been returned") {
            return res.status(409).json({ message: returnDate });
        }
        res.status(200).json({ message: "Book returned successfully" });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}