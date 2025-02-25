import { User } from "@/data/interfaces";
import { v4 as uuidv4 } from "uuid";

/**
 * Creates a new user with the provided data.
 *
 * @param data - The data for the new user.
 * @returns A promise that resolves to the created user.
 */

export const createUser = async (data: any): Promise<User> => {
  return {
    id: uuidv4(),
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
  };
};
