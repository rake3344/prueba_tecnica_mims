import { Request, Response } from "express"
import { UserLoginInterface, UserRegisterInterface } from "../interfaces/user-interface";
import { loginUserService, registerUserService } from "../services/user-service";

export const registerUserController = async (req: Request, res: Response) => {
    try {
        const user: UserRegisterInterface = req.body;
        const newUser = await registerUserService(user);
        res.status(201).json(newUser);
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}

export const loginUserController = async (req: Request, res: Response) => {
    try {
        const user: UserLoginInterface = req.body;

        const userAccess = await loginUserService(user);

        if (userAccess == "Error logging in: User not found") {
            return res.status(404).json({ message: userAccess });
        } else if (userAccess == "Error logging in: Incorrect password") {
            return res.status(401).json({ message: userAccess });
        }

        res.status(200).json(userAccess);
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}