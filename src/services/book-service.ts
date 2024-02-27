import { BookInterface } from "../interfaces/book-interface";
import { Book } from "../models/Book";

export const createBookService= async (book: BookInterface) => {
    try {

        const existingBook = await Book.findOne({
            where: {
                title: book.title,
                author: book.author,
                publicationYear: book.publicationYear
            }
        })

        if(existingBook) {
            return "Error creating book: Book already exists"
        }

        const newBook = await Book.create({
            title: book.title,
            author: book.author,
            publicationYear: book.publicationYear
        });

        return newBook
    } catch (error: any) {
        throw new Error(`Error creating book: ${error.message}`);
    }
}

export const getBookByIdService = async (id:number) => {
    try {
        const book = await Book.findByPk(id)
        return book
    } catch (error: any) {
        throw new Error(`Error getting book: ${error.message}`);
    }
}