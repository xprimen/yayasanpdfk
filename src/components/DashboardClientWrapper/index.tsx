"use client";
import React from "react";
import Navbar from "../Navbar";
import LeftSideBar from "../LeftSideBar";

interface Props {
  // session: Session;
  children: React.ReactNode;
}

function DashboardClientWrapper({ children }: Props) {
  const [menuSmall, setMenuSmall] = React.useState(false);
  const [menuBig, setMenuBig] = React.useState(false);

  return (
    <div className="flex relative">
      <LeftSideBar
        setMenuSmall={setMenuSmall}
        menuSmall={menuSmall}
        menuBig={menuBig}
      />

      <div
        id="content-area"
        className={`max-w-screen flex min-h-screen w-full flex-col transition-all duration-500 ease-in-out ${
          menuBig ? "lg:ml-80" : "lg:ml-24"
        }`}
      >
        <Navbar
          setMenuSmall={setMenuSmall}
          menuSmall={menuSmall}
          setMenuBig={setMenuBig}
          menuBig={menuBig}
          // session={session}
        />
        <div id="main-content" className={`top-0 px-4 py-6 md:px-8`}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardClientWrapper;
