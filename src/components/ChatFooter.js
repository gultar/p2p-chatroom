import React, { useState } from 'react';

const ChatFooter = ({socket}) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault()
    if(message.trim() && localStorage.getItem("userName")) {
      //The message will first be sent to the server, then the server will 
      //spread it to the peers it is connected with, who will display it to their 
      //user endpoints
    socket.emit("message", 
        {
        text: message, 
        name: localStorage.getItem("userName"), 
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
        key: socket.id
        }
    )
    }
    setMessage("")
}
  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="sendBtn">SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;