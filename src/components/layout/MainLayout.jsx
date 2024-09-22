import { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdContentCopy } from "react-icons/md";
import { sendNotification } from "../../utils/notifications";

const navItems = [
  {
    title: "Getting Started",
    links: [{ href: "#", text: "Introduction" }],
  },
  {
    title: "Components",
    links: [
      { href: "/components/sidebar", text: "Sidebar" },
      { href: "/components/notifications", text: "Notifications" },
    ],
  },
];

export default function MainLayout({
  children,
  codeSnippet,
  title,
  description,
  packagesToInstalled,
  filename,
  codeSnippet2,
  codeSnippet3,
}) {
  const [activeTab, setActiveTab] = useState("preview");

  const isSidebarOpen = useSelector((state) => state.sidebar.isOpened);
  console.log("isSidebarOpen: ", isSidebarOpen);
  const handleCopyCodeSnippet = (code) => {
    navigator.clipboard.writeText(code);
    sendNotification("success", "Code copied successfully");
  };

  return (
    <div className="flex flex-col md:flex-row mt-10">
      <aside
        className={classNames(
          "p-4 md:p-0 top-20 md:top-0 md:block fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto  transition duration-200 ease-in-out md:relative md:translate-x-0  bg-white dark:bg-black md:bg-transparent md:dark:bg-transparent",
          { "!hidden": !isSidebarOpen }
        )}
      >
        <nav>
          {navItems.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="mb-2 text-base font-medium">{section.title}</h2>
              <ul>
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

      {/* Main content */}
      <main className="flex-1 min-h-screen p-4 md:p-8">
        {/* installation steps ******************** */}

        <div className="space-y-4 mb-8">
          <h1 className="mb-2 text-3xl">{title}</h1>
          <p className="text-muted-foreground mb-6 text-sm">{description}</p>
          <h2>Install the following dependencies:</h2>
          {packagesToInstalled?.length > 0 &&
            packagesToInstalled.map((pkg, index) => (
              <div className="flex items-center justify-between bg-background p-5 rounded-md border-border border-2">
                <Link to={pkg.link} target="_blank">
                  <p className="hover:text-primary">{pkg.name}</p>
                </Link>
                <MdContentCopy
                  size={22}
                  className="cursor-pointer hover:text-primary"
                  onClick={() => handleCopyCodeSnippet(pkg.name)}
                />
              </div>
            ))}
        </div>

        {/* code snippet and preview tabs **************** */}

        <div className="mb-8">
          <button
            className={`mr-4 pb-2 ${
              activeTab === "preview"
                ? "border-primary border-b-2 font-medium"
                : "text-muted-foreground"
            }`}
            onClick={() => setActiveTab("preview")}
          >
            Preview
          </button>
          <button
            className={`pb-2 ${
              activeTab === "code"
                ? "border-primary border-b-2 font-medium"
                : "text-muted-foreground"
            }`}
            onClick={() => setActiveTab("code")}
          >
            Code
          </button>
        </div>
        {activeTab === "preview" && (
          <div className="border-border border-2 p-5 rounded-md mb-6">
            {children}
          </div>
        )}
        <CodeSnippetTabContent
          snippet={codeSnippet}
          filename={filename}
          activeTab={activeTab}
        />

        <CodeSnippetTabContent
          snippet={codeSnippet2?.snippet}
          filename={codeSnippet2?.filename}
          activeTab={activeTab}
        />

        <CodeSnippetTabContent
          snippet={codeSnippet3?.snippet}
          filename={codeSnippet3?.filename}
          activeTab={activeTab}
        />
      </main>
    </div>
  );
}

function CodeSnippetTabContent({ snippet, filename, activeTab }) {
  const handleCopyCodeSnippet = (code) => {
    navigator.clipboard.writeText(code);
    sendNotification("success", "Code copied successfully");
  };

  return (
    <>
      {activeTab === "code" && (
        <div className="w-full border-border border-2 p-5 rounded-md mb-6">
          <div className="overflow-x-hidden overflow-y-auto hide_scrollbar p-5 max-w-4xl">
            <div className="flex_between mb-6">
              <p className="bg-gray-50 dark:bg-primary px-4 py-2 rounded-md">
                {filename}
              </p>
              <MdContentCopy
                size={22}
                className="cursor-pointer hover:text-primary"
                onClick={() => handleCopyCodeSnippet(snippet)}
              />
            </div>
            <pre>
              <code>{snippet}</code>
            </pre>
          </div>
        </div>
      )}
    </>
  );
}
