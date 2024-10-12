import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import Tabs from "./Tabs";
import SideBar from "./Sidebar";
import PackagesToInstalled from "./Packages";
import useWindowSize from "../../../hooks/useWindowSize";
import {
  closeSidebar,
  toggleSidebar,
} from "../../../store/features/sidebarSlice";

export default function MainLayout({
  children,
  title,
  description,
  packages = [],
  codeSnippetList = [],
}) {
  const [activeTab, setActiveTab] = useState("preview");
  const dispatch = useDispatch();

  const isSidebarOpen = useSelector((state) => state.sidebar.isOpened);

  const windowSize = useWindowSize();

  const handleSidebarToggle = () => {
    dispatch(toggleSidebar());
  };

  useEffect(() => {
    const handleResize = () => {
      if (windowSize?.width < 768 && windowSize?.width > 0) {
        dispatch(closeSidebar());
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch, windowSize?.width]);

  return (
    <div className="flex flex-col md:flex-row mt-10">
      <SideBar
        isSidebarOpen={isSidebarOpen}
        handleSidebarToggle={handleSidebarToggle}
      />

      <main className="flex-1 min-h-screen px-4 md:px-8">
        <div className="space-y-4 mb-8">
          <h1 className="mb-2 text-3xl">{title}</h1>
          {/* <p className="text-muted-foreground mb-6 text-sm">{description}</p> */}

          {/* PACKAGES *************************/}
          <PackagesToInstalled packages={packages} />
        </div>

        {/* TABS **********************************/}
        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          codeSnippetList={codeSnippetList}
        >
          {children}
        </Tabs>
      </main>
    </div>
  );
}
