import React from "react";
import { Link } from "react-router-dom";

const Navber = () => {
  const navPages = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link>Blog</Link>
      </li>
      <li>
        <Link>Contact</Link>
      </li>
    </>
  );
  return (
    <div className="bg-[#87509c] ">
      <div className="navbar myFont md:w-9/12 mx-auto text-white  flex justify-center">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu bg-[#87509c] text-center opacity-75 menu-compact border rounded-2xl dropdown-content mt-2 py-2 shadow w-28"
            >
              {navPages}
            </ul>
          </div>
          <div className="flex">
            <Link
              to={"/"}
              className="md:text-5xl myFont font-semibold md:font-extrabold text-xl"
            >
              CodePro
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu md:text-xl menu-horizontal px-1">{navPages}</ul>
        </div>

        {/* user profile  */}
        <div className="navbar-end">
          {/* user picture  */}
          <div className="relative group">
            <button className="btn btn-ghost btn-circle">
              <img
                className="w-10 h-10 rounded-full"
                src="https://i.ibb.co/bKsQDKh/07.jpg"
                alt=""
              />
            </button>
            <h1 className="absolute -bottom-15 bg-slate-700 px-6 py-2 rounded-lg opacity-0 invisible shadow-md right-0 group-hover:opacity-100 group-hover:visible duration-300">
              MD RAYHAN UDDIN
              <span>
                <button className="btn-success btn-sm rounded-md text-white">
                  Logout
                </button>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
