import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function SignIn() {
  return (
    <div className="flex flex-col space-y-16 w-full">
      <h2 className="text-6xl">Sign In</h2>
      {/* <p className="text-gray-400">Masukkan Username dan Password Anda</p> */}
      <LoginForm />
      <div className="divider">Goto</div>
      <div className="flex flex-col space-y-4">
        <Link
          href={"/"}
          className="btn btn-outline btn-primary btn-block rounded-full hover:!text-white uppercase"
        >
          Daftar
        </Link>
        <Link
          href={"/forgotPassword"}
          className="btn btn-outline btn-accent btn-block rounded-full hover:!text-white uppercase"
        >
          Lupa Password
        </Link>
        <Link
          href={"/"}
          className="btn btn-outline btn-info btn-block rounded-full hover:!text-white uppercase"
        >
          Home
        </Link>
      </div>
    </div>
  );
}

export default SignIn;

/*  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-6 lg:h-full">
          <Image
            alt="Syaikh Muhammad Zuhri"
            src="/syaikh-indonesia.jpg"
            className="absolute inset-0 h-full w-full opacity-80"
            // width={1080}
            // height={1080}
            fill
            objectFit="contain"
            objectPosition="center"
          />
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-6 lg:px-16 lg:py-12">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                href="#"
              >
                <span className="sr-only">Home</span>
                <Image
                  src={"/logo-yayasan-fk.svg"}
                  width={100}
                  height={100}
                  // fill
                  alt="Logo Yayasan PDFK"
                  className="bg-white rounded-full w-20 p-2 shadow-lg border"
                />
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Selamat Datang
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Masukkan Username dan Passsword Anda
              </p>
            </div>

            <LoginForm />
          </div>
        </main>
      </div>
    </section>
  ); */

/* return (
    <section className="relative bg-slate-100">
      <div className="flex flex-col lg:flex-row lg:max-w-5xl mx-auto bg-white lg:min-h-screen justify-center items-center lg:h-screen lg:py-24">
        <div className="flex bg-white py-10 lg:col-8">
          <div className="mx-auto w-full max-w-[480px]">
            <LoginForm />
          </div>
        </div>
        <div className="relative flex flex-col h-full justify-center items-center lg:col-4 bg-[url(/assets/images/bg1.jpg)] bg-cover bg-center bg-no-repeat">
          <div className="flex absolute h-full w-full bg-black/40" />
          <div className="flex flex-col text-white z-10">
            <h1 className="text-3xl">Sign In</h1>
          </div>
        </div>
      </div>
    </section>
  ); */
