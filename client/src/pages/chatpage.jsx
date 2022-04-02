import { useEffect, useState } from 'react';
import axios from 'axios';
const Chatpage = () => {
  const [chatDatas, setChatDatas] = useState([]);
  const fetchChats = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/users`);
    setChatDatas(data);
  };
  useEffect(() => {
    fetchChats();
  }, []);
  return (
    <div>
      {chatDatas.map(chatData => (
        <div key={chatData.id}>{chatData.name}</div>
      ))}
    </div>
  );
};
export default Chatpage;
