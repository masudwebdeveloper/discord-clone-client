import { ChevronDownIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Channel from "../Channel/Channel";
import ServerIcon from "../ServerIcon/ServerIcon";

const Home = () => {
  const { user, logOut } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  console.log(user);
  if (!user) {
    navigate("/");
  }

  //create a channle using this function
  const handleAddChannel = () => {
    const channelName = prompt("Enter a new channel name");
    if (channelName) {
      setLoading(true);
      fetch("http://localhost:5000/channels", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          channelName: channelName,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            setLoading(false);
            refetch();
          }
        })
        .catch((err) => console.error(err.message));
    }
  };

  const {
    isLoading,
    error,
    data: channels = [],
    refetch,
  } = useQuery({
    queryKey: ["channels"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/channels");
      const data = res.json();
      return data;
    },
  });

  const handleSignOut = () => {
    logOut()
      .then(() => {
        // window.location.reload();
      })
      .catch((err) => console.error(err.message));
  };

  if (loading || isLoading) {
    return (
      <h1 className="flex items-center justify-center h-screen">loading...</h1>
    );
  }
  if (error) {
    return "an error has occurred: " + error.message;
  }
  // console.log(channels);
  return (
    <div className="flex h-screen">
      <div className="flex flex-col space-y-3 bg-discord_serversBg min-w-max p-3">
        <div className="server-default hover:bg-discord_purple text-white">
          <img
            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6cc3c481a15a141738_icon_clyde_white_RGB.png"
            alt=""
            className="h-6 w-6"
          />
        </div>
        <hr className="border-gray-700 border w-8 mx-auto" />
        <ServerIcon image="https://www.adobe.com/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium" />
        <ServerIcon image="https://www.seekpng.com/png/full/19-198465_youtube-square-youtube-logo-square-png.png" />
        <ServerIcon image="https://www.adobe.com/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium" />
        <ServerIcon image="https://www.seekpng.com/png/full/19-198465_youtube-square-youtube-logo-square-png.png" />
        <div className="server-default hover:bg-discord_green group">
          <PlusIcon className="text-discord_green h-7 group-hover:text-white" />
        </div>
      </div>
      <div className="bg-discord_channelsBg flex flex-col min-w-max">
        <h2 className="flex items-center justify-between text-white font-bold text-sm border-b border-gray-800 p-4 hover:bg-discord_serverNameBg">
          Official Masud Server...
          <ChevronDownIcon className="h-5 ml-2" />{" "}
        </h2>
        <div className="text-discord_channel flex-grow overflow-y-scroll scrollbar-hide">
          <div className="flex items-center p-2 mb-3">
            <ChevronDownIcon className="h-3 mr-3" />
            <h4>Channels</h4>
            <PlusIcon
              className="h-6 ml-auto hover:text-white cursor-pointer"
              onClick={handleAddChannel}
            />
          </div>
          <div className="flex flex-col space-y-2 mb-4">
            {channels.map((channel) => (
              <Channel key={channel._id} channel={channel} />
            ))}
          </div>
        </div>
        <div>
          <div>
            <img
              src={user?.photoURL}
              alt={user?.photoURL}
              className="h-10 rounded-full cursor-pointer"
              onClick={handleSignOut}
            />
            <h4 className="text-white text-xs font-medium ">
              {user?.displayName}
              <span></span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
