import jwt, { SignOptions } from "jsonwebtoken";
import axios from "axios";

import { IFormInput } from "@/components/register/register-form";
import { SERVER_URL } from "@/services/server";

/**
 * Registers a new user with the provided data.
 *
 * @param {IFormInput} data - The input data for user registration.
 * @returns {Promise<string>} - A promise that resolves to the authentication ID of the registered user.
 * @throws {Error} - Throws an error if the registration is unsuccessful or if there is an error during the request.
 */

const registerUser = async (data: IFormInput): Promise<string> => {
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

/**
 * Signs a JSON Web Token (JWT) with the given payload and secret.
 *
 * @param payload - The payload to be included in the JWT.
 * @param secret - The secret key to sign the JWT.
 * @param expiresIn - The expiration time for the JWT. Defaults to "20m".
 *                      Can be a number (in seconds) or a string describing a time span (e.g., "20m", "2h").
 * @returns The signed JWT as a string.
 */

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
