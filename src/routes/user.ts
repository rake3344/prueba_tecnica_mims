import { Router } from "express";
import { loginUserController, registerUserController } from "../controllers/user-controller";

const userRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication operations
 * 
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterSchema'
 *           example:
 *             name: User
 *             email: user@example.com
 *             password: string
 *     responses:
 *       '201':
 *         description: Successfully registered
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '500':
 *         description: Error registering user
 * 
 * /api/auth/login:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserLogin'
 *             required:
 *               - email
 *               - password
 *           example:
 *             email: user@example.com
 *             password: string
 *     responses:
 *       '200':
 *         description: Successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *       '401':
 *         description: Incorrect password
 *       '404':
 *         description: User not found
 */
userRouter.post("/register", registerUserController);
userRouter.post("/login", loginUserController);


export default userRouter;