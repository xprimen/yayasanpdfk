"use client";
import { MenuList } from "@/types";
import {
  mdiAccountCircle,
  mdiArrowLeft,
  mdiBookOpenPageVariant,
  mdiChevronDown,
  mdiChevronLeft,
  mdiChevronRight,
  mdiClose,
  mdiLogout,
  mdiMonitorDashboard,
  mdiPost,
  mdiPulse,
  mdiTuneVariant,
  mdiViewGalleryOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";
import React from "react";
import { Fade } from "react-awesome-reveal";
interface Props {
  setMenuSmall: React.Dispatch<React.SetStateAction<boolean>>;
  menuSmall: boolean;
  menuBig: boolean;
}

const list: MenuList[] = [
  {
    id: "1",
    title: "Dasbor",
    link: `/secure`,
    icon: <Icon path={mdiMonitorDashboard} size={1} />,
  },
  {
    id: "2",
    title: "Pengaturan",
    link: `/secure/setting`,
    icon: <Icon path={mdiTuneVariant} size={1} />,
    children: [
      {
        id: "2-1",
        title: "Website",
        link: `/secure/setting/website`,
        icon: <Icon path={mdiPulse} size={1} />,
        children: [
          {
            id: "2-1-1",
            title: "Semua Pengguna",
            link: `/secure/pages`,
            icon: <Icon path={mdiPulse} size={1} />,
          },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Pengguna",
    link: `/secure/user`,
    icon: <Icon path={mdiAccountCircle} size={1} />,
    children: [
      {
        id: "3-1",
        title: "Semua Pengguna",
        link: `/secure/pages`,
        icon: <Icon path={mdiPulse} size={1} />,
      },
      {
        id: "3-2",
        title: "Buat Pengguna",
        link: `/secure/pages/add`,
        icon: <Icon path={mdiPulse} size={1} />,
      },
    ],
  },
  {
    id: "4",
    title: "Halaman",
    link: `/secure/pages`,
    icon: <Icon path={mdiBookOpenPageVariant} size={1} />,
    children: [
      {
        id: "4-1",
        title: "Semua Halaman",
        link: `/secure/pages`,
        icon: <Icon path={mdiPulse} size={1} />,
      },
      {
        id: "4-2",
        title: "Buat Halaman",
        link: `/secure/pages/add`,
        icon: <Icon path={mdiPulse} size={1} />,
      },
    ],
  },
  {
    id: "5",
    title: "Artikel",
    link: `/secure/post`,
    icon: <Icon path={mdiPost} size={1} />,
    children: [
      {
        id: "5-1",
        title: "Semua Artikel",
        link: `/secure/post`,
        icon: <Icon path={mdiPulse} size={1} />,
      },
      {
        id: "5-2",
        title: "Buat Artikel",
        link: `/secure/post/add`,
        icon: <Icon path={mdiPulse} size={1} />,
      },
    ],
  },
  {
    id: "6",
    title: "Galeri",
    link: `/secure/post`,
    icon: <Icon path={mdiViewGalleryOutline} size={1} />,
  },
];

{
  /* <li key={String(i)} className={``}>
  <details open={get2segments === d.link}>
    <summary>
      {d.icon || ""}
      {menuBig && d.title}
    </summary>
    <ul>{listMenuFull(d.children, level + 1)}</ul>
  </details>
</li>; */
}

const LeftSideBar = ({ setMenuSmall, menuSmall, menuBig }: Props) => {
  const pathname = usePathname();
  const segments = useSelectedLayoutSegments();

  const listMenuFull = (newList: MenuList[], level: number = 0) => {
    return newList.map((d, i) => {
      const get2segments = "/" + segments.slice(0, level + 2).join("/");

      // if (d.children && d.children.length > 0) {
      //   console.log(d.id);
      // }
      return d.children && d.children.length > 0 ? (
        <li key={d.id}>
          <details>
            <summary>
              <span className="icon">{d.icon || ""}</span>
              {/* <span className={`title ${!menuBig ? "lg:hidden" : ""}`}>
                {menuBig && d.title}
              </span> */}
              <span className={`title`}>{d.title}</span>
              <Icon path={mdiChevronDown} size={1} className="caret" />
            </summary>
            <ul>{listMenuFull(d.children, level + 1)}</ul>
          </details>
        </li>
      ) : (
        <li key={d.id} className={``}>
          <Link
            href={d.link}
            onClick={() => setMenuSmall((menu) => !menu)}
            className={pathname === d.link ? "active" : ""}
          >
            <span className="icon">{d.icon || ""}</span>
            <span className={`title`}>{d.title}</span>
          </Link>
        </li>
      );
    });
  };

  const dropdownChildrenBigMenuOff = (
    newList: MenuList[],
    tabIndex: number = 0
  ) => {
    return (
      <ul
        tabIndex={tabIndex}
        className="dropdown-content z-10 p-2 shadow bg-base-100 rounded-box w-52"
      >
        {newList.map((d, i) => {
          return (
            <li key={String(i)}>
              <Link href={d.link}>{d.title}</Link>
              {d.children &&
                d.children.length > 0 &&
                dropdownChildrenBigMenuOff(d.children, i)}
            </li>
          );
        })}
      </ul>
    );
  };

  const listMenuBigMinimize = (newList: MenuList[], level: number = 0) => {
    return newList.map((d, i) => {
      const get2segments = "/" + segments.slice(0, level + 2).join("/");

      // if (d.children && d.children.length > 0) {
      return (
        <li key={String(i)} className={``}>
          <Link
            href={"#"}
            tabIndex={i}
            className={`flex justify-center ${
              pathname === d.link ? "active" : ""
            }`}
          >
            {d.icon || ""}
          </Link>
          {d.children &&
            d.children.length > 0 &&
            dropdownChildrenBigMenuOff(d.children, i)}
        </li>
      );
      /* } else {
        return (
          <li key={String(i)} className={``}>
            <Link
              href={d.link}
              tabIndex={i}
              onClick={() => setMenuSmall((menu) => !menu)}
              className={`flex justify-center ${
                pathname === d.link ? "active" : ""
              }`}
            >
              {d.icon || ""}
            </Link>
          </li>
        );
      } */

      /* return !d.children ? (
        <li key={String(i)} className={``}>
          <Link
            href={d.link}
            tabIndex={i}
            onClick={() => setMenuSmall((menu) => !menu)}
            className={pathname === d.link ? "active" : ""}
          >
            {d.icon || ""}
            {d.title}
          </Link>
        </li>
      ) : (
        <li key={String(i)} className={``}>
          <details open={get2segments === d.link}>
            <summary>
              {d.icon || ""}
              {d.title}
            </summary>
            <ul>{listMenuFull(d.children, level + 1)}</ul>
          </details>
        </li>
      ); */
    });
  };

  /* return (
    <nav
      id="sidebar-menu"
      className={`fixed bg-gradient-to-b from-slate-300 to-slate-100 py-4 lg:px-0 z-10 h-screen w-full shadow-sm transition-all duration-500 ease-in-out sm:w-2/5 md:w-2/5 lg:w-80
       ${menuBig ? "lg:translate-x-0" : "lg:-translate-x-full"}
      ${menuSmall ? "" : "-translate-x-full"}`}
    >
      <div
        onClick={() => setMenuSmall((menu) => !menu)}
        className={`fixed -z-10 h-screen w-full bg-opacity-60 duration-500 ease-out lg:hidden ${
          menuSmall ? "flex" : "hidden"
        }`}
      />
      <div className="scrollbars h-full overflow-y-auto">
        <div className="flex flex-row items-center justify-center px-4 mb-4">
          <div className="flex items-center justify-center space-x-2 w-full">
            <Image
              src={"/logo-yayasan-fk.svg"}
              width={100}
              height={100}
              // fill
              alt="Logo Yayasan PDFK"
              className="bg-white rounded-full w-12 p-2 drop-shadow-sm"
            />
            <div className="flex flex-col justify-center items-center text-slate-700">
              <h2 className="text-lg font-bold">Yayasan Padepokan</h2>
              <h1 className="text-xl font-bold">Fatwa Kehidupan</h1>
            </div>
          </div>
          <div
            className={`flex items-center absolute ${
              menuSmall ? "right-0 sm:-right-5" : "right-0"
            }`}
          >
            <button
              onClick={() => setMenuSmall(!menuSmall)}
              className={`lg:hidden z-10 h-full bg-white rounded-full hover:drop-shadow-lg p-1`}
            >
              <Icon path={mdiChevronLeft} size={"2em"} />
            </button>
          </div>
        </div>
        <Fade
          cascade
          direction="right"
          duration={400}
          damping={0.1}
          triggerOnce
        >
          <ul className={`py-4 px-4 menu text-base`}>
            {listMenuFull(list)}
            <li className="mt-4 cursor-pointer rounded-md hover:text-neutral-600">
              <button
                className="btn btn-warning btn-block px-2 py-2 shadow-lg"
                onClick={async () => {
                  await signOut();
                }}
              >
                <Icon path={mdiLogout} size={1} />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </Fade>
      </div>
    </nav>
  ); */

  return (
    // <nav
    //   id="sidebar-menu-large"
    //   className={`fixed bg-gradient-to-b from-slate-300 to-slate-100 py-4 lg:px-0 z-10 h-screen w-full shadow-sm transition-all duration-500 ease-in-out sm:w-2/5 md:w-2/5 lg:w-80
    //    ${menuBig ? "lg:translate-x-0" : "lg:-translate-x-full"}
    //   ${menuSmall ? "" : "-translate-x-full"}`}
    // >
    // <nav
    //   id="sidebar-menu-large"
    //   className={`hidden lg:block fixed bg-gradient-to-b from-slate-300 to-slate-100 lg:px-0 z-50 h-screen w-screen shadow-sm transition-all duration-500 ease-in-out
    //    ${menuBig ? "" : "minimize"}`}
    // >
    <nav id="sidebar-menu-large" className={menuBig ? "" : "minimize"}>
      <div
        onClick={() => setMenuSmall((menu) => !menu)}
        className={`fixed -z-10 h-screen w-full bg-opacity-60 duration-500 ease-out lg:hidden ${
          menuSmall ? "flex" : "hidden"
        }`}
      />
      <div className="flex flex-row items-center justify-center p-4">
        <div className="flex items-center justify-center space-x-2 w-full">
          <Image
            src={"/logo-yayasan-fk.svg"}
            width={100}
            height={100}
            // fill
            alt="Logo Yayasan PDFK"
            className="bg-white rounded-full w-12 p-2 drop-shadow-sm"
          />
          <div
            className={`flex flex-col justify-center items-center text-slate-700 ${
              !menuBig ? "lg:hidden" : ""
            }`}
          >
            <h2 className="text-lg font-bold">Yayasan Padepokan</h2>
            <h1 className="text-xl font-bold">Fatwa Kehidupan</h1>
          </div>
        </div>
        <div
          className={`flex items-center absolute ${
            menuSmall ? "right-0 sm:-right-5" : "right-0"
          }`}
        >
          <button
            onClick={() => setMenuSmall(!menuSmall)}
            className={`lg:hidden z-10 h-full bg-white rounded-full hover:drop-shadow-lg p-1`}
          >
            <Icon path={mdiChevronLeft} size={"2em"} />
          </button>
        </div>
      </div>
      <Fade cascade direction="right" duration={400} damping={0.1} triggerOnce>
        <ul
          className={`py-4 px-4 menu-large text-base overflow-y-auto overflow-x-hidden flex flex-col relative`}
        >
          {listMenuFull(list)}
          <li className="mt-4 cursor-pointer rounded-md hover:text-neutral-600">
            <button
              className="btn btn-warning btn-block px-2 py-2 shadow-lg"
              onClick={async () => {
                await signOut();
              }}
            >
              <Icon path={mdiLogout} size={1} />
              <span className={!menuBig ? "lg:hidden" : ""}>Logout</span>
            </button>
          </li>
        </ul>
      </Fade>
    </nav>
  );
};

export default LeftSideBar;

// ${!menuBig ? "absolute" : ""}
