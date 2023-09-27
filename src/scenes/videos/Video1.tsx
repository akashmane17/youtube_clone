import { useEffect } from "react";
import logo from "../../assets/logo.jpg";
import thumbnail from "../../assets/thumbnail.jpg";
import { fetchFromApi } from "../../utils/fetchFromApi";
import { BsFillCheckCircleFill } from "react-icons/bs";

export interface VideoItem {
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: Thumbnail;
      medium: Thumbnail;
      high: Thumbnail;
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };
}

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

interface Props {
  row: boolean;
  video: VideoItem;
}

const Video1 = ({ row, video }: Props) => {
  // const [channelData, setChannelData] = use(null);

  // useEffect(() => {
  //   fetchFromApi(`search?part=snippet&q=${}`)
  //   .then((data) => {setChannelData(data.items)})
  // })

  return (
    <>
      {row ? (
        <div className="flex flex-col mt-2 cursor-pointer max-xs:w-[90%] mx-auto ">
          {/* Thumbnail */}
          <div className="max-w-full max-h-full overflow-hidden">
            <img
              src={video.snippet?.thumbnails?.high?.url || thumbnail}
              alt={video.snippet?.title}
              className="max-h-full max-w-full w-auto h-auto object-cover rounded-xl hover:rounded-none transition-all duration-300 "
            />
          </div>
          {/* info */}
          <div className="mt-1 p-2 flex gap-4 max-w-[480px]">
            {/* logo */}
            <div className="flex items-start">
              <div className="flex h-9 w-9 rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={logo}
                  alt="logo"
                />
              </div>
            </div>
            {/* info */}
            <div className="flex flex-col ml-2 overflow-hidden">
              {/* title */}
              <span className="text-sm font-bold line-clamp-2">
                {video.snippet?.title.slice(0, 60)}
              </span>
              {/* channel name */}
              <span className="text-[12px] font-semibold mt-2 text-gray-2 flex items-center">
                {video.snippet?.channelTitle}
                <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
              </span>
              {/* views and publish time */}
              <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
                <span>897k views</span>
                <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
                  .
                </span>
                <span className="truncate">2 weeks ago</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex mb-3 cursor-pointer">
          {/* Thumbnail */}
          <div className="relative h-max w-max overflow-hidden rounded-xl">
            <img
              className="h-full w-full object-cover"
              src={video?.snippet?.thumbnails?.medium?.url || thumbnail}
              alt="thumbnail"
            />
          </div>
          {/* info */}
          <div className="flex flex-col ml-3 overflow-hidden">
            {/* title */}
            <span className="text-lg line-clamp-2 text-white">
              {video?.snippet?.title}
            </span>

            {/* views and publish time */}
            <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden mt-1">
                <span>897k views</span>
                <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
                  .
                </span>
                <span className="truncate">2 weeks ago</span>
              </div>

            <div className="mt-4 flex items-center gap-3">
              <img
                src={logo}
                alt="logo"
                className="w-[25px] h-[25px] object-fill rounded-full"
              />
              <div className="flex-center text-[12px] font-semibold mt-2 text-gray-2 flex items-center">
                {video?.snippet?.channelTitle}
                <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] lg:text-[10px] xl:text-[12px] ml-1" />
              </div>
            </div>
            <div className="w-full mt-4 text-xs text-gray-2 overflow-y-hidden h-4">
              <p>{video.snippet?.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Video1;
