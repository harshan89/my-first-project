import { FC } from "react";

interface Props {
  leftMenu: string[];
}

const LeftPanel: FC<Props> = ({ leftMenu }) => {
  return (
    <div className="flex gap-8 flex-col h-[500px] w-[150px] bg-yellow-300 pt-4 items-center">
      {leftMenu.map((menu, idx) => (
        <p key={idx}>{menu}</p>
      ))}
    </div>
  );
};

export default LeftPanel;
