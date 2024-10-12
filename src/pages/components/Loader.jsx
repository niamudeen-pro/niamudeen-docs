import MainLayout from "../../components/layout/main-layout";

export default function LoaderComponent() {
  const codeSnippetList = [
    {
      id: 1,
      code: codeSnippet,
      filename: "components/Loader.jsx",
    },
    {
      id: 2,
      code: codeSnippet2,
      filename: "style.css",
    },
  ];
  return (
    <MainLayout
      title="Loader"
      description="Bring your app to life with our sleek and stylish Loader Component! Keep users engaged while content loads seamlessly in the background. No more boring wait times – just smooth, modern animations that fit any design. Elevate your user experience effortlessly!"
      codeSnippetList={codeSnippetList}
    >
      <section className="h-[400px] w-full flex_center">
        <div className="flex space-x-2 customLoader">
          <div className="rounded-full p-2 bg-purple-600 animate-bounce"></div>
          <div className="rounded-full p-2 bg-red-500 animate-bounce"></div>
          <div className="rounded-full p-2  animate-bounce bg-green-500"></div>
        </div>
      </section>
    </MainLayout>
  );
}

const codeSnippet = `import React from "react";

export default function LoaderComponent() {
  return (
      <section className="h-[400px] w-full flex items-center justify-center">
        <div className="flex space-x-2 customLoader">
          <div className="rounded-full p-2 bg-purple-600 animate-bounce"></div>
          <div className="rounded-full p-2 bg-red-500 animate-bounce"></div>
          <div className="rounded-full p-2  animate-bounce bg-green-500"></div>
        </div>
      </section>
  );
}
`;

const codeSnippet2 = `.customLoader div {
  animation-duration: 0.6s;
}

.customLoader div:first-child {
  animation-delay: 0.1s;
}

.customLoader div:nth-child(2) {
  animation-delay: 0.2s;
}

.customLoader div:nth-child(3) {
  animation-delay: 0.3s;
}`;
