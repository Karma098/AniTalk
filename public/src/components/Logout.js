import React from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {BiPowerOff} from "react-icons/bi";
import LogoutContainer from '../assets/styles/LogoutContainer';

const Logout = () => {
  const navigate=useNavigate();
  const handleClick = ()=>{
    localStorage.clear();
    navigate("/login");
  };
  return (
    <LogoutContainer onClick={handleClick}><BiPowerOff/></LogoutContainer>
  );
};

export default Logout;