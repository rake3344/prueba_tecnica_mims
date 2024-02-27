import { createToken } from "../auth/jwt";
import { comparePassword, hashPassword } from "../auth/passwordUtils";
import {
  UserInterface,
  UserLoginInterface,
  UserRegisterInterface,
  UserTokenInterface,
} from "../interfaces/user-interface";
import { User } from "../models/User";
import { UniqueConstraintError, Model } from "sequelize";

export async function registerUserService(user: UserRegisterInterface) {
  try {
    const hashPass: string = await hashPassword(user.password);
    const newUser = await User.create({
      name: user.name,
      email: user.email,
      password: hashPass,
    });

    const userRes = newUser.get({ plain: true });
    delete userRes.password;

    return userRes;
  } catch (error: any) {
    if (error instanceof UniqueConstraintError) {
      throw new Error(`Error registering user: The email is already in use`);
    } else {
      throw new Error(`Error registering user: ${error.message}`);
    }
  }
}

export async function loginUserService(userLogin: UserLoginInterface): Promise<UserTokenInterface | string>  {
    try {
      const user: Model<UserInterface> | null = await User.findOne({
        where: { email: userLogin.email },
      });
  
      if (!user) {
        return "Error logging in: User not found";
      }
  
      const userPass: any = user.get("password");
  
      const isMatch: boolean = await comparePassword(userLogin.password, userPass);
  
      if (!isMatch) {
        return "Error logging in: Incorrect password";
      }
  
      const payload = {
        id: user.get("id") as number,
        name: user.get("name") as string,
        email: user.get("email") as string,
      };
  
      const jwtToken: string = await createToken(payload);
      const loginRes: UserTokenInterface = {
        accessToken: jwtToken,
      };
  
      return loginRes;
  
    } catch (error: any) {
      if (error instanceof UniqueConstraintError) {
        throw new Error(`Error logging in: ${error.message}`);
      } else {
        throw new Error(`Error logging in: ${error.message}`);
      }
    }
  }
