import { Link } from "react-router-dom";

import { HiOutlineMenuAlt2 } from "react-icons/hi";

import { cn } from "../../../utils";
import { ALL_ROUTES } from "../../../routes";

export default function SideBar({ isSidebarOpen, handleSidebarToggle }) {
  const COMPONENTS = [
    {
      title: "Getting Started",
      links: [{ href: "#", text: "Introduction" }],
    },
    {
      title: "Components",
      links:
        (ALL_ROUTES?.length > 0 &&
          ALL_ROUTES.map((route) => {
            return { href: route.path, text: route.title };
          })) ||
        [],
    },
  ];
  return (
    <aside
      className={cn(
        "p-4 md:p-0  md:top-0 md:block fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto  transition duration-200 ease-in-out md:relative md:translate-x-0  bg-white dark:bg-black md:bg-transparent md:dark:bg-transparent",
        { "!hidden": !isSidebarOpen }
      )}
    >
      <div className="flex justify-end md:hidden">
        <HiOutlineMenuAlt2
          className="cursor-pointer text-primary"
          size={22}
          onClick={handleSidebarToggle}
        />
      </div>
      <nav>
        {COMPONENTS?.length > 0 &&
          COMPONENTS.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="mb-2 text-base font-medium">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-1">
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary text-sm transition-colors hover:underline"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </nav>
    </aside>
  );
}
