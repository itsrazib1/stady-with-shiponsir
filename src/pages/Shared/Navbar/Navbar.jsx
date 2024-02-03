import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import {
  Drawer,

  Typography,

} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import img from "/public/Razib/IMG_20231231_212655.png"
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const [isOpen, setIsOpen] = useState(false);
console.log(user)
  

  const handelLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className=' relative   flex  '>
      <div className='absolute z-[10] w-full'>

        <div className="hidden md:block  ">
          <div className="flex relative -pt-1 md:py-4 md:px-6 ">

            <div className="invisible md:visible md:flex text-xl text-sync-400">
              
              <img className="w-[400px]"  src={img} alt="" />
            </div>
            <div className="md:space-x-12 mt-4 ms-12 text-xl align-middle justify-center  ">
              <a className="hover:text-blue-400" href="/">
                Home
              </a>
              <a className="hover:text-blue-400" href="/dashboard">
              Dashboard
              </a>
              <a className="hover:text-blue-400" href="/#About">
              About
              </a>
              <a className="hover:text-blue-400" href="/#Pricing">
              Pricing 
              </a>
              
              
            </div>

            <div className="md:flex absolute z-50  right-16 gap-12 text-xl">
              <div className="flex items-center gap-3">
                {user ? (
                  <>

                    
                    <div><img className="w-10 h-10 rounded-full border border-black" src={user?.photoURL} alt="" /></div>
                    <div>{user?.displayName}</div>
                    <p className="cursor-pointer ps-3 bg-gradient-to-r from-[#ff0000] via-[#b70808] to-[#5a0101] text-white rounded-full  px-5 py-2 " onClick={handelLogout}>Logout</p>

                  </>
                ) : (
                  <>
                    <CiUser />{" "}
                    <span>
                      <a className="hover:text-blue-400" href="/register">
                        Register
                      </a>{" "}
                      <span>/</span>{" "}
                      <a className="hover:text-blue-400" href="/login">
                        Login
                      </a>
                    </span>
                    <button
                      type="button"
                      className="text-white text-lg bg-gradient-to-r from-[#04e4c5] via-[#13bde4] to-[#209dff] hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full  px-10 py-2.5 text-center "
                    >
                      <a href="/register">Join now</a>
                    </button>
                  </>
                )}
              </div>

            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div className=" ">
            <div
              className="fixed lg:pt-6 pt-5 bg-white md:hidden md:text-[14px] h-[50px] md:h-[35px] flex  
md:border   font-semibold z-50 left-0 w-full md:w-[90px] md:relative p-2   md:bg-transparent  "
            >
              <div className="-mt-2 ">
                <div className="  md:flex items-center  ">
                  <span className="  text-2xl mt-8 ms-4 font-bold bg-gradient-to-r from-[#04e4c5] via-[#13bde4] to-[#209dff] bg-clip-text text-transparent  ">
                    Study With Shepon Sir
                  </span>
                </div>
              </div>

              <div
                onClick={handleToggle}
                className="mr-2 flex fixed top-0 z-50 right-0 w-full"
              >
                {isOpen ? (
                  <button className="w-[50px] flex justify-center items-center absolute top-0 right-0 h-[50px] text-black ">
                    <FaTimes onClick={openDrawer} className="text-2xl" />
                  </button>
                ) : (
                  <button className="w-[50px] flex justify-center items-center absolute top-0 right-0 h-[50px]  text-black">
                    <FaBars  className="text-black text-2xl" />
                  </button>
                )}
              </div>

              {isOpen && (
                <Drawer open={isOpen} onClose={closeDrawer} className="p-4">
                  <div className="mb-6 flex rounded-lg border border-black items-center justify-between bg-gray-200 px-10 py-6">
                    <Typography variant="h5" color="blue-gray">
                      <span className="  text-2xl mt-8 font-bold bg-gradient-to-r from-[#04e4c5] via-[#13bde4] to-[#209dff] bg-clip-text text-transparent  ">
                        Stady With Shepon Sir
                      </span>
                    </Typography>

                    <FaTimes
                      onClick={handleToggle}
                      className="text-2xl text-red-500"
                    />
                  </div>
                  <div className="text-xl">
                    <div className="hover:text-blue-400">
                      <a href="/"> Home</a>
                    </div>
                    <div className="hover:text-blue-400">
                      <a href="/dashboard">Dashboard</a>
                    </div>
                    <div className="hover:text-blue-400">
                      <a href="/#About">About</a>
                    </div>
                    <div className="hover:text-blue-400">
                      <a href="/#Pricing">Pricing </a>
                    </div>
                  
                  </div>
                  <div className="mt-4 text-xl">
                    {user?<>
                  <div className="hover:text-blue-400">
                    </div>
                    </>
                  :
                  <>
                  <div className="hover:text-blue-400">
                      <Link to="/register">Register</Link>
                    </div>
                    <div className="hover:text-blue-400">
                      <a href="/login">Login</a>
                    </div>
                  </>  
                  }
                    {user ? (
                      < >
                        <div className="flex gap-3 ">
                        <div className="pt-3 text-center">{user?.displayName}</div>
                        <div className="pt-2"><img className="w-10 h-10 rounded-full  border border-black" src={user?.photoURL} alt="" /></div>
                        </div>
                        
                        
                        <p className="cursor-pointer mt-3 ps-3 bg-gradient-to-r from-[#ff0000] via-[#b70808] to-[#5a0101] text-white rounded-full  px-5 py-2 mx-auto text-center " onClick={handelLogout}>Logout</p>
                        
                        

                      </>
                    ) : (<>
                      <div>
                      </div></>)}
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
