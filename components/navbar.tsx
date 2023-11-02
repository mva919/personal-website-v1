"use client";

import Button from "./button";
import { Spiral as Hamburger } from "hamburger-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between py-6 items-center">
        <h1 className="font-bold text-2xl bg-indigo-600 px-2">marcos.</h1>

        <div className="md:flex gap-8 items-center hidden">
          {["about", "experience", "projects", "contact"].map((link, idx) => (
            <a
              className="hover:text-indigo-600 transition-all"
              href={`#${link}`}
              key={link}
            >
              <div className="flex gap-2">
                <p className="text-indigo-600">{`0${idx + 1}`}</p>
                <p>{`${link}`}</p>
              </div>
            </a>
          ))}
          <Button>Resume</Button>
        </div>

        <div className="block md:hidden">
          <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={32} />
        </div>
      </nav>
      <div className="bg-blue-200 h-96 -top-48"></div>
    </>
  );
};

export default Navbar;
