import { JWTPayload } from "jose";

export interface CustomPayload extends JWTPayload {
    id: number;
    name: string;
    email: string;
}