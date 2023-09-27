type Props = {
  name: string;
  icon: string;  
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
};

const SidebarBtn = ({ name, icon, selectedCategory, setSelectedCategory }: Props) => {
  const active = selectedCategory === name? "bg-black-3" : "";
  return (
    <div className={`sidebar-links ${active}`}  key={name} onClick={() => setSelectedCategory(name)}>
      <div className="flex-center w-[18px] h-[18px]">
        <img src={icon} />
      </div>
      <p className=" text-[12px] ">{name}</p>
    </div>
  );
};

export default SidebarBtn;
