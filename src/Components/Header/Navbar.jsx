import { HiMenuAlt3 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center py-6">
        <Logo></Logo>
        <div>
          <div className="relative dropdown">
            <label tabIndex={0} className="md:hidden">
              <HiMenuAlt3 className="text-2xl"></HiMenuAlt3>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content absolute right-0 mt-3 z-[1] py-4 space-y-4 text-center shadow bg-white rounded-xl w-40"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "color-1 underline underline-offset-8 decoration-4"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/donation"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "color-1 underline underline-offset-8 decoration-4"
                      : ""
                  }
                >
                  Donation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/statistics"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "color-1 underline underline-offset-8 decoration-4"
                      : ""
                  }
                >
                  Statistics
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <ul className="hidden md:flex justify-between items-center gap-12 color-2 text-lg pb-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "color-1 underline underline-offset-8 decoration-4"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/donation"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "color-1 underline underline-offset-8 decoration-4"
                      : ""
                  }
                >
                  Donation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/statistics"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "color-1 underline underline-offset-8 decoration-4"
                      : ""
                  }
                >
                  Statistics
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
