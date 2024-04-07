import React, { useEffect, useState } from 'react';
import ChatContainer from '../assets/styles/ChatContainer';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { allUserRoute } from '../utils/APIRoutes';
import Contact from '../components/Contact';

const Chat = () => {
  const [contacts,setContacts]=useState([]);
  const [currentUser,setCurrentUser]=useState(undefined);
  const [currentChat,setCurrentChat]=useState(undefined);

  const navigate=useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem("AniTalk-user")){
      navigate('/login');
    }else{
      setCurrentUser(JSON.parse(localStorage?.getItem("AniTalk-user")));
    }
  },[]);

  useEffect(()=>{
    async function getData(){
      if(currentUser){
        if(currentUser.isAvatarImageSet){
          const data=await axios.get(`${allUserRoute}/${currentUser._id}`);
          // console.log(data);
          setContacts(data.data);
        }else{
          navigate("/setAvatar");
        }
      }
    }
    getData();
  },[currentUser]);

  const handleChatChange=(chat)=>{
    setCurrentChat(chat);
  }


  return (
    <ChatContainer>
      <div className='container'>
        <Contact contacts={contacts} currentUser={currentUser} changeChat={handleChatChange}/>
      </div>
    </ChatContainer>
  )
}

export default Chat;