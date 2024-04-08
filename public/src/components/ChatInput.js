import React, { useState } from 'react'
import EmojiPicker from "emoji-picker-react";
import {IoMdSend} from "react-icons/io";
import {BsEmojiSmileFill} from "react-icons/bs";
import ChatInputContainer from '../assets/styles/ChatInputContainer';

const ChatInput = ({handleSendMsg}) => {
  const [showEmojiPicker,setShowEmojiPicker]=useState(false);
  const [msg,setMsg]=useState("");

  const handleEmojiPickerHideShow=()=>{
    setShowEmojiPicker(!showEmojiPicker);
  }

  const handleEmojiClick=async (emoji,event)=>{
    // console.log(event);
    let message=msg;
    message+=await emoji?.emoji;
    setMsg(message);
  }

  const sendChat=(event)=>{
    event.preventDefault();
    if(msg.length>0){
      handleSendMsg(msg);
      setMsg('');
    }
  }

  return (
    <ChatInputContainer>
      <div className='button-container'>
        <div className='emoji'>
          <BsEmojiSmileFill onClick={handleEmojiPickerHideShow}/>
          {showEmojiPicker&&<EmojiPicker onEmojiClick={handleEmojiClick} 
          className='emoji-picker-react '/>}
        </div>
      </div>
      <form className='input-container' onSubmit={(e)=>sendChat(e)}>
        <input type='text' placeholder='Type your message here' value={msg} onChange={(e)=>setMsg(e.target.value)} onClick={showEmojiPicker?handleEmojiPickerHideShow:()=>{}}/>
        <button className='submit'>
          <IoMdSend/>
        </button>
      </form>
    </ChatInputContainer>
  )
}


export default ChatInput;