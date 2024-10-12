import CodeSnippetTabContent from "./CodeSnippet";

export default function Tabs({
  activeTab,
  setActiveTab,
  codeSnippetList,
  children,
}) {
  return (
    <>
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

      {/* ACTIVE TAB CONTENT */}
      {activeTab === "preview" && (
        <div className="border-border border-2 p-5 rounded-md mb-6">
          <div className="max-w-4xl">{children}</div>
        </div>
      )}

      {/* CODE TAB CONTENT */}

      {codeSnippetList?.length > 0 &&
        codeSnippetList.map((item, index) => {
          return (
            <CodeSnippetTabContent
              snippet={item.code}
              filename={item.filename}
              activeTab={activeTab}
            />
          );
        })}
    </>
  );
}
