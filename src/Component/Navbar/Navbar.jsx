import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Links from "../Links/Links";

const routes = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Contact", path: "/contact" },
  { id: 5, name: "NotFound", path: "*" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav className="bg-yellow-400 text-black p-4">
        {/* drop down list */}
        <div className="flex md:justify-center lg:justify-start justify-end">
          <div onClick={() => setOpen(!open)} className="md:hidden h-6 p-5">
            {open === true ? (
              <AiOutlineMenu className="text-2xl "></AiOutlineMenu>
            ) : (
              <AiOutlineClose></AiOutlineClose>
            )}
          </div>
          <ul
            className={`md:flex  gap-5 bg-yellow-400 p-5 
        absolute md:static duration-1000 rounded-b-xl
        ${open ? "-top-60" : "top-20"}
        `}
          >
            {routes.map((route) => (
              <Links key={route.id} route={route}></Links>
            ))}
          </ul>
        </div>
            {/* list */}
        <div>
           
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
