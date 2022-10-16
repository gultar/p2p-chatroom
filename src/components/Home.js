import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Home = ({ socket }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userName', userName); //kind of useless

    const user = {
      userName:userName,
      socketID:socket.id,
    }
    
    socket.emit('newUser', { ...user });
    navigate('/chat');
  };
  return (
    <form className="home__container" onSubmit={handleSubmit}>
      <h2 className="home__header">Sign in to P2P</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        minLength={2}
        name="username"
        id="username"
        className="username__input"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="home__cta">SIGN IN</button>
    </form>
  );
};

export default Home;