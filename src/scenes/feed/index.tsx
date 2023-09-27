import { useState, useEffect } from "react";
import Suggestions from "../navbar/Suggestions";
import Sidebar from "../sidebar";
import Videos from "../videos";
import { fetchFromApi } from "../../utils/fetchFromApi";

type Props = {
  isMenuToggled: boolean;
  setIsMenuToggled: (value: boolean) => void;
};

const Feed = ({ isMenuToggled, setIsMenuToggled }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => {setVideos(data.items)})
    console.log(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="flex-center">
      <div className="h-[100vh]">
        <Sidebar
          isMenuToggled={isMenuToggled}
          setIsMenuToggled={setIsMenuToggled}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className="overflow-y-auto h-[96vh] w-full">
        <Suggestions />
        <Videos videos={videos} row={true} />
      </div>
    </div>
  );
};

export default Feed;
