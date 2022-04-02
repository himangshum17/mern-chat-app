import { Routes, Route, Link } from 'react-router-dom';
import Chatpage from './pages/chatpage';
import Homepage from './pages/homepage';

function App() {
  return (
    <>
      <h1 className='text-3xl font-bold text-green-600 underline'>
        Hello world!
      </h1>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='chat' element={<Chatpage />} />
      </Routes>
    </>
  );
}

export default App;
