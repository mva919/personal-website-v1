"use client";

import Button from "./button";
import { Spiral as Hamburger } from "hamburger-react";
import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nodeRef = useRef(null);

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

        <div className="block md:hidden z-30">
          <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={32} />
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden fixed z-10 backdrop-blur-sm inset-0" />
      )}

      <CSSTransition
        nodeRef={nodeRef}
        in={isMenuOpen}
        timeout={300}
        unmountOnExit
        classNames={{
          enter: "transform transition-all duration-300",
          enterActive: "-translate-x-full",
          enterDone: "-translate-x-full",
          exit: "transform transition-all duration-300",
          exitActive: "translate-x-0",
        }}
      >
        <div
          ref={nodeRef}
          className="absolute bg-indigo-600 w-3/4 z-20 left-full inset-y-0 flex items-center justify-center"
        >
          <div className="flex flex-col space-y-12">
            {["about", "experience", "projects", "contact"].map((link, idx) => (
              <a
                className="hover:scale-110 transition-all"
                href={`#${link}`}
                key={link}
              >
                <div className="flex gap-2">
                  <p className="text-xl">{`0${idx + 1}.`}</p>
                  <p className="text-xl">{`${link}`}</p>
                </div>
              </a>
            ))}
            <Button variant="outlineSecondary" className="w-full">
              Resume
            </Button>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default Navbar;
