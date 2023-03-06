import { HashtagIcon } from "@heroicons/react/24/outline";
import React from "react";

const Channel = ({ channel }) => {
  return (
    <div className="cursor-pointer hover:bg-gray-800 hover:text-white p-2">
      <HashtagIcon /> {channel.channelName}
    </div>
  );
};

export default Channel;
