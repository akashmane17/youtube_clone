import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { suggetions } from "../../utils/constants";

const Suggestions = () => {
  return (
    <div className="suggetion-div">
      <div className="flex-center p-2 rounded-full hover:bg-black-3 cursor-pointer">
        <AiOutlineLeft className="h-[20px] w-[20px]" />
      </div>

      <div className="flex-center justify-start h-10 ml-5 gap-3 w-5/6 overflow-hidden">
        <div className="suggetion-link">All</div>
        {suggetions.map((suggetion) => (
          <div className="suggetion-link" key={suggetion}>
            {suggetion}
          </div>
        ))}
      </div>

      <div className="flex-center p-2 rounded-full hover:bg-black-3 cursor-pointer">
        <AiOutlineRight className="h-[20px] w-[20px]" />
      </div>
    </div>
  );
};

export default Suggestions;
