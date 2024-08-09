import React, { useState } from "react";
import { Link } from "react-router-dom";
import ResponsiveNavbar from "./ResponsiveNavbar";

// icons
import { BiPhoneCall } from "react-icons/bi";
import { IoClose, IoMenu } from "react-icons/io5";

// images
import Logo from "../../assets/images/logo.jpg";

const Navbar = () => {
  const [showMenu, SetShowMenu] = useState(false);

  const toggleMenu = () => {
    SetShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[99] text-black bg-white border-b-[1px] border-secondary">
        <nav className="container flex h-[70px] items-center justify-between py-2">
          <div className="text-2xl md:text-3xl">
            <Link to="/" className="inline-block font-bold text-primary">
              <div className="flex space-x-2">
                <img src={Logo} alt="Logo" width={34} height={34} />
                <span>บัญชีกลาง</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <Link to="/home" className="hover:text-secondary">
                  หน้าแรก
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-secondary">
                  เกี่ยวกับเรา
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-secondary">
                  คำถาม
                </Link>
              </li>
              <li>
                <Link to="/policy" className="hover:text-secondary">
                  นโยบาย
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary">
                  ติดต่อเรา
                </Link>
              </li>
              <li>
                <Link to="tel:+66821147724">
                  <BiPhoneCall className="text-2xl h-[40px] w-[40px] rounded-md p-2 text-white bg-primary hover:bg-secondary" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:hidden">
            {showMenu ? (
              <IoClose
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <IoMenu
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </nav>
      </header>
      <ResponsiveNavbar showMenu={showMenu} handleLinkClick={handleLinkClick} />
    </>
  );
};

export default Navbar;
