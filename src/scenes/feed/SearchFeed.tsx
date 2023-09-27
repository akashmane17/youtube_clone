import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Suggestions from "../navbar/Suggestions";
import Sidebar from "../sidebar";
import Videos from "../videos";
import { fetchFromApi } from "../../utils/fetchFromApi";

type Props = {
  isMenuToggled: boolean;
  setIsMenuToggled: (value: boolean) => void;
};

const SearchFeed = ({ isMenuToggled, setIsMenuToggled }: Props) => {
  const [videos, setVideos] = useState([]);
  const { searchterm } = useParams();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchterm}`)
    .then((data) => {setVideos(data.items)})
  }, [searchterm]);

  return (
    <div className="flex-center">
      <div className="h-[100vh]">
        {/* <Sidebar
          isMenuToggled={isMenuToggled}
          setIsMenuToggled={setIsMenuToggled}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        /> */}
      </div>
      <div className="overflow-y-auto h-[96vh] w-full">
        <Suggestions />
        <Videos videos={videos} row={false} />
      </div>
    </div>
  );
};

export default SearchFeed;
