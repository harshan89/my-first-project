"use client";

import { ReactNode, useState } from "react";
import Header from "./Header";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import { FcAddColumn } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import Tab from "../Tab/Tab";
import PostList from "../Post/Post";
import Users from "../Users/Users";

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

  const tabs1: { tabHeader: string; tabContent: string }[] = [
    { tabHeader: "Tab 1", tabContent: "Content 1" },
    { tabHeader: "Tab 2", tabContent: "Content 2" },
    { tabHeader: "Tab 3", tabContent: "Content 3" },
    { tabHeader: "Tab 4", tabContent: "Content 4" },
    { tabHeader: "Tab 5", tabContent: "Content 5" },
    { tabHeader: "Tab 6", tabContent: "Content 6" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-blue-200">
      {/* header section start */}
      <Header />
      {/* header section end */}

      {/* body section start */}
      <div className="flex gap-[20px] justify-center pt-10">
        <LeftPanel leftMenu={leftMenu} />
        <div className="h-[500px] w-[800px] bg-purple-500">
          {/* <Tab tabs={tabs1} /> */}
          {/* <PostList /> */}
          <Users />
        </div>
        <RightPanel rightMenu={rightMenu} />
      </div>

      {/* body section end */}

      {/* footer start */}
      <div className="h-[80px] bg-green-500 w-screen fixed bottom-0"></div>
      {/* footer end */}
    </div>
  );
};

export default Home;
