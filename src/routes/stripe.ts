import { Router } from "express";
import { checkJwt } from "../auth/authMiddleware";
import { purchaseController } from "../controllers/stripe-controller";

const stripeRouter = Router();


/**
 * @swagger
 * /api/purchase:
 *   post:
 *     summary: Buy a book
 *     security:
 *       - bearerAuth: []
 *     tags: [Stripe]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schemas:
 *             $ref: '#/components/schemas/StripeSchema'
 *             required:
 *               - bookId
 *               - quantity
 *           example:
 *             bookId: 1
 *             quantity: 3
 *     responses:
 *       '201':
 *         description: Book purchased successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StripeResponse'
 *       '500':
 *         description: Error purchasing book
 */

stripeRouter.post("/purchase", checkJwt, purchaseController)
stripeRouter.get("/success", (req, res) => {
    res.status(200).json({ message: "Payment successful" });
})
stripeRouter.get("/cancel", (req, res) => {
    res.status(200).json({ message: "Payment cancelled" });
})


export default stripeRouter;