"use client";
import { UserModel } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";

const loginCheck = UserModel.pick({
  username: true,
  password: true,
});

type TLogin = z.infer<typeof loginCheck>;

function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TLogin>({
    resolver: zodResolver(loginCheck),
  });

  const [errorLogin, setErrorLogin] = React.useState<
    string | undefined | null
  >();

  const onSubmit = async (data: TLogin) => {
    const checkSignIn = await signIn("fklogin", {
      ...data,
      callbackUrl: "/",
      redirect: false,
    });
    if (!checkSignIn?.ok) {
      // console.log(checkSignIn?.error);
      setErrorLogin(checkSignIn?.error);
    } else {
      reset();
      router.push("/secure");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-8">
      {errorLogin && (
        <div
          className="toast toast-center cursor-pointer z-20"
          id="toast-login-error"
          onClick={() => {
            setErrorLogin("");
          }}
        >
          <div className="alert alert-error text-white">
            <span>{errorLogin}</span>
            <button className="btn btn-xs">X</button>
          </div>
        </div>
      )}
      <div className="flex flex-col">
        {/* <label htmlFor="username" className="text-sm font-medium">
          Username
        </label> */}
        <div className="mt-2">
          <input
            type="text"
            placeholder="Username"
            id="username"
            {...register("username")}
            className={`block w-full rounded-md border-0 py-4 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-400 sm:text-sm sm:leading-6 ${
              errors.username && "ring-error"
            }`}
          />
          {errors.username && (
            <div className="label">
              <span className="label-text-alt font-bold text-error">
                {errors.username.message}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        {/* <label htmlFor="password" className="text-sm font-medium">
          Password
        </label> */}
        <div className="mt-2">
          <input
            type="password"
            id="password"
            placeholder="Password"
            {...register("password")}
            className={`block w-full rounded-md border-0 py-4 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-400 sm:text-sm sm:leading-6 ${
              errors.password && "ring-error"
            }`}
          />
          {errors.password && (
            <div className="label">
              <span className="label-text-alt font-bold text-error">
                {errors.password.message}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-gradient-to-b from-emerald-500 to-green-200 py-4 border-0 text-white rounded-full hover:shadow-2xl"
        >
          {isSubmitting ? (
            <div className="flex-row items-center justify-center flex space-x-3">
              <span className="loading loading-spinner loading-md"></span>
              <span className="">Loading</span>
            </div>
          ) : (
            <span className="uppercase">Login</span>
          )}
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
