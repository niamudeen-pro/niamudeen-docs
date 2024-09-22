import { BRAND_NAME } from "../../../constants";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../../store/features/sidebarSlice";
import { ThemeDropdown } from "../../shared/ThemeDropdown";

export default function Navbar() {
  const dispatch = useDispatch();

  const handleSidebarToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="flex_between h-20">
        <div className="text-primary flex items-center gap-4 text-xl">
          <HiOutlineMenuAlt2
            onClick={handleSidebarToggle}
            className="cursor-pointer"
          />
          <p className="text-xl">{BRAND_NAME}</p>
        </div>
        <ThemeDropdown />
      </div>
    </header>
  );
}
