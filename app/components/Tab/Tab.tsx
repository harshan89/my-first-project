import { FC, useState } from "react";

interface Props {
  tabs: { tabHeader: string; tabContent: string }[];
}

const Tab: FC<Props> = ({ tabs }) => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  return (
    <div className="p-5">
      <div className="flex gap-1">
        {tabs.map((item, index) => (
          <button
            className="bg-blue-800 text-white p-5 rounded-md"
            onClick={() => {
              setTabIndex(index);
            }}
          >
            {item.tabHeader}
          </button>
        ))}
      </div>
      <div className="p-10">{tabs[tabIndex].tabContent}</div>
    </div>
  );
};

export default Tab;
