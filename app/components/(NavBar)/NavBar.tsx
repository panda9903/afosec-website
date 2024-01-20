"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [state, setState] = React.useState(false);

  const menus = [
    { title: "Events", path: "/events" },
    { title: "FAQ", path: "/faq" },
    { title: "Contact Us", path: "/contact" },
    { title: "Register", path: "/register" },
  ];

  return (
    <nav className="w-full md:border-0 px-6">
      <div className="items-center justify-between md:flex">
        <div className="flex items-center justify-between py-3 md:block">
          <Link href="/">
            <div className="flex items-center justify-around">
              <Image
                src="/favicon.ico"
                alt="Logo"
                width={30}
                height={30}
                className="m-2"
              ></Image>
              AFOSEC
            </div>
          </Link>
          <div className="md:hidden">
            <button
              className="outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex justify-self-center pb-3 mt-2 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li
                key={idx}
                className={`hover:text-gray-400 ${
                  item.title === "Register"
                    ? " p-[6px] bg-[#EA8814] text-white rounded-md "
                    : ""
                }`}
              >
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
