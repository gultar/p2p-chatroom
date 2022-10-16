import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChatBody = ({ messages, lastMessageRef }) => {
  const navigate = useNavigate();
  const handleLeaveChat = () => {
    localStorage.removeItem('userName');
    navigate('/');
    window.location.reload();
  };
  
  return (
    <>
      {/* Would normally display the discovery-swarm channel used
          to find peers */}
      <header className="chat__mainHeader">
        <p className="channelName">Channel</p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          LEAVE CHAT
        </button>
      </header>

      <div className='message__container'>
        {/* Displays the list of messages received so far
            -- TODO: implement message storage for retrieval later */}

          {/* Defines whether or not the message is from you or another user
              and formats it accordingly */}
          {messages.map(message => (
            message.name === localStorage.getItem("userName") ? (
              <div className="message__chats" key={message.id}>
            <p className='sender__name'>You</p>
            <div className='message__sender'>
                <p>{message.text}</p>
            </div>
          </div> 
            ): (
              <div className="message__chats" key={message.id}>
            <p>{message.name}</p>
            <div className='message__recipient'>
                <p>{message.text}</p>
            </div>
          </div>
            )
            ))}

          <div className='message__status'>
            
          </div>
          <div ref={lastMessageRef} />   
        </div>
    </>
  );
};

export default ChatBody;