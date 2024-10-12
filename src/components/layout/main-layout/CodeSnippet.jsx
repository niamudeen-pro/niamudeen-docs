import { MdContentCopy } from "react-icons/md";
import { sendNotification } from "../../../utils/notifications";

export default function CodeSnippetTabContent({
  snippet,
  filename,
  activeTab,
}) {
  const handleCopyCodeSnippet = (code) => {
    navigator.clipboard.writeText(code);
    sendNotification("success", "Code copied successfully");
  };

  return (
    <>
      {activeTab === "code" && (
        <div className="border-border border-2 p-5 rounded-md mb-6 max-h-[800px] overflow-y-auto hide_scrollbar">
          <div className="flex_between mb-6">
            <p className="bg-primary text-white px-4 py-2 rounded-md">
              {filename}
            </p>
            <MdContentCopy
              size={22}
              className="cursor-pointer hover:text-primary"
              onClick={() => handleCopyCodeSnippet(snippet)}
            />
          </div>
          <div className="max-w-3xl overflow-x-auto hide_scrollbar">
            <pre>
              <code>{snippet}</code>
            </pre>
          </div>
        </div>
      )}
    </>
  );
}
