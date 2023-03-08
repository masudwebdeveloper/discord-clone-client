import { PlusCircleIcon } from "@heroicons/react/24/outline";
import {
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HashtagIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import {
  selectChannelId,
  selectChannelName,
} from "../../features/channelSlice";

const Chat = () => {
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const { user } = useContext(AuthContext);
  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between space-x-5 border-b border-gray-800 p-4 -mt-1">
        <div className="flex items-center space-x-1">
          <HashtagIcon className="h-6 text-discord_chatHeader" />
          <h4 className="text-white font-semibold">{channelName}</h4>
        </div>
        <div className="flex space-x-3">
          <BellIcon className="icon" />
          <ChatBubbleOvalLeftEllipsisIcon className="icon" />
          <UsersIcon className="icon" />
          <div className="flex bg-discord_chatHeaderInputBg text-xs p-1 rounded-md">
            <input
              type="text"
              placeholder="search"
              className="bg-transparent focus:outline-none text-white placeholder-discord_chatHeader"
            />
            <MagnifyingGlassIcon className="h-4 text-discord_chatHeader mr-1" />
          </div>
          <InboxIcon className="icon" />
          <QuestionMarkCircleIcon className="icon" />
        </div>
      </header>
      <main className="grow overflow-y-scroll scrollbar-hide"></main>
      <div className="flex items-center p-2.5 bg-discord_chatInputBg mx-5 mb-7 rounded-lg">
        <PlusCircleIcon className="icon" />
        <form action="">
          <input type="text" name="" id="" disabled={!channelId} />
        </form>
      </div>
    </div>
  );
};

export default Chat;
