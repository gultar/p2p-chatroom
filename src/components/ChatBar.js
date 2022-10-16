import React, { useState } from 'react';
import { saveConnectedUsersToStorage } from '../utils/utils.js'


const ChatBar = ({ socket }) => {
    
    const [connectedUsers, setConnectedUsers] = useState({})

    socket.on('usersOnline', (users)=>{
        setConnectedUsers(users)
        saveConnectedUsersToStorage(users)
    })

    return (
        <div className="chat__sidebar">
        <h2>P2P Chat</h2>

        <div>
            <h4 className="chat__header">ACTIVE USERS</h4>
            <div className="chat__users">
                {Object.values(connectedUsers).map((user)=>(<p key={user.socketID}>{user.userName}</p>))}
            </div>
        </div>
        </div>
    );
};

export default ChatBar;