import React from "react";

const Message = ({ messageDoc }) => {
  const { _id, message, messageDate, messageTime, photoURL, name } = messageDoc;
  return (
    <div className="flex items-center p-1 pl-5 my-5 mr-2 hover:bg-discord_messageBg group">
      <img
        src={photoURL}
        alt=""
        className="h-10 rounded-full cursor-pointer mr-3 hover:shadow-2xl"
      />
      <div className="flex flex-col">
        <h4 className="flex items-center space-x-2 font-medium">
          <span className="text-white hover:underline ">{name}</span>
          <span>{messageDate},</span>
          <span>{messageTime}</span>
        </h4>
      </div>
    </div>
  );
};

export default Message;
