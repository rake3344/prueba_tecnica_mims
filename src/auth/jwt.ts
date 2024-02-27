import { SignJWT, jwtVerify } from "jose"
import { CustomPayload } from "../interfaces/jwt-interface"

const jwtSecret = process.env.JWT_SECRET || "secret"
const secretKey = new TextEncoder().encode(jwtSecret)

export async function createToken(payload: CustomPayload): Promise<string> {
    try {
        const token = await new SignJWT(payload)
            .setProtectedHeader({ alg: "HS256" })
            .setIssuedAt()
            .setExpirationTime("1d")
            .sign(secretKey)
        return token
    } catch (error) {
        throw new Error(`Error creating token: ${error}`)
    }
}

export async function verifyToken(token: string) {
    try {
        if (!token) return null
        const payload = await jwtVerify(token, secretKey, { algorithms: ["HS256"] })
        return payload
    } catch (error) {
        throw new Error(`Error verifying token: ${error}`)
    }
}