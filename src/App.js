import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import ChatPage from './components/ChatPage.js';
import socketIO from 'socket.io-client'

//To be made local only --- set in window object for testing purposes
let socket = socketIO.connect(`http://localhost:3333`, {cors:'*'});

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home socket={socket} />}></Route>
          <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;