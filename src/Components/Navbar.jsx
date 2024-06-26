import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState();

  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar h-[50px] lg:h-[75px] items-center justify-between px-[50px] lg:px-[154px] fixed bg-[#F9F6F2] w-full  flex z-[15]">
        <h1 className="font-extrabold text-[24px] lg:text-[32px]">
          <a href="/">SEKU</a>
        </h1>
        <div className="lg:hidden">
          {!isOpen && (
            <div
              onClick={toggleMenu}
              className="flex items-center gap-4"
              data-dropdown-toggle="dropdown"
              id="dropdownDefaultButton"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </div>
          )}

          {isOpen && (
            <div onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          )}
        </div>

        <ul className="gap-[15px] hidden lg:flex">
          <li>
            <Link
              to="/Seku/"
              className={
                location.pathname === "/Seku/" ? "font-semibold" : "font-normal"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Seku/inszone"
              className={
                location.pathname === "/Seku/inszone"
                  ? "font-semibold"
                  : "font-normal"
              }
            >
              InsZone
            </Link>
          </li>
          <li>
            <Link
              to="/Seku/products"
              className={
                location.pathname === "/Seku/products"
                  ? "font-semibold"
                  : "font-normal"
              }
            >
              Products
            </Link>
          </li>
        </ul>
      </nav>

      {isOpen && (
        <div className="lg:hidden">
          <div className="dropdown bg-[#F9F6F2] h-[100vh] w-full fixed  left-0 flex flex-col items-center justify-center z-[10]">
            <ul
              className="flex flex-col gap-5"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <Link
                  to="/Seku/"
                  className={
                    location.pathname === "/Seku/"
                      ? "font-semibold"
                      : "font-normal"
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Seku/inszone"
                  className={
                    location.pathname === "/Seku/inszone"
                      ? "font-semibold"
                      : "font-normal"
                  }
                >
                  InsZone
                </Link>
              </li>
              <li>
                <Link
                  to="/Seku/products"
                  className={
                    location.pathname === "/Seku/products"
                      ? "font-semibold"
                      : "font-normal"
                  }
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
