
export interface UserRegisterInterface {
    name: string;
    email: string;
    password: string
}

export interface UserLoginInterface {
    email: string;
    password: string
}

export interface UserResponseInterface {
    id: number;
    name: string;
    email: string;
    updatedAt: string,
    createdAt: string
}

export interface UserInterface extends UserResponseInterface {
    password: string;
}

export interface UserTokenInterface {
    accessToken: string;
}