"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Icon from "@mdi/react";
import {
  mdiArrowRight,
  mdiChevronRight,
  mdiChevronUp,
  mdiMenu,
  mdiMenuClose,
  mdiMenuOpen,
} from "@mdi/js";

interface Props {
  // setMenuBig?: React.Dispatch<React.SetStateAction<boolean>>;
  // menuBig: boolean;
  setMenuSmall: React.Dispatch<React.SetStateAction<boolean>>;
  menuSmall: boolean;
  setMenuBig: React.Dispatch<React.SetStateAction<boolean>>;
  menuBig: boolean;
  // session: Session;
}

const Navbar = ({
  menuSmall,
  setMenuSmall,
  menuBig,
  setMenuBig, // session,
}: Props) => {
  const { data: session } = useSession();

  return (
    <div className="navbar flex flex-row flex-nowrap px-6 border-b border-b-slate-200">
      <div className="flex-1">
        <a className="flex items-center space-x-8">
          <div className="flex">
            <button
              onClick={() => setMenuBig(!menuBig)}
              className={`hidden transition duration-500 lg:block ${
                !menuBig ? "rotate-90" : ""
              }`}
              // className={`lg:block hidden`}
            >
              {menuBig ? (
                <Icon path={mdiMenu} size={"2em"} />
              ) : (
                <Icon path={mdiChevronUp} size={"2em"} />
              )}
            </button>
            {/* <button
              onClick={() => setMenuSmall(!menuSmall)}
              className={`transition duration-500 lg:hidden ${
                menuSmall ? "-rotate-180" : "rotate-180"
              }`}
            >
              {menuSmall ? (
                <Icon path={mdiMenuClose} size={1} />
              ) : (
                <Icon path={mdiMenu} size={1} />
              )}
            </button> */}
            <button
              onClick={() => setMenuSmall(!menuSmall)}
              className={`transition duration-500 lg:hidden`}
            >
              <Icon path={mdiMenu} size={"2em"} />
            </button>
          </div>
        </a>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="avatar btn btn-square btn-circle"
          >
            <div className="w-8 justify-center rounded-full align-middle">
              <span className="text-lg">
                {session?.user?.name?.slice(0, 1)}
              </span>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu menu-sm z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                href="/authorized/profile"
                className="justify-between py-3 font-bold"
              >
                {session?.user.name}
              </Link>
            </li>
            <li className="divide-x-2"></li>
            <li>
              <a href="#" onClick={() => signOut()}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// ini untuk animation burger menu pakai tailwind css
{
  /* <button
  className="group h-16 w-16 rounded-lg border-2"
  onClick={() => setMenuBig(!menuBig)}
>
  <div className="grid justify-items-center gap-[3px]">
    <span className="h-1 w-8 rounded-full bg-gray-600 group-hover:rotate-45 group-hover:translate-y-[6.5px] transition"></span>
    <span className="h-1 w-8 rounded-full bg-gray-600 group-hover:scale-x-0 transition"></span>
    <span className="h-1 w-8 rounded-full bg-gray-600 group-hover:-rotate-45 group-hover:-translate-y-[6.5px] transition"></span>
  </div>
</button>; */
}
