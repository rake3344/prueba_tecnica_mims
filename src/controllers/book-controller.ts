import { Request, Response } from "express";
import { BookInterface } from "../interfaces/book-interface";
import { createBookService, getBookByIdService } from "../services/book-service";


export const createBookController = async (req: Request, res: Response) => {
    try {
        const book: BookInterface = req.body;

        if (!book.title || !book.author || !book.publicationYear) {
            return res.status(400).json({ message: "Missing required fields: title, author, publicationYear" });
        }

        const newBook = await createBookService(book);
        if (newBook == "Error creating book: Book already exists") {
            return res.status(409).json({ message: newBook });
        }

        res.status(201).json(newBook);
    } catch(error: any) {
        res.status(500).json({ message: error.message })
    }
}

export const getBookByIdController = async (req: Request, res: Response) => {
    try {
        const { bookId } = req.params;
        const book = await getBookByIdService(Number(bookId));
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.status(200).json(book);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}