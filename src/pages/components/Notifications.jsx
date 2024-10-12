import MainLayout from "../../components/layout/main-layout";
import { sendNotification } from "../../utils/notifications";

export default function NotificationsComponent() {
  const handleSuccessNotification = () => {
    sendNotification("success", "Notification sent successfully");
  };
  const handleWarningNotifications = () => {
    sendNotification("warning", "Notification sent successfully");
  };
  const handleErrorNotifications = () => {
    sendNotification("error", "Notification sent successfully");
  };

  const codeSnippetList = [
    {
      id: 1,
      code: codeSnippet,
      filename: "utils/notifications.js",
    },
    {
      id: 2,
      code: codeSnippet2,
      filename: "Notifications.jsx",
    },
    {
      id: 3,
      code: codeSnippet3,
      filename: "App.js",
    },
  ];
  const PACKAGES = [
    {
      name: "npm install react-toastify",
      link: "https://www.npmjs.com/package/react-toastify",
    },
  ];
  return (
    <MainLayout
      title="Notifications"
      description="Make every message count with our vibrant notification component, designed to catch your users' attention. Featuring eye-catching icons and a sleek design, this component effortlessly handles a variety of message types—from success and error alerts to informational updates. Customize alerts to fit your brand, ensuring your users are always in the loop with clear, concise, and engaging notifications. Elevate your app’s communication strategy and keep your audience informed, all while enhancing the overall user experience!"
      packages={PACKAGES}
      codeSnippetList={codeSnippetList}
    >
      <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-5">
        <button
          className="w-max cursor-pointer rounded-lg bg-black px-8 py-3 text-xs capitalize text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-black/80 dark:bg-orange-500 dark:hover:bg-orange-500/80"
          onClick={handleSuccessNotification}
        >
          Success
        </button>
        <button
          className="w-max cursor-pointer rounded-lg bg-black px-8 py-3 text-xs capitalize text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-black/80 dark:bg-orange-500 dark:hover:bg-orange-500/80"
          onClick={handleWarningNotifications}
        >
          Warning
        </button>
        <button
          className="w-max cursor-pointer rounded-lg bg-black px-8 py-3 text-xs capitalize text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-black/80 dark:bg-orange-500 dark:hover:bg-orange-500/80"
          onClick={handleErrorNotifications}
        >
          Error
        </button>
      </div>
    </MainLayout>
  );
}

const codeSnippet = `
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const themeType = "light";

const generateToast = (type, msg) => {
  const toastType = {
    success: toast.success,
    warning: toast.warning,
    error: toast.error,
  }[type || "error"];

  return toastType({msg}, {
    className: "bg-white relative z-50 text-black text-xs",
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: { themeType },
  });
};

export const sendNotification = (type, msg) => {
  generateToast(type, msg);
};

export const ToastContainerNotification = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={themeType}
    />
  );
};
`;

const codeSnippet2 = `import { sendNotification } from "../../utils/notifications";

export default function NotificationsComponent() {

  const handleSuccessNotification = () => {
    sendNotification("success", "Notification sent successfully");
  };
  const handleWarningNotifications = () => {
    sendNotification("warning", "Notification sent successfully");
  };
  const handleErrorNotifications = () => {
    sendNotification("error", "Notification sent successfully");
  };

  return (
      <div className="flex justify-center gap-5">
        <button
          className="w-max cursor-pointer rounded-lg bg-black px-8 py-3 text-xs capitalize text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-black/80 dark:bg-orange-500 dark:hover:bg-orange-500/80"
          onClick={handleSuccessNotification}
        >
          Success
        </button>
        <button
          className="w-max cursor-pointer rounded-lg bg-black px-8 py-3 text-xs capitalize text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-black/80 dark:bg-orange-500 dark:hover:bg-orange-500/80"
          onClick={handleWarningNotifications}
        >
          Warning
        </button>
        <button
          className="w-max cursor-pointer rounded-lg bg-black px-8 py-3 text-xs capitalize text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-black/80 dark:bg-orange-500 dark:hover:bg-orange-500/80"
          onClick={handleErrorNotifications}
        >
          Error
        </button>
      </div>
  );
}`;

const codeSnippet3 = `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ToastContainerNotification } from './utils/notifications';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <App />
        <ToastContainerNotification />
    </>
);`;
