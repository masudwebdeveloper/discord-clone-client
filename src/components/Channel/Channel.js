import { HashtagIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setChannelInfo } from "../../features/channelSlice";

const Channel = ({ channel }) => {
  const { _id: id, channelName } = channel;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const setChannel = () => {
    dispatch(
      setChannelInfo({
        channelId: id,
        channelName,
      })
    );
    navigate(`/channels/${id}`);
  };
  return (
    <div
      className="cursor-pointer hover:bg-discord_channelHoverBg hover:text-white flex items-center p-1 rounded-md"
      onClick={setChannel}
    >
      <HashtagIcon className="h-5 mr-2" /> {channel.channelName}
    </div>
  );
};

export default Channel;
