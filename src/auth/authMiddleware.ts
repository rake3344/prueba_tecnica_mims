import { Request, Response, NextFunction } from 'express';
import { verifyToken } from './jwt';

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token: string | undefined = req.headers.authorization?.split(" ")[1];
        if(!token) return res.status(401).json({ message: "Unauthorized: No token provided" });
        const jwt = verifyToken(token || "");

        if (jwt) {
            req.body.user = jwt;
            next();
        } else {
            res.status(401).json({ message: "Unauthorized: Token is invalid or expired" });
        }
    } catch (error: any) {
        res.status(401).json({ message: `Unauthorized: ${error.message || "Invalid token"}` });
    }
}