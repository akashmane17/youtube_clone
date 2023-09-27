import React from "react";

import logo from "../../assets/logo.jpg";
import thumbnail from "../../assets/thumbnail.jpg";

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

const Video = ({ row, video }: Props) => {
  return (
    <>
      {row ? (
        <div className="mt-2 max-xs:max-w-[83%] mx-auto h-auto rounded-xl duration-[0.3s] cursor-pointer">
          {/* Thumbnail */}
          <div className="w-full">
            <img
              src={video.snippet?.thumbnails?.medium?.url || thumbnail}
              alt={video.snippet?.title}
              className="w-[480px] rounded-xl hover:rounded-none duration-[0.3s] object-contain"
            />
          </div>
          {/* info */}
          <div className="mt-1 p-2 flex gap-4">
            {/* logo */}
            <div className="mt-1">
              <img
                src={logo}
                alt="logo"
                className="w-[34px] h-[34px] object-fill rounded-full"
              />
            </div>
            {/* info */}
            <div className="w-[80%]">
              <h3 className="text-[15px] leading-5">{video.snippet?.title.slice(0, 60)}</h3>
              <div className="mt-1">
                <p className="text-[13px] text-gray-2">{video.snippet?.channelTitle}</p>
                <div className="flex gap-2 text-[13px] text-gray-2">
                  <p>1M Views</p>.<p>10 months ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex mb-4 xs:gap-3 cursor-pointer border-2 overflow-x-hidden">
          {/* Thumbnail */}
          <div className="w-2/5">
            <img
              src={video.snippet?.thumbnails?.high?.url || thumbnail}
              alt={video.snippet?.title}
              className="min-w-[200px] w-full h-auto rounded-xl object-contain hover:rounded-none duration-[0.3s]"
            />
          </div>
          {/* info */}
          <div className="w-3/5 px-2 mt-3">
            {/* info */}
            <div className="w-full">
              <h3 className="text-[18px] leading-6">
              {video.snippet?.title.slice(0, 60)}
              </h3>
              <div className="flex gap-2 text-gray-2 text-xs leading-6">
                <p>1M Views</p>.<p>10 months ago</p>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src={logo}
                  alt="logo"
                  className="w-[25px] h-[25px] object-fill rounded-full"
                />
                <p className="text-xs text-gray-2">{video.snippet?.channelTitle}</p>
              </div>
              <div className="w-full mt-4 text-xs text-gray-2 overflow-y-hidden h-4">
                <p>
                {video.snippet?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Video;
