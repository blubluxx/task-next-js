"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import RegisterButton from "../common/regiter-button";
import registerUser from "@/lib/api/auth";
import { useState } from "react";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const errorMsg = "Това поле е задължително.";

const RegisterForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const onSubmit = async (data: IFormInput) => {
    try {
      const authId = await registerUser(data);
      router.push(`https://ofertirai.me/login?auth_id=${authId}`);
      reset();
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
        <div className="register-form-group">
          <label htmlFor="firstName">Име</label>
          <input
            type="text"
            placeholder="Въведете Вашето име"
            {...register("firstName", { required: errorMsg })}
          />
          {errors.firstName && (
            <p className="text-red-500">{errors.firstName.message}</p>
          )}
        </div>

        <div className="register-form-group">
          <label htmlFor="lastName">Фамилия</label>
          <input
            type="text"
            placeholder="Въведете Вашето фамилно име"
            {...register("lastName", { required: errorMsg })}
          />{" "}
          {errors.lastName && (
            <p className="text-red-500">{errors.lastName.message}</p>
          )}
        </div>

        <div className="register-form-group">
          <label htmlFor="email">Имейл</label>
          <input
            type="text"
            placeholder="Въведете своя имейл"
            {...register("email", { required: errorMsg })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="register-form-group">
          <label htmlFor="phone">Мобилен телефон</label>
          <input
            type="text"
            placeholder="Въведете номера на мобилния си телефон"
            {...register("phone", { required: errorMsg })}
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div className="flex justify-center flex-col">
          <RegisterButton extraStyle="w-[90%] text-white mt-4 rounded-10 bg-[#2f325b] rounded-xl" />
          {error && <p className="text-red-500 p-2">{error}</p>}
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
export type { IFormInput };
