import { v4 as uuidv4 } from "uuid";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export const createUser = async (data: any): Promise<User> => {
  return {
    id: uuidv4(),
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
  };
};
