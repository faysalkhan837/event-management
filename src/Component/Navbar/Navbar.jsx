import { useContext, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Links from "../Links/Links";
import "./nav.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const routes = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Contact", path: "/contact" },
  { id: 5, name: "signup", path: "/signup" },
];

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleLogout = () =>{
    logOut()
    .then(() =>{ })
    .catch(error => console.log(error))
  }

  return (
    <div>
      <nav className="bg-[#fad9a3] text-black p-4">
        <div className="flex  max-sm:flex-col flex-carousel-center justify-between">
          {/* Logo */}
          <div className="min-w-190 flex max-sm:justify-center items-center">
           <Link to="/"> <img src="/logo1.png" className="h-16" /></Link>
          </div>

          <div className="flex justify-between min-w-[70%]">
            {/* drop down list */}
            <div className="flex md:justify-center ">
              <div onClick={() => setOpen(!open)} className="md:hidden h-6 p-5">
                {open === true ? (
                  <AiOutlineMenu className="text-2xl "></AiOutlineMenu>
                ) : (
                  <AiOutlineClose></AiOutlineClose>
                )}
              </div>
              <ul
                className={`md:flex lg:ml-4  gap-5 bg-[#fad9a3] p-5 
                 absolute md:static duration-1000 rounded-b-xl
                                     ${open ? "-top-60"
                                         : "max-md:top-20 max-[638px]:top-44" }`}>
                {routes.map((route) => (
                  <Links key={route.id} route={route}></Links>
                ))}
              </ul>
            </div>

            {/* button & user */}
            <div className="flex min-w-fit items-center justify-around md:flex-wrap">
              <div>
                <img
                  className="object-cover w-10 h-10 rounded-full"
                  src={user ? user.photoURL : "" } alt=""/>
                <div>
                  <h1 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
                    {user? user.displayName : ""}
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {user? user.email : ""}
                  </p>
                </div>
              </div>
              <div>
                {
                  user ? 
                  <button onClick={handleLogout} className="px-3 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-slate-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 hover:text-black">
                  log Out
                </button> : 
                <Link to='/login'>
                  <button className="px-3 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-slate-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 hover:text-black">
                  log In
              </button>
                </Link> 
                }
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
