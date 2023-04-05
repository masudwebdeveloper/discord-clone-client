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
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useRef } from "react";
import { useSelector } from "react-redux";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import {
  selectChannelId,
  selectChannelName,
} from "../../features/channelSlice";
import Message from "../../Message/Message";
// import {firebase} from "firebase";
// import time from "../../utils/utils";

const Chat = () => {
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const { user } = useContext(AuthContext);
  const inputRef = useRef("");
  const chatRef = useRef(null);
  // console.log(channelId, channelName);
  const { data: messages = [], refetch } = useQuery({
    queryKey: [channelId],
    queryFn: async () => {
      const res = await fetch(
        `https://discord-server.vercel.app/messages/${channelId}`
      );
      const data = await res.json();
      return data;
    },
  });
  // console.log(messages);
  function getTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  const time = getTime(new Date());

  const date = new Date().toDateString();

  const scrollToBottom = () => {
    chatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  //this is messege function

  const sendMessage = (e) => {
    e.preventDefault();
    if (inputRef.current.value !== "") {
      const messageData = {
        channelId,
        channelName,
        messageDate: date,
        messageTime: time,
        message: inputRef.current.value,
        name: user?.displayName,
        photoURL: user?.photoURL,
        email: user?.email,
      };
      // console.log(messageData);
      fetch("https://discord-server.vercel.app/message", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(messageData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            refetch();
          }
        })
        .catch((err) => console.error(err.message));
    }
    inputRef.current.value = "";
    scrollToBottom();
  };
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
      <main className="grow overflow-y-scroll scrollbar-hide">
        {messages?.map((messageDoc) => (
          <Message
            key={messageDoc._id}
            refetch={refetch}
            messageDoc={messageDoc}
          />
        ))}
        <div ref={chatRef} className="pb-16" />
      </main>
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
