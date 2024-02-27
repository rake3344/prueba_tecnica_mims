import { Router } from "express";
import { createBookController, getBookByIdController } from "../controllers/book-controller";
import { checkJwt } from "../auth/authMiddleware";

const bookRouter = Router();

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Create a new book
 *     security:
 *       - bearerAuth: []
 *     tags: [Book]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schemas:
 *             $ref: '#/components/schemas/Book'
 *             required:
 *               - title
 *               - author
 *               - publicationYear
 *           example:
 *             title: Book Title
 *             author: john doe
 *             publicationYear: 2010
 *     responses:
 *       '201':
 *         description: Book created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BooksResponse'
 *       '500':
 *         description: Error creating book
 */
/**
 * @swagger
 * /api/books/{bookId}:
 *   get:
 *     summary: Get a book by ID
 *     tags: [Book]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: bookId
 *         description: ID of the book to return
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '201':
 *          description: Book returned successfully
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/LoanResponse'
 */
bookRouter.post("/books", checkJwt, createBookController)
bookRouter.get("/books/:bookId", checkJwt, getBookByIdController)


export default bookRouter;