import React from "react";

export default async function PublicLayout(props: {
  children: React.ReactNode;
}) {
  // const session = await getServerSession();
  // if (session) {
  //   redirect("/");
  // }
  return props.children;
}
