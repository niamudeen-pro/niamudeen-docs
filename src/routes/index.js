import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AppLayout from "../components/layout/AppLayout";
import Sidebar from "../pages/components/Sidebar";
import NotificationsComponent from "../pages/components/Notifications";
import LoaderComponent from "../pages/components/Loader";
import FormComponent from "../pages/components/Form";

export const ALL_ROUTES = [
  {
    id: 1,
    path: "/",
    element: <HomePage />,
  },
  {
    id: 2,
    title: "Sidebar",
    path: "/components/sidebar",
    element: <Sidebar />,
  },
  {
    id: 3,
    title: "Notifications",
    path: "/components/notifications",
    element: <NotificationsComponent />,
  },
  {
    id: 4,
    title: "Loader",
    path: "/components/loader",
    element: <LoaderComponent />,
  },
  {
    id: 5,
    title: "Form",
    path: "/components/form",
    element: <FormComponent />,
  },
];

export const PRIVATE_ROUTES =
  (ALL_ROUTES?.length > 0 &&
    ALL_ROUTES.filter((route) => route.isPrivate && !route.ishidden)) ||
  [];

export const PUBLIC_ROUTES =
  (ALL_ROUTES?.length > 0 &&
    ALL_ROUTES.filter((menu) => !menu.isPrivate && !menu.ishidden)) ||
  [];

export const _router = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    children: ALL_ROUTES,
  },
]);
