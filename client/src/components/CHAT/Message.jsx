import React, { useEffect, useRef } from "react";
import "./Message.css";
import { format } from "timeago.js";

function Message({ message, own }) {
  const scroll = useRef();

  useEffect(() => {
    scroll.current?.scrollIntoView({ behaviour: "smooth" });
  }, [message]);
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop" ref={scroll}>
        <img
          src="https://cdn5.vectorstock.com/i/1000x1000/01/69/businesswoman-character-avatar-icon-vector-12800169.jpg"
          alt=""
          className="messageImg"
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}

export default Message;
