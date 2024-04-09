import React, { useEffect, useRef, useState } from 'react';
import ChatContainer from '../assets/styles/ChatContainer';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { allUserRoute,host } from '../utils/APIRoutes';
import Contact from '../components/Contact';
import Welcome from '../components/Welcome';
import ChatComponent from '../components/ChatComponent';
import {io} from "socket.io-client";

const Chat = () => {
  const socket=useRef();
  const [contacts,setContacts]=useState([]);
  const [currentUser,setCurrentUser]=useState(undefined);
  const [currentChat,setCurrentChat]=useState(undefined);

  const navigate=useNavigate();

  useEffect(()=>{
    if(!localStorage?.getItem("AniTalk-user")){
      navigate('/login');
    }else{
      setCurrentUser(JSON.parse(localStorage?.getItem("AniTalk-user")));
    }
  },[]);

  useEffect(()=>{
    if(currentUser){
      socket.current=io(host);
      socket.current.emit("add-user",currentUser?._id);
    }
  },[currentUser]);

  useEffect(()=>{
    async function getData(){
      if(currentUser){
        if(currentUser?.isAvatarImageSet){
          const data=await axios.get(`${allUserRoute}/${currentUser._id}`);
          // console.log(data);
          setContacts(data?.data);
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
    <ChatContainer currentChat={currentChat}>
      <div className='container'>
        <Contact contacts={contacts} currentUser={currentUser} changeChat={handleChatChange}/>
        {
          currentChat===undefined?
          <Welcome currentUser={currentUser}/>:
          <ChatComponent currentChat={currentChat} currentUser={currentUser} socket={socket} setCurrentChat={setCurrentChat}/>
        }
      </div>
    </ChatContainer>
  )
}

export default Chat;