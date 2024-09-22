import { Navigate, Outlet, useLocation } from "react-router-dom";
import Navbar from "./navbar";

export default function AppLayout() {
  const { pathname: currentActiveRoute } = useLocation();

  if (currentActiveRoute === "/") {
    return <Navigate to="/components/sidebar" />;
  }

  return (
    <main className="custom_container">
      <Navbar />
      <Outlet />
    </main>
  );
}
