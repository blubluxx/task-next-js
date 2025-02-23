import jwt, { SignOptions } from "jsonwebtoken";
import axios from "axios";

import { IFormInput } from "@/components/register/register-form";
import { SERVER_URL } from "@/services/server";

const registerUser = async (data: IFormInput) => {
  try {
    const response = await axios.post(`${SERVER_URL}/auth/register`, data);
    const authId = response.data.auth_id;
    if (!authId) {
      throw new Error("Неуспешна регистрация.");
    }
    return authId;
  } catch (error: any) {
    throw new Error(error);
  }
};

const signToken = (
  payload: object,
  secret: string,
  expiresIn: number | string = "20m"
): string => {
  const options: SignOptions = {
    expiresIn: expiresIn as SignOptions["expiresIn"],
  };
  return jwt.sign(payload, secret, options);
};

export { registerUser, signToken };
