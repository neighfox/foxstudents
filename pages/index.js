import Head from "next/head";
import Image from "next/image";

import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">
            <span className="lowercase text-base">Fox |</span>{" "}
            <span className="  uppercase">| Student</span>
          </a>
        </div>
        <div className="navbar-end">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>37</a>
              </li>
              <li>
                <a>50</a>
              </li>
              <li>
                <a>71</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="justify-center items-center text-center bg-slate-700 py-96 text-white  text-6xl">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Fox Student lets is under construction!!")
              .callFunction(() => {
                console.log("String typed out!");
              })
              .pauseFor(2500)
              .deleteAll()
              .typeString("Fox Student lets is under construction!!")
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
        />
      </div>
    </>
  );
}
