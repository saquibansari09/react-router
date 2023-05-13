// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { AiOutlineMenu } from "react-icons/ai";

// const Navbar = () => {
//   const [navOpen, setNavOpen] = useState(false);
//   const handleClick = () => setNavOpen(!navOpen);

//   return (
//     <div>
//       <ul className="bg-white h-[80px] w-[100%] flex justify-center items-center gap-5">
//         <li className="hover:text-lime-500 font-semibold ">
//           <Link to="/">Home</Link>
//         </li>
//         <li className="hover:text-lime-500 font-semibold ">
//           <Link to="/about">About</Link>
//         </li>
//         <li className="hover:text-lime-500 font-semibold">
//           <Link to="/service">Service</Link>
//         </li>
//         <li className="hover:text-lime-500 font-semibold ">
//           <Link to="/blogs">Blogs</Link>
//         </li>
//         <li className="hover:text-lime-500 font-semibold">
//           <Link to="/contact">Contact</Link>
//         </li>
//         <div>
//           <AiOutlineMenu className="ml-20" onClick={handleClick} size={25} />
//         </div>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "service" },
    { name: "ABOUT", link: "about" },
    { name: "BLOG'S", link: "blogs" },
    { name: "CONTACT", link: "contact" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-violet-950 py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          <div className="text-white">Mumbai</div>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 text-white cursor-pointer md:hidden"
        >
          <AiOutlineMenu name={open ? "close" : "menu"} />
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12  absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-orange-500 hover:text-amber-700 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
