import { IFormInput } from "@/components/register/register-form";
import SERVER_URL from "@/services/server";
import axios from "axios";

const registerUser = async (data: IFormInput) => {
  try {
    const response = await axios.post(`${SERVER_URL}/auth/register`, data);
    const authId = response.data.auth_id;
    if (!authId) throw new Error("Неуспешна регистрация.");
    return authId;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default registerUser;
