import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Leftbar = () => {
  return (
    <div className="h-1/2 fixed bottom-0 flex flex-col items-center justify-end space-y-4">
      <Link
        href="https://github.com/mva919"
        className="hover:scale-125 hover:text-indigo-600 transition-all"
      >
        <Github />
      </Link>
      <Link
        href="https://www.linkedin.com/in/mva919/"
        className="hover:scale-125 hover:text-indigo-600 transition-all"
      >
        <Linkedin />
      </Link>
      <Link
        href="mailto:mva919@gmail.com"
        className="hover:scale-125 hover:text-indigo-600 transition-all"
      >
        <Mail />
      </Link>
      <div className="w-px h-1/4 bg-red-200"></div>
    </div>
  );
};

export default Leftbar;
