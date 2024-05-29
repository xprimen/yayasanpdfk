import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import SecureWrapper from "./SecureWrapper";
import DashboardClientWrapper from "@/components/DashboardClientWrapper";
import AdminClientWrapper from "@/components/AdminClientWrapper";

export default async function AdminLayout(props: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session) {
    redirect("/signIn");
  }

  return (
    <SecureWrapper>
      <DashboardClientWrapper>{props.children}</DashboardClientWrapper>
      {/* <AdminClientWrapper>{props.children}</AdminClientWrapper> */}
    </SecureWrapper>
  );
}
