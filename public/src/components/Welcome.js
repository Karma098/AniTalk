import React from 'react'
import Robot from "../assets/robot.gif";
import WelcomeContainer from '../assets/styles/WelcomeContainer';
const Welcome = ({currentUser}) => {
  return (
    <WelcomeContainer>
      <img src={Robot} alt='robot'/>
      <h1>Welcome, <span>{currentUser?.username}</span></h1>
      <h3>Please select a chat to Start Messaging. </h3>
    </WelcomeContainer>
  )
}

export default Welcome;