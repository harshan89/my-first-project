"use client";

import { ReactNode, useState } from "react";
import Header from "./Header";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import { FcAddColumn } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";

const Home = () => {
  const [leftMenu, setLeftMenu] = useState<string[]>([
    "Heart",
    "Comment",
    "Save",
    "Repeat",
  ]);

  const [rightMenu, setRightMenu] = useState<
    { itemName: string; itemIcon: ReactNode }[]
  >([
    { itemName: "Cricket", itemIcon: <FcAddColumn /> },
    { itemName: "Football", itemIcon: <FcApproval /> },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-blue-200">
      {/* header section start */}
      <Header />
      {/* header section end */}

      {/* body section start */}
      <div className="flex gap-[20] justify-center pt-10">
        <LeftPanel leftMenu={leftMenu} />
        <div className="h-[500] w-[800] bg-purple-500"></div>
        <RightPanel rightMenu={rightMenu} />
      </div>

      {/* body section end */}

      {/* footer start */}
      <div className="h-[80] bg-green-500 w-screen fixed bottom-0"></div>
      {/* footer end */}
    </div>
  );
};

export default Home;
