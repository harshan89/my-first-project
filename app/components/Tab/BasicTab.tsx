import { useState } from "react";

const Tab = () => {
  const [activeBtn1, setActiveBtn1] = useState<boolean>(false);
  const [activeBtn2, setActiveBtn2] = useState<boolean>(false);
  const [activeBtn3, setActiveBtn3] = useState<boolean>(false);

  const onClickTab = (tabNum: number) => {
    if (tabNum === 1) {
      setActiveBtn1(true);
      setActiveBtn2(false);
      setActiveBtn3(false);
    } else if (tabNum === 2) {
      setActiveBtn2(true);
      setActiveBtn1(false);
      setActiveBtn3(false);
    } else if (tabNum === 3) {
      setActiveBtn2(false);
      setActiveBtn1(false);
      setActiveBtn3(true);
    }
  };

  return (
    <div className="w-full">
      <div className="flex gap-5 w-full">
        <button
          className={
            activeBtn1
              ? "bg-blue-400 text-white p-5 rounded-md"
              : "bg-blue-800 text-white p-5 rounded-md"
          }
          onClick={() => onClickTab(1)}
        >
          Tab 1
        </button>
        <button
          className={
            activeBtn2
              ? "bg-blue-400 text-white p-5 rounded-md"
              : "bg-blue-800 text-white p-5 rounded-md"
          }
          onClick={() => onClickTab(2)}
        >
          Tab 2
        </button>
        <button
          className={
            activeBtn3
              ? "bg-blue-400 text-white p-5 rounded-md"
              : "bg-blue-800 text-white p-5 rounded-md"
          }
          onClick={() => onClickTab(3)}
        >
          Tab 3
        </button>
      </div>

      {activeBtn1 && <div>Content 1</div>}
      {activeBtn2 && <div>Content 2</div>}
      {activeBtn3 && <div>Content 3</div>}
    </div>
  );
};

export default Tab;
