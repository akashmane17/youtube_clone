type Props = {
  name: string;
  icon: string;
};

const SidebarBtnSmall = ({ name, icon }: Props) => {
  return (
    <div className="flex-center flex-col gap-2 justify-center px-2 py-3 rounded-xl hover:bg-gray cursor-pointer">
      <img src={icon} className="w-[18px] h-[18px]" />
      <p className="text-[8px] ">{name}</p>
    </div>
  );
};

export default SidebarBtnSmall;
