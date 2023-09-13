import React from "react";
import { BsTranslate } from "react-icons/bs";

import { SiBookstack } from "react-icons/si";
import { Link } from "react-router-dom";

const SideIcons = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Translator <BsTranslate size={30} />
        </>
      ),
      href: "/translator",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Dictionary <SiBookstack size={30} />
        </>
      ),
      href: "/dictionary",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] z-10 left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-t from-sky-500 to-blue-500" +
              " " +
              style
            }
          >
            <Link
              to={href}
              className="flex justify-between items-center w-full text-white"
              rel="noreferrer"
            >
              {child}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideIcons;
