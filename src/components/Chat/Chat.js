import { PlusCircleIcon } from "@heroicons/react/24/outline";
import {
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  FaceSmileIcon,
  GiftIcon,
  HashtagIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import React, { useContext, useRef } from "react";
import { useSelector } from "react-redux";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import {
  selectChannelId,
  selectChannelName,
} from "../../features/channelSlice";
// import {firebase} from "firebase";

const Chat = () => {
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const { user } = useContext(AuthContext);
  const inputRef = useRef("");

  function getTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  const time = getTime(new Date())
  // console.log(time);
  var aDay = 24 * 60 * 60 * 1000;
console.log(aDay);
  
  const date_time = new Date().toTimeString();
  const sendMessage = (e) => {
    e.preventDefault();
    if (inputRef.current.value !== "") {
      const messageData = {
        channelId,
        channelName,
        message: inputRef.current.value,
        name: user?.displayName,
        photoURL: user?.photoURL,
        email: user?.email,
      };
      // console.log(messageData);
      // fetch("http://localhost:5000/message",{
      //   method: "post",
      //   headers: {
      //     "content-type": "application/json"
      //   },
      //   body: JSON.stringify(message)
      // })
    }
  };
  // console.log(channelId, channelName);
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
        <PlusCircleIcon className="icon mr-4" />
        <form action="" className="grow">
          <input
            type="text"
            name=""
            id=""
            disabled={!channelId}
            placeholder={
              channelId ? `message #${channelName}` : "Select a Channel"
            }
            className="bg-transparent focus:outline-none w-full text-discord_chatInputText placeholder-discord_chatInput text-sm"
            ref={inputRef}
          />
          <button type="submit" hidden onClick={sendMessage}>
            send
          </button>
        </form>
        <GiftIcon className="icon mr-2" />
        <FaceSmileIcon className="icon" />
      </div>
    </div>
  );
};

export default Chat;
