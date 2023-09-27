import Video1, { VideoItem } from './Video1'

type Props = {
  row: boolean;
  videos: VideoItem[];
}

const Videos = ({row, videos}:Props) => {
  
  return (
    <section className={`p-1 sm:px-4 mt-[100px] mx-auto`}>
      <div className={`${row ? "video-row" : "video-col"}`}>
        {videos.map((item, idx) => (
          <Video1 video={item} row={row} key={idx}/>
        ))}
      </div>
    </section>
  )
}

export default Videos