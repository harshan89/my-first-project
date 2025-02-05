import { FC, ReactNode } from "react";
import { IconType } from "react-icons";

interface Props {
  rightMenu: { itemName: string; itemIcon: ReactNode }[];
}

const RightPanel: FC<Props> = ({ rightMenu }) => {
  return (
    <div className="flex flex-col items-center h-[500] w-[400] bg-gray-500 pt-5 gap-5">
      {rightMenu.map((item, key) => {
        return (
          <div className="flex gap-4 items-center">
            <p>{item.itemIcon}</p>
            <p key={key}>{item.itemName}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RightPanel;
