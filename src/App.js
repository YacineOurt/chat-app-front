import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatPage from './compenents/ChatPage';
import socketIO from 'socket.io-client';
import Home from './compenents/Home';

const socket = socketIO.connect('https://main.d1miu8n3aj8c0h.amplifyapp.com:4000');
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