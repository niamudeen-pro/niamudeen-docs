import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Sidebar from "../pages/components/Sidebar";
import FormComponent from "../pages/components/Form";
import AppLayout from "../components/layout/AppLayout";
import TableComponent from "../pages/components/Table";
import ModalComponent from "../pages/components/Modal";
import LoaderComponent from "../pages/components/Loader";
import NotificationsComponent from "../pages/components/Notifications";

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
  {
    id: 6,
    title: "Table",
    path: "/components/table",
    element: <TableComponent />,
  },
  {
    id: 7,
    title: "Modal",
    path: "/components/modal",
    element: <ModalComponent />,
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
