import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

export default async function AuthLayout(props: { children: React.ReactNode }) {
  const session = await getServerSession();
  if (session) {
    redirect("/" + process.env.ADMIN_PREFIX);
  }
  // bg-[url(/assets/images/bg1.jpg)] bg-cover bg-center bg-no-repeat
  return (
    <section className="flex md:h-screen justify-center items-center">
      <div className="px-8 py-12 rounded-3xl max-w-screen-lg w-full bg-white border grid md:grid-cols-2 gap-8 items-center">
        <div className="px-12 relative">{props.children}</div>
        <div className="relative flex-1 rounded-3xl w-full min-h-80 md:h-full flex flex-col justify-center lg:col-4 text-white bg-[url(/assets/images/bg1.jpg)] bg-cover bg-center bg-no-repeat">
          <div className="flex absolute h-full w-full rounded-3xl bg-black/40" />
          <div className="flex flex-col items-center z-10 space-y-6">
            <Image
              src={"/logo-yayasan-fk.svg"}
              width={100}
              height={100}
              // fill
              alt="Logo Yayasan PDFK"
              className="bg-white rounded-full w-32 p-2 shadow-lg border"
            />
            <div className="w-full flex flex-col items-center">
              <h2 className="text-3xl">Yayasan Padepokan</h2>
              <h1 className="text-4xl font-bold">Fatwa Kehidupan</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
