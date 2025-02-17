import { FC, ReactNode } from "react";
import { IconType } from "react-icons";
import Tab from "../Tab/Tab";

interface Props {
  rightMenu: { itemName: string; itemIcon: ReactNode }[];
}

const RightPanel: FC<Props> = ({ rightMenu }) => {
  const tabs2: { tabHeader: string; tabContent: string }[] = [
    { tabHeader: "Tab 1", tabContent: "Content 1" },
    { tabHeader: "Tab 2", tabContent: "Content 2" },
  ];

  return (
    <div>
      <div className="flex flex-col items-center w-[400] bg-gray-500 pt-5 gap-5">
        {rightMenu.map((item, key) => {
          return (
            <div className="flex gap-4 items-center" key={key}>
              <p>{item.itemIcon}</p>
              <p key={key}>{item.itemName}</p>
            </div>
          );
        })}
      </div>
      <Tab tabs={tabs2} />
    </div>
  );
};

export default RightPanel;
