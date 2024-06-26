import React, { useEffect, useRef, useState } from 'react'
import ChatComponentContainer from '../assets/styles/ChatComponentContainer';
import Logout from './Logout';
import ChatInput from './ChatInput';
import axios from "axios";
import { getAllMessagesRoute, sendMessageRoute } from '../utils/APIRoutes';
import {v4 as uuidv4} from "uuid";
import {ArrowLeft} from 'react-bootstrap-icons';
const ChatComponent = ({currentChat, currentUser,socket,setCurrentChat}) => {

  const [messages,setMessages]=useState([]);
  const [arrivalMessage,setArrivalMessage]=useState(null);
  const scrollRef=useRef();

  useEffect(()=>{
    async function getMessage(){
      if(currentChat){
        const response=await axios.post(getAllMessagesRoute,{
          from:currentUser?._id,
          to:currentChat?._id,
        });
        setMessages(response?.data);
      }
      }
    getMessage();
  },[currentChat])

  const handleSendMsg=async (msg)=>{
    // alert(msg);
    await axios.post(sendMessageRoute,{
      from:currentUser?._id,
      to:currentChat?._id,
      message:msg
    });
    socket.current.emit("send-msg",{
      to:currentChat._id,
      from:currentUser._id,
      message:msg,
    });

    const msgs=[...messages];
    msgs.push({fromSelf:true,message:msg});
    setMessages(msgs);
  };

  useEffect(()=>{
    if(socket.current){
      socket.current.on("msg-recieve",(msg)=>{
        setArrivalMessage({fromSelf:false,message:msg});
      });
    }
  },[]);

  useEffect(()=>{
    arrivalMessage && setMessages((prev)=>[...prev,arrivalMessage]);
  },[arrivalMessage]);

  useEffect(()=>{
    scrollRef.current?.scrollIntoView({behaviour:"smooth"});
  },[messages]);

  return (
    <ChatComponentContainer>
      <div className='chat-header'>
        <div className='user-details'>
          <div>
            <button onClick={()=>{setCurrentChat(undefined)}}><ArrowLeft/></button>
          </div>
          <div className='avatar'>
          <img src={currentChat?.avatarImage} alt="avatar" />
          </div>
          <div className='username'>
            <h3>{currentChat?.username}</h3>
          </div>
        </div>
        <Logout/>
      </div>
      <div className='chat-messages'>
        {
          messages.map((message)=>{
            return (
              <div ref={scrollRef} key={uuidv4()}>
                <div className={`message ${message.fromSelf?"sended":"recieved"}`}>
                  <div className='content'>
                    <p>
                      {message.message}
                    </p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <ChatInput handleSendMsg={handleSendMsg}/>
    </ChatComponentContainer>
  )
}

export default ChatComponent;