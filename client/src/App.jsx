import { Routes, Route, Link } from 'react-router-dom';
import Chatpage from './pages/chatpage';
import Loginpage from './pages/loginpage';
import Registerpage from './pages/registerpage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Loginpage />} />
        <Route path='/register' element={<Registerpage />} />
        <Route path='chat' element={<Chatpage />} />
      </Routes>
    </>
  );
}

export default App;
