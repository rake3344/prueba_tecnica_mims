import "dotenv/config";
import { Request, Response } from "express";
import Stripe from "stripe";
import { getBookByIdService } from "../services/book-service";
import { BookResponseInterface } from "../interfaces/book-interface";

const STRIPE_KEY = process.env.STRIPE_KEY || "";

const stripe = new Stripe(STRIPE_KEY)

export const purchaseController = async (req: Request, res: Response) => {
    try {
        const { bookId, quantity } = req.body;

        const book = await getBookByIdService(Number(bookId));
        if (!book) return res.status(404).json({ message: "Book not found" });

        const bookData = book.toJSON() as BookResponseInterface;

        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        product_data: {
                            name: bookData.title,
                            description: bookData.author,
                        },
                        currency: "usd",
                        unit_amount: 2000
                    },
                    quantity: Number(quantity)
                }
            ],
            mode: "payment",
            success_url: "http://localhost:3000/api/success",
            cancel_url: "http://localhost:3000/api/cancel"
        })

        res.status(200).json({"payment_url": session.url});
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}