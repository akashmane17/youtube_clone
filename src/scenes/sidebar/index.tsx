import useMediaQuery from "../../hooks/useMediaQuery";
import { useEffect } from "react";
import {
  categories0,
  categories1,
  categories2,
  categories3,
} from "../../utils/constants";
import SidebarBtn from "./SidebarBtn";
import SidebarBtnSmall from "./SidebarBtnSmall";
import SidebarPop from "./SidebarPop";

type Props = {
  isMenuToggled: boolean;
  setIsMenuToggled: (value: boolean) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
};

const Sidebar = ({
  isMenuToggled,
  setIsMenuToggled,
  selectedCategory,
  setSelectedCategory,
}: Props) => {
  const sideBar = useMediaQuery("(min-width: 1313px)");

  useEffect(() => {
    console.log(isMenuToggled);

    if (sideBar) {
      setIsMenuToggled(true);
    } else {
      setIsMenuToggled(false);
    }
  }, [sideBar]);

  return (
    <section className="flex-col mt-12 px-2 pb-16 bg-black-1 h-[95%] overflow-y-auto">
      {isMenuToggled && sideBar ? (
        <div>
          {/* top */}
          <div className="flex-center flex-col py-4 border-b-2 border-gray">
            {categories1.map((category) => (
              <SidebarBtn
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
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
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
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
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
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
      ) : (
        <div className="flex-col bg-black-1 w-[60px] mt-12 max-sm:hidden ">
          {categories0.map((category) => (
            <SidebarBtnSmall
              name={category.name}
              icon={category.icon}
              key={category.name}
            />
          ))}
        </div>
      )}
      {isMenuToggled && !sideBar && (
        <SidebarPop
          isMenuToggled={isMenuToggled}
          setIsMenuToggled={setIsMenuToggled}
        />
      )}
    </section>
  );
};

export default Sidebar;
