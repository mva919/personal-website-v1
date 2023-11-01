import Button from "./button";

const Navbar = () => {
  return (
    <nav className="flex justify-between py-6 items-center">
      <h1 className="font-bold text-2xl bg-indigo-600 px-2">marcos.</h1>

      <div className="flex gap-8 items-center">
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
    </nav>
  );
};

export default Navbar;
