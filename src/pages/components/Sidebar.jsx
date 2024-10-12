import React, { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { GoGift } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { RiMenuFill } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { ImFilesEmpty } from "react-icons/im";
import { AiOutlineLogout } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

import { cn } from "../../utils";
import MainLayout from "../../components/layout/main-layout";

const NAVIGATION_MENUS = [
  {
    id: 1,
    title: "Dashboard",
    icon: <RxDashboard size={22} />,
  },

  {
    id: 2,
    title: "Products",
    icon: <GoGift size={22} />,
  },

  {
    id: 3,
    title: "Pages",
    icon: <ImFilesEmpty size={22} />,
  },
  {
    id: 4,
    title: "Settings",
    icon: <IoSettingsOutline size={22} />,
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);

  const PACKAGES = [
    {
      name: "npm install react-icons",
      link: "https://react-icons.github.io/react-icons/",
    },
    {
      name: "npm install framer-motion",
      link: "https://www.npmjs.com/package/framer-motion",
    },
    {
      name: "npm install tailwind-merge",
      link: "https://www.npmjs.com/package/tailwind-merge",
    },
    {
      name: "npm install clsx",
      link: "https://www.npmjs.com/package/clsx",
    },
  ];

  const codeSnippetList = [
    {
      id: 1,
      code: codeSnippet,
      filename: "components/Sidebar.jsx",
    },
    {
      id: 2,
      code: codeSnippet2,
      filename: "utils/index.jsx",
    },
  ];

  return (
    <MainLayout
      title="Sidebar"
      description="Elevate your application's user experience with our cutting-edge sidebar component. Seamlessly integrate this advanced feature into your project to enhance navigation, organize content, and boost accessibility. Whether you're building a complex dashboard or a simple app, our sidebar adapts to your needs, providing a sleek and intuitive interface. Discover endless customization options, responsive design, and performance optimization—all in one powerful component. Transform the way users interact with your app and make navigation a breeze!"
      packages={PACKAGES}
      codeSnippetList={codeSnippetList}
    >
      <section className="flex min-h-screen text-white">
        <aside className="p-5 bg-orange-500">
          <motion.div
            animate={{
              width: isOpen ? "250px" : "60px",
              transition: {
                duration: 0.5,
                type: "spring",
                damping: 10,
              },
            }}
            className="relative  h-full"
          >
            <div className="flex justify-between items-center">
              {isOpen && (
                <>
                  <AnimatePresence>
                    <motion.p
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="uppercase text-lg font-semibold text-nowrap"
                    >
                      React UI
                    </motion.p>
                  </AnimatePresence>
                </>
              )}
              <div className="py-3 px-4 rounded-md hover:bg-white hover:text-black">
                {isOpen ? (
                  <IoClose
                    size={22}
                    className="cursor-pointer"
                    onClick={() => setIsOpen((prev) => !prev)}
                  />
                ) : (
                  <RiMenuFill
                    size={22}
                    className="cursor-pointer"
                    onClick={() => setIsOpen((prev) => !prev)}
                  />
                )}
              </div>
            </div>

            <nav className="mt-10 ">
              <ul className="space-y-4">
                {NAVIGATION_MENUS?.map((menu) => (
                  <li
                    key={menu.id}
                    className={cn(
                      "relative group flex gap-4 rounded-md py-3 px-4 items-center cursor-pointer transition-all duration-300  hover:bg-white hover:text-black",
                      {
                        "justify-center": !isOpen,
                      }
                    )}
                  >
                    <div>{menu.icon}</div>
                    {isOpen && (
                      <AnimatePresence>
                        <motion.p
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                        >
                          {menu.title}
                        </motion.p>
                      </AnimatePresence>
                    )}

                    {!isOpen && (
                      <p className="absolute left-[150%] top-1/2 transform -translate-y-1/2 whitespace-nowrap bg-orange-500 text-white px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {menu.title}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div
              className={cn(
                "flex  gap-4 rounded-md py-3 px-4 items-center cursor-pointer transition-all duration-300    absolute bottom-0 w-full hover:bg-white hover:text-black",
                {
                  "justify-center": !isOpen,
                }
              )}
            >
              <AiOutlineLogout size={22} />
              {isOpen && (
                <AnimatePresence>
                  <motion.p
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                  >
                    Logout
                  </motion.p>
                </AnimatePresence>
              )}
            </div>
          </motion.div>
        </aside>

        <div className="text-black flex-1  p-5  dark:bg-background text-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos similique
          quo minima aliquid beatae dignissimos doloremque odit necessitatibus,
          corporis quam ad rerum? Eveniet ab in tenetur officia! Quos, iusto
          facere.
        </div>
      </section>
    </MainLayout>
  );
}

const codeSnippet = `import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { GoGift } from "react-icons/go";
import { ImFilesEmpty } from "react-icons/im";
import { IoSettingsOutline } from "react-icons/io5";
import { RiMenuFill } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineLogout } from "react-icons/ai";
import MainLayout from "../../components/layout/MainLayout";
import { cn } from "../../utils";

const NAVIGATION_MENUS = [
  {
    id: 1,
    title: "Dashboard",
    icon: <RxDashboard size={22} />,
  },

  {
    id: 2,
    title: "Products",
    icon: <GoGift size={22} />,
  },

  {
    id: 3,
    title: "Pages",
    icon: <ImFilesEmpty size={22} />,
  },
  {
    id: 4,
    title: "Settings",
    icon: <IoSettingsOutline size={22} />,
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);

  return (
  <section className="flex min-h-screen text-white">
        <aside className="p-5 bg-orange-500">
          <motion.div
            animate={{
              width: isOpen ? "250px" : "60px",
              transition: {
                duration: 0.5,
                type: "spring",
                damping: 10,
              },
            }}
            className="relative  h-full"
          >
            <div className="flex justify-between items-center">
              {isOpen && (
                <>
                  <AnimatePresence>
                    <motion.p
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="uppercase text-lg font-semibold text-nowrap"
                    >
                      React UI
                    </motion.p>
                  </AnimatePresence>
                </>
              )}
              <div className="py-3 px-4 rounded-md hover:bg-white hover:text-black">
                {isOpen ? (
                  <IoClose
                    size={22}
                    className="cursor-pointer"
                    onClick={() => setIsOpen((prev) => !prev)}
                  />
                ) : (
                  <RiMenuFill
                    size={22}
                    className="cursor-pointer"
                    onClick={() => setIsOpen((prev) => !prev)}
                  />
                )}
              </div>
            </div>
            <nav className="mt-10 ">
              <ul className="space-y-4">
                {NAVIGATION_MENUS?.map((menu) => (
                  <li
                    key={menu.id}
                    className={cn(
                      "relative group flex gap-4 rounded-md py-3 px-4 items-center cursor-pointer transition-all duration-300  hover:bg-white hover:text-black",
                      {
                        "justify-center": !isOpen,
                      }
                    )}
                  >
                    <div>{menu.icon}</div>
                    {isOpen && (
                      <AnimatePresence>
                        <motion.p
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                        >
                          {menu.title}
                        </motion.p>
                      </AnimatePresence>
                    )}

                    {!isOpen && (
                      <p className="absolute left-[150%] top-1/2 transform -translate-y-1/2 whitespace-nowrap bg-orange-500 text-white px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {menu.title}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div
              className={cn(
                "flex  gap-4 rounded-md py-3 px-4 items-center cursor-pointer transition-all duration-300    absolute bottom-0 w-full hover:bg-white hover:text-black",
                {
                  "justify-center": !isOpen,
                }
              )}
            >
              <AiOutlineLogout size={22} />
              {isOpen && (
                <AnimatePresence>
                  <motion.p
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                  >
                    Logout
                  </motion.p>
                </AnimatePresence>
              )}
            </div>
          </motion.div>
        </aside>

        <div className="text-black flex-1  p-5  dark:bg-background text-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos similique
          quo minima aliquid beatae dignissimos doloremque odit necessitatibus,
          corporis quam ad rerum? Eveniet ab in tenetur officia! Quos, iusto
          facere.
        </div>
      </section>
  );
}`;

const codeSnippet2 = `import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
`;
