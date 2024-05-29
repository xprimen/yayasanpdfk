"use client";
import { MenuList } from "@/types";
import {
  mdiMonitorDashboard,
  mdiTuneVariant,
  mdiPulse,
  mdiAccountCircle,
  mdiBookOpenPageVariant,
  mdiPost,
  mdiViewGalleryOutline,
  mdiChevronLeft,
} from "@mdi/js";
import Icon from "@mdi/react";
import Image from "next/image";
import React from "react";

interface Props {
  setMenuBig: React.Dispatch<React.SetStateAction<boolean>>;
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

function LeftSidebar({ setMenuBig, menuBig }: Props) {
  return (
    <div className="drawer-side">
      <label
        htmlFor="LeftSidebarDrawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="w-80 min-h-full bg-gradient-to-b from-slate-300 to-slate-100 flex flex-col">
        <div className="flex flex-row items-center p-4">
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
          <div className={`flex items-center absolute -right-5`}>
            <button
              onClick={() => setMenuBig(!menuBig)}
              className={`h-full bg-white rounded-full hover:drop-shadow-lg p-1`}
            >
              <Icon path={mdiChevronLeft} size={"2em"} />
            </button>
          </div>
        </div>
        <ul className="menu p-4 flex-1">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftSidebar;

// ${menuBig ? "right-0 sm:-right-5" : "right-0"}
