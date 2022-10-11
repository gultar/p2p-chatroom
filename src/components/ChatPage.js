import React, { useEffect, useState, useRef } from 'react';
import ChatBar from './ChatBar.js';
import ChatBody from './ChatBody.js';
import ChatFooter from './ChatFooter.js';

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const lastMessageRef = useRef(null);

  useEffect(() => {
    socket.on('messageResponse', (data) => {
      console.log('Received', data)
      setMessages([...messages, data])
    });
  }, [socket, messages]);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat">
      <ChatBar socket={socket} />
      <div className="chat__main">
        <ChatBody 
          messages={messages}
          lastMessageRef={lastMessageRef}
          />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;