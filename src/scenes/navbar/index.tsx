import youtube from "/youtube.svg";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlinePlusCircle,
  AiOutlineBell,
} from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import useMediaQuery from "../../hooks/useMediaQuery";

type Props = {
  isMenuToggled: boolean;
  setIsMenuToggled: (value: boolean) => void;
};

const Navbar = ({ isMenuToggled, setIsMenuToggled }: Props) => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 680px)");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  }

  function handleClick() {
    if (isMenuToggled) {
      setIsMenuToggled(false);
    } else {
      setIsMenuToggled(true);
    }
  }

  return (
    <>
      <nav>
        <div className="flex-between fixed top-0 w-full px-4 py-2 bg-black-1 z-30">
          {/* left side */}
          <div className="flex-center gap-4">
            <div
              className="flex-center w-[40px] h-[40px] text-xl rounded-full hover:bg-black-2 cursor-pointer"
              onClick={handleClick}
            >
              <AiOutlineMenu />
            </div>
            <div className="flex items-center gap-1 py-2 text-xl cursor-pointer font-oswald">
              {/* <BsYoutube className="text-4xl text-red-600" /> */}
              <img src={youtube} alt="youtube" className="h-7" />
              YouTube
            </div>
          </div>

          {/* middle */}
          {isAboveSmallScreens && (
            <div className="flex-center mx-auto w-[50%]">
            <div className="flex w-4/6 h-12 gap-5 border-2 bg-black-5 border-black-2 rounded-l-full pl-6 p-2">
              <input
                className="w-full h-full outline-none border-none bg-black-5"
                type="text"
                placeholder="Search"
                onChange={(e) => {setSearchTerm(e.target.value)}}
              />
            </div>
            <button className="flex-center h-12 p-2 border-2 px-5 bg-black-2 border-black-2 rounded-r-full cursor-pointer"
            onClick={handleSubmit}
            >
              <AiOutlineSearch className="text-xl" />
            </button>
            <div className="flex-center ml-4 p-3 rounded-full bg-black-2 hover:bg-black-3 cursor-pointer">
              <BsFillMicFill className="text-[18px]" />
            </div>
          </div>
          )}

          {/* right side */}
          <div className="flex-center max-sm:ml-12 max-sm:flex-between">
            {!isAboveSmallScreens && (
              <div className="flex-between">
                <div className="nav-icons">
                  <AiOutlineSearch className="text-xl" />
                </div>
                <div className="nav-icons">
                  <BsFillMicFill className="text-xl" />
                </div>
              </div>
            )}
            <div className="nav-icons">
              <AiOutlinePlusCircle className="text-2xl" />
            </div>
            <div className="nav-icons">
              <AiOutlineBell className="text-2xl" />
            </div>
            <div className="nav-icons">
              <FaUserCircle className="text-blue-300 text-2xl" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
