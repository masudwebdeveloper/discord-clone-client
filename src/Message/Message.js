import { TrashIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const Message = ({ messageDoc, refetch }) => {
  const { user } = useContext(AuthContext);
  const { _id, message, messageDate, messageTime, photoURL, name, email } =
    messageDoc;

  const handleMessageDelete = (id) => {
    const procced = window.confirm(
      "are you sure do you wanna delete this messsage"
    );
    if (procced) {
      fetch(`https://discord-server.vercel.app/message/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            refetch();
          }
        })
        .catch((err) => console.error(err.message));
    }
  };

  return (
    <div className="flex items-center justify-between p-1 pl-5 my-5 mr-2 hover:bg-discord_messageBg group">
      <div className="flex items-center">
        <img
          src={photoURL}
          alt=""
          className="h-10 rounded-full cursor-pointer mr-3 hover:shadow-2xl"
        />
        <div className="flex flex-col">
          <h4 className="flex items-center space-x-2 font-medium">
            <span className="text-white hover:underline ">{name}</span>
            <span className="text-discord_messageTimesTamp text-xs">
              {messageDate},
            </span>
            <span className="text-discord_messageTimesTamp text-xs">
              {messageTime}
            </span>
          </h4>
          <p className="text-discord_message text-sm">{message}</p>
        </div>
      </div>
      <div>
        {user?.email === email && (
          <div
            className="hover:bg-discord_deleteIcon text-discord_deleteIcon hover:text-white p-1 ml-auto rounded-sm mr-5"
            onClick={() => handleMessageDelete(_id)}
          >
            <TrashIcon className="h-5 hidden group-hover:inline" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
