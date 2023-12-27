import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import {
  Drawer,

  Typography,

} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const {user, LogOut} = useContext(AuthContext)
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);


  const [isOpen, setIsOpen] = useState(false);

  const handelLogout = () =>{
    LogOut()
    .then(() => {})
    .catch((error) => console.log(error));
  }

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className=' relative  flex  bg-white'>
      <div className='absolute  w-full'>

        <div className="hidden md:block bg-white ">
          <div className="flex relative mt-3 md:py-4 md:px-6 ">

            <div className="invisible md:visible md:flex text-xl text-sync-400">
              <span className="text-1xl md:text-5xl font-bold bg-gradient-to-r from-[#04e4c5] via-[#13bde4] to-[#209dff] bg-clip-text text-transparent">Coaching</span>

            </div>
            <div className="md:space-x-12 mt-4 ms-12 text-xl align-middle justify-center  ">
              <a className="hover:text-blue-400" href="/">
                Home
              </a>
              <a className="hover:text-blue-400" href="/about">
                Event{" "}
              </a>
              <a className="hover:text-blue-400" href="/about">
                Page{" "}
              </a>
              <a className="hover:text-blue-400" href="/blogs">
                Blog
              </a>
              <a className="hover:text-blue-400" href="/blogs">
                Courses
              </a>
            </div>

            <div className="md:flex absolute z-50  right-16 gap-12 text-xl">
              <div className="flex items-center gap-2">
                {user ? (
                  <>
                    <p className="cursor-pointer hover:text-sky-500" onClick={handelLogout}>Logout</p>
                    <img className="rounded-full" src={user?.photoURL}></img>
                  </>
                ) : (
                  <>
                    <CiUser />{" "}
                    <span>
                      <a className="hover:text-blue-400" href="/register">
                        Register
                      </a>{" "}
                      <span>/</span>{" "}
                      <a className="hover:text-blue-400" href="/blogs">
                        Login
                      </a>
                    </span>
                  </>
                )}
              </div>
              <button
                type="button"
                className="text-white text-lg bg-gradient-to-r from-[#04e4c5] via-[#13bde4] to-[#209dff] hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full  px-10 py-2.5 text-center "
              >
                buy now
              </button>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div className="mt-6 ">
            <div
              className="fixed md:hidden md:text-[14px] h-[50px] md:h-[35px] flex  
md:border   font-semibold z-50 left-0 w-full md:w-[90px] md:relative p-2   md:bg-transparent  "
            >
              <div className="-mt-4">
                <div className="  md:flex items-center ">
                  <span className="  text-4xl mt-8 ms-4 font-bold bg-gradient-to-r from-[#04e4c5] via-[#13bde4] to-[#209dff] bg-clip-text text-transparent  ">
                    Coaching
                  </span>
                </div>
              </div>
              <div
                onClick={handleToggle}
                className="-mr-2 flex fixed top-4 z-50 right-0 w-full"
              >
                {isOpen ? (
                  <button className="w-[50px] flex justify-center items-center absolute top-0 right-0 h-[50px] text-black ">
                    <FaTimes onClick={openDrawer} className="text-2xl" />
                  </button>
                ) : (
                  <button className="w-[50px] flex justify-center items-center absolute top-0 right-0 h-[50px]  text-black">
                    <FaBars className="text-black text-2xl" />
                  </button>
                )}
              </div>

              {isOpen && (
                <Drawer open={open} onClose={closeDrawer} className="p-4">
                  <div className="mb-6 flex items-center justify-between bg-red-800 px-10 py-6">
                    <Typography variant="h5" color="blue-gray">
                      <span className="  text-4xl mt-8 font-bold bg-gradient-to-r from-[#04e4c5] via-[#13bde4] to-[#209dff] bg-clip-text text-transparent  ">
                        Coaching
                      </span>
                    </Typography>

                    <FaTimes
                      onClick={closeDrawer}
                      className="text-2xl text-gray-300"
                    />
                  </div>
                  <div className="text-xl">
                    <div className="hover:text-blue-400">
                      <a href="http://"> Home</a>
                    </div>
                    <div className="hover:text-blue-400">
                      <a href="http://"> Event</a>
                    </div>
                    <div className="hover:text-blue-400">
                      <a href="http://"> Page</a>
                    </div>
                    <div className="hover:text-blue-400">
                      <a href="http://"> Block</a>
                    </div>
                    <div className="hover:text-blue-400">
                      <a href="http://"> courses</a>
                    </div>
                  </div>
                  <div className="mt-4 text-xl">
                    <div className="hover:text-blue-400">
                      <Link to="/register">Register</Link>
                    </div>
                    <div className="hover:text-blue-400">
                      <a href="http://">Login</a>
                    </div>
                  </div>
                </Drawer>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
