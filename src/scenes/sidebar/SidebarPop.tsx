import youtube from "/youtube.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { categories1, categories2, categories3 } from "../../utils/constants";
import SidebarBtn from "./SidebarBtn";

type Props = {
  isMenuToggled: boolean;
  setIsMenuToggled: (value: boolean) => void;
};

const SidebarPop = ({ isMenuToggled, setIsMenuToggled }: Props) => {
  if (isMenuToggled) {
    return (
      <>
        <div className="z-20 bg-transparent w-full h-full fixed top-0 left-0"></div>
        <section className="flex-col z-30 w-[250px] fixed left-0 top-0 px-4 pb-16 bg-black-1 h-full overflow-y-auto">
          <div className="flex-center gap-4 px-4 py-2 h-12 bg-black-1 fixed top-0 left-0">
            <div
              className="flex-center w-[40px] h-[40px] text-xl rounded-full hover:bg-black-2 cursor-pointer"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <AiOutlineMenu />
            </div>
            <div className="flex items-center gap-1 py-2 text-lg cursor-pointer">
              {/* <BsYoutube className="text-4xl text-red-600" /> */}
              <img src={youtube} alt="youtube" className="h-7" />
              YouTube
            </div>
          </div>

          <div className="mt-12">
            <div className="flex-center flex-col py-4 border-b-2 border-gray">
              {categories1.map((category) => (
                <SidebarBtn
                  name={category.name}
                  icon={category.icon}
                  key={category.name}
                />
              ))}
            </div>

            {/* Explore */}
            <div className="flex-center flex-col py-4 border-b-2 border-gray">
              {categories2.map((category) => (
                <SidebarBtn
                  name={category.name}
                  icon={category.icon}
                  key={category.name}
                />
              ))}
            </div>

            {/* Bottom */}
            <div className="flex-center flex-col py-4 border-b-2 border-gray">
              {categories3.map((category) => (
                <SidebarBtn
                  name={category.name}
                  icon={category.icon}
                  key={category.name}
                />
              ))}
            </div>

            <p className="mt-5 text-center text-sm text-gray">
              © 2023 Google LLC
            </p>
          </div>
        </section>
      </>
    );
  }
};

export default SidebarPop;
