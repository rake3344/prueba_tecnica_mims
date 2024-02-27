import { Router } from "express";
import { checkJwt } from "../auth/authMiddleware";
import { loanBookToUserController, returnBookFromUserController } from "../controllers/loan-controller";


const loanRouter = Router();

/**
 * @swagger
 * /api/loans/{userId}/{bookId}:
 *   post:
 *     summary: Loan a book to a user
 *     tags: [Loan]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         description: ID of the user borrowing the book
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: bookId
 *         description: ID of the book being borrowed
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '201':
 *          description: Book loaned successfully
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/LoanResponse'
 */

/**
 * @swagger
 * /api/loans/{userId}/{bookId}:
 *   put:
 *     summary: Return a book from a user
 *     tags: [Loan]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         description: ID of the user returning the book
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: bookId
 *         description: ID of the book being returned
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
loanRouter.post("/loans/:userId/:bookId", checkJwt, loanBookToUserController);
loanRouter.put("/loans/:userId/:bookId", checkJwt, returnBookFromUserController);

export default loanRouter;