import { hash, compare } from "bcrypt"


export const hashPassword = async (password: string): Promise<string> => {
    try {
        const hashedPass = await hash(password, 10)
        return hashedPass
    } catch (error: any) {
        throw new Error(`Error hashing password: ${error.message}`)
    }
}

export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    try {
        const isMatch = await compare(password, hashedPassword)
        return isMatch
    } catch (error: any) {
        throw new Error(`Error comparing password: ${error.message}`)
    }
}