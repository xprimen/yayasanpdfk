"use client";
import React from "react";
import LeftSidebar from "../admin/LeftSidebar";

interface Props {
  // session: Session;
  children: React.ReactNode;
}

function AdminClientWrapper({ children }: Props) {
  //   const [menuSmall, setMenuSmall] = React.useState(false);
  const [menuBig, setMenuBig] = React.useState(true);
  //   const [menu, setMenu] = React.useState(true)
  console.log(menuBig);
  //   ${menuBig ? "lg:drawer-open" : ""}
  return (
    <div className={`drawer ${menuBig ? "lg:drawer-open" : ""}`}>
      <input
        id="LeftSidebarDrawer"
        type="checkbox"
        // checked={menuBig}
        className="drawer-toggle"
      />
      <div className="drawer-content min-h-screen flex flex-col">
        {/* Page content here */}
        {children}
      </div>
      <LeftSidebar menuBig={menuBig} setMenuBig={setMenuBig} />
    </div>
  );
}

export default AdminClientWrapper;
