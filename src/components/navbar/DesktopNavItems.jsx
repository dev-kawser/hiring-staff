/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function DesktopNavItems({ navLinks }) {
  return (
    <ul className="hidden md:hidden lg:hidden xl:flex items-center gap-5">
      {navLinks.map(({ to, label }) => (
        <li key={to} className="group flex cursor-pointer flex-col">
          <NavLink
            to={to}
            className={({ isActive }) =>
              `font-medium ${
                isActive
                  ? "text-blue dark:text-white dark:border-white border-b-2 border-blue"
                  : "text-darkBlue dark:text-lightText"
              }`
            }
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default DesktopNavItems;